import { Types } from "mongoose";

export class UserResponse {
    _id!: Types.ObjectId;
    username!: string;
    email!: string;
    password!: string;
    createdAt!: Date
    constructor(_id: Types.ObjectId, username: string, email: string, password: string, createdAt: Date) {
        this._id = _id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
    }
}