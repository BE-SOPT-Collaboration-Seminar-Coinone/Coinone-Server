//나의 관심 코인
import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

const UserSchema = new mongoose.Schema({
  id: {
    type : String,
  },
  coins: [
    {
      coinLogoImage: {
        type: String,
        required: true,
      },
      coinEnglishTitle: {
        type: String,
        required: true,
      },
      coinKoreanTitle: {
        type: String,
        required: true,
      },
      coinPrice: {
        type: String,
      },
      riseOrDescent: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      percentage: {
        type: String,
        required: true,
      },
      graphImageName: {
        type: String,
        required: true,
      },
    }
  ]
});

export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);