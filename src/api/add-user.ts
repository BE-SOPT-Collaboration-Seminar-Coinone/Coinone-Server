import express, { Request, Response } from "express";
import config from "../config";
import { check, validationResult } from "express-validator";

const router = express.Router();

import CoinList from "../models/CoinList";
import User from "../models/User";
router.post(
    "/:user_id",
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { coinList } = req.body;
        // const { coinLogoImage, coinEnglishTitle, coinKoreanTitle, coinPrice, riseOrDescent, degree, percentage, coinTotalPrice, graphImage } = req.body;

        try {
            //User 객체 생성
            let user = new User({
                id: req.params.user_id,
                coin: coinList
            });
            //DB에 업데이트 -> 아까 설정한 URI에 따라서 DB에 업데이트됨
            await user.save();
            res.json(user);

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