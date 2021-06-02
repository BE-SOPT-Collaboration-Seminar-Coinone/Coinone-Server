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
//db에서 리스트 가져와서 클라에 뿌려주기
const express_1 = require("express");
const CoinList_1 = __importDefault(require("../models/CoinList"));
const router = express_1.Router();
// src/api/post.ts의 GET api/posts 참고
/**
 *  @route GET api/mycoin/:id
 *  @desc Get post by ID
 *  @access Private
 */
router.get("/:sort/:ascending", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let coins = yield CoinList_1.default.find();
        if (req.params.sort === "title") {
            if (req.params.ascending === "1") {
                coins = yield CoinList_1.default.find().sort({ coinKoreanTitle: 1 });
            }
            else {
                coins = yield CoinList_1.default.find().sort({ coinKoreanTitle: -1 });
            }
        }
        else if (req.params.sort === "current-price") {
            if (req.params.ascending === "1") {
                coins = yield CoinList_1.default.find().sort({ coinCurrentPrice: 1 });
            }
            else {
                coins = yield CoinList_1.default.find().sort({ coinCurrentPrice: -1 });
            }
        }
        else if (req.params.sort === "degree") {
            if (req.params.ascending === "1") {
                coins = yield CoinList_1.default.find().sort({ degree: 1 });
            }
            else {
                coins = yield CoinList_1.default.find().sort({ degree: -1 });
            }
        }
        else if (req.params.sort === "total-price") {
            if (req.params.ascending === "1") {
                coins = yield CoinList_1.default.find().sort({ CoinTotalPrice: 1 });
            }
            else {
                coins = yield CoinList_1.default.find().sort({ CoinTotalPrice: -1 });
            }
        }
        if (!coins) {
            return res.status(404).json({ msg: "Coins Not Found" });
        }
        res.json(coins);
    }
    catch (error) {
        console.error(error.message);
        if (error.kind === "ObjectId") {
            return res.status(404).json({ msg: "Coins not found" });
        }
        res.status(500).send("Server Error");
    }
}));
module.exports = router;
//# sourceMappingURL=coin-list.js.map