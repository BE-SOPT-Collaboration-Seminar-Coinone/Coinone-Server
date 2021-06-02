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
const CoinList_1 = __importDefault(require("../models/CoinList"));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { coinLogoImage, coinEnglishTitle, coinKoreanTitle, coinCurrentPrice, riseOrDescent, degree, percentage, coinTotalPrice, graphImage } = req.body;
    try {
        //User 객체 생성
        let coin = new CoinList_1.default({
            coinLogoImage,
            coinEnglishTitle,
            coinKoreanTitle,
            coinCurrentPrice,
            riseOrDescent,
            degree,
            percentage,
            coinTotalPrice,
            graphImage
        });
        //DB에 업데이트 -> 아까 설정한 URI에 따라서 DB에 업데이트됨
        yield coin.save();
        res.json(coin);
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
//# sourceMappingURL=add-coin.js.map