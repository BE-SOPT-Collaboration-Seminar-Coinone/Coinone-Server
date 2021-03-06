import express from "express"; //서버구축을 도와주는 프레임워크
const app = express();
import connectDB from "./Loader/db";

// Connect Database
connectDB();

// Define Routes
app.use(express.json());

// Define Routes
app.use("/api/add-coin", require("./api/add-coin"));
app.use("/api/add-user", require("./api/add-user"));
app.use("/api/my-coin", require("./api/my-coin"));
app.use("/api/coin-list", require("./api/coin-list"));
// app.use("/api/coinList/", require("./api/coinList/"));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app
  .listen(5000, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: 5000 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
