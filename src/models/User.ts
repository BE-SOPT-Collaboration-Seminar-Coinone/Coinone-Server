//나의 관심 코인
import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  coin: [
    {
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
    }

  ]
});

export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);