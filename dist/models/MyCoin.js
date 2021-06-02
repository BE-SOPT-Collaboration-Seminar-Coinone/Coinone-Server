"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//나의 관심 코인
const mongoose_1 = __importDefault(require("mongoose"));
const MyCoinSchema = new mongoose_1.default.Schema({
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
    coinCurrentPrice: {
        type: String,
    },
    riseOrDescent: {
        type: String,
        required: true,
    },
    percentage: {
        type: String,
        required: true,
    },
    coinTotalPrice: {
        type: String,
        required: true,
    },
});
exports.default = mongoose_1.default.model("MyCoin", MyCoinSchema);
//# sourceMappingURL=MyCoin.js.map