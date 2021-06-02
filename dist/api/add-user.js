"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
const User_1 = __importDefault(require("../models/User"));
router.post("/:user_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { coinList } = req.body;
    // const { coinLogoImage, coinEnglishTitle, coinKoreanTitle, coinPrice, riseOrDescent, degree, percentage, coinTotalPrice, graphImage } = req.body;
    try {
        //User 객체 생성
        let user = new User_1.default({
            id: req.params.user_id,
            coin: coinList
        });
        //DB에 업데이트 -> 아까 설정한 URI에 따라서 DB에 업데이트됨
        yield user.save();
        res.json(user);
    }
    catch (err) {
        console.error(err.message);
        if (err.kind == "ObjectId") {
            return res.status(400).json({ msg: "Profile not found" });
            res.status(500).send("Server Error");
        }
    }
}));
module.exports = router;
//# sourceMappingURL=add-user.js.map