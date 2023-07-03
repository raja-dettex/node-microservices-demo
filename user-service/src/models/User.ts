import mongoose , { Schema, Document } from 'mongoose';


export interface IUser {
    username: string;
    email: string;
    password: string;
    createdAt: Date;

}

export interface IUserModel extends IUser, Document {

}

export const userSchema = new mongoose.Schema<IUser>({
    username: String, 
    email: String,
    password: String, 
    createdAt: { type : Date, default: Date.now }
});


export const userModel = mongoose.model<IUserModel>("User", userSchema);

