"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//나의 관심 코인
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model("User", UserSchema);
//# sourceMappingURL=User.js.map