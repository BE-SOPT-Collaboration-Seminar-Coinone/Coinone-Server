//코인 리스트
import mongoose from "mongoose";
import { ICoin } from "../interfaces/ICoin";

const CoinListSchema = new mongoose.Schema({
  coinLogoImage: {
    type: String,
    required: true,
  },
  coinEnglishTitle: {
    type: String,
    required: true,
    unique: true,
  },
  coinKoreanTitle: {
    type: String,
    required: true,
  },
  coinCurrentPrice: {
    type: String,
    required: true,
  },
  riseOrDescent: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true
  },
  percentage: {
    type: String,
    required: true,
  },
  coinTotalPrice: {
    type: String,
    required: true,
  },
  graphImage: {
    type: String,
    required: true
  }
});

export default mongoose.model<ICoin & mongoose.Document>("CoinList", CoinListSchema);