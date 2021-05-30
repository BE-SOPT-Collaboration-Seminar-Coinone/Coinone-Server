//db에서 리스트 가져와서 클라에 뿌려주기
import { Router, Request, Response } from "express";

import User from "../models/User";

const router = Router();

// src/api/post.ts의 GET api/posts 참고
/**
 *  @route GET api/mycoin/:id
 *  @desc Get post by ID
 *  @access Private
 */
 router.get("api/mycoin/:id", async (req: Request, res: Response) => {
    try {
      const coins = await User.findById(req.params.id);
  
      if (!coins) {
        return res.status(404).json({ msg: "Coins not found" });
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