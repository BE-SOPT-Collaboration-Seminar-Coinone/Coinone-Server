"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //서버구축을 도와주는 프레임워크
const app = express_1.default();
const db_1 = __importDefault(require("./Loader/db"));
// Connect Database
db_1.default();
// Define Routes
app.use(express_1.default.json());
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
//# sourceMappingURL=index.js.map