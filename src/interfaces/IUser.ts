import mongoose from "mongoose";
import { ICoin } from "./ICoin";

export interface IUser{
    id : string;
    coin : [ICoin];
}