import express, { Request, Response } from "express";
import config from "../config";
import { validationResult } from "express-validator";

const router = express.Router();

import CoinList from "../models/CoinList";
router.post(
    "/add-coin/",

    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { coinLogoImage, coinEnglishTitle, coinKoreanTitle, coinCurrentPrice, riseOrDescent, degree, percentage, coinTotalPrice, graphImage } = req.body;

        try {
            //User 객체 생성
            let coin = new CoinList({
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
            await coin.save();
            res.json(coin);

        } catch (err) {
            console.error(err.message);
            if (err.kind == "ObjectId") {
                return res.status(400).json({ msg: "Profile not found" });
                res.status(500).send("Server Error");
            }
        }
    }
);
module.exports = router;