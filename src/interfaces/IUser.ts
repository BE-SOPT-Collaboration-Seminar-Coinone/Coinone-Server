import mongoose from "mongoose";
import { ICoin } from "./ICoin";

export interface IUser {
    id: String;
    coin: [ICoin]

}