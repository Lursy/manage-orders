import { Document, Types } from "mongoose";

export interface IUser extends Document {
    _id: Types.ObjectId;
    name: string;
    email: string;
    phoneNumber: string;
}

export interface InputCreateUserDto {
    name?: string;
    email?: string;
    phoneNumber?: string;
}