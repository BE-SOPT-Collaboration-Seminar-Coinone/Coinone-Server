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
const User_1 = __importDefault(require("../models/User"));
const router = express_1.Router();
// src/api/post.ts의 GET api/posts 참고
/**
 *  @route GET api/mycoin/:id
 *  @desc Get post by ID
 *  @access Private
 */
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const coins = yield (yield User_1.default.findOne({ id: req.params.id }));
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
//# sourceMappingURL=myCoin.js.map