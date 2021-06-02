//db에서 리스트 가져와서 클라에 뿌려주기
import { Router, Request, Response } from "express";

import CoinList from "../models/CoinList"
const router = Router();

// src/api/post.ts의 GET api/posts 참고
/**
 *  @route GET api/mycoin/:id
 *  @desc Get post by ID
 *  @access Private
 */
router.get("/:sort/:ascending", async (req: Request, res: Response) => {
    try {
        let coins = await CoinList.find();
        if (req.params.sort === "title") {
            if (req.params.ascending === "1") {
                coins = await CoinList.find().sort({ coinKoreanTitle: 1 });
            }
            else {
                coins = await CoinList.find().sort({ coinKoreanTitle: -1 });
            }
        }
        else if (req.params.sort === "current-price") {
            if (req.params.ascending === "1") {
                coins = await CoinList.find().sort({ coinCurrentPrice: 1 });
            }
            else {
                coins = await CoinList.find().sort({ coinCurrentPrice: -1 });
            }
        }
        else if (req.params.sort === "degree") {
            if (req.params.ascending === "1") {
                coins = await CoinList.find().sort({ degree: 1 });
            }
            else {
                coins = await CoinList.find().sort({ degree: -1 });
            }
        }
        else if (req.params.sort === "total-price") {
            if (req.params.ascending === "1") {
                coins = await CoinList.find().sort({ CoinTotalPrice: 1 });
            }
            else {
                coins = await CoinList.find().sort({ CoinTotalPrice: -1 });
            }
        }

        if (!coins) {
            return res.status(404).json({ msg: "Coins Not Found" });
        }
        res.json(coins);
    } catch (error) {
        console.error(error.message);
        if (error.kind === "ObjectId") {
            return res.status(404).json({ msg: "Coins not found" });
        }
        res.status(500).send("Server Error");
    }
});

module.exports = router;