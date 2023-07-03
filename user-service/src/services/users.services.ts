
import { UserDto } from '../dtos/user.dto';
import { UserResponse } from '../dtos/user.response.dto';
import { userModel, IUserModel, IUser  } from './../models/User';
import { FilterQuery, Types } from 'mongoose';

export class UserService {
    constructor() {}
    async findAllUsers(findAllQuery : FilterQuery<IUserModel>) : Promise<UserResponse[]> {
         const users: IUserModel[] = await userModel.find(findAllQuery);
         return (users.length > 0)?users.map(user => this.userToUserResponse(user) ): [];
    }
    async findUserById(getUserQuery: FilterQuery<IUserModel> ): Promise<UserResponse | null> {
        const user: IUserModel | null =  await userModel.findOne(getUserQuery);
        return (user!= null)?this.userToUserResponse(user): null 
    }

    async createUser({ username, email, password }: UserDto): Promise<UserResponse> {
        const user: IUserModel = new userModel({
            _id: new Types.ObjectId,
            username,
            email,
            password: password
        })
        const createdUser: IUserModel = await user.save();
        return this.userToUserResponse(createdUser);
    }

    async updateUser({ username, email, password}: UserDto, updateQuery : FilterQuery<IUserModel> ): Promise<UserResponse | null> {
        const updatedUser: IUserModel | null =  await userModel.findOneAndUpdate(updateQuery, { username, email, password}, );
        return (updatedUser != null)?this.userToUserResponse(updatedUser): null;
    }
    async deleteUser(deleteQuery: FilterQuery<IUserModel> ): Promise<boolean> {
        const result = await userModel.deleteOne(deleteQuery);
        return (result.deletedCount > 0)?true:false;
    }
    private userToUserResponse ( { _id, username, email, password, createdAt}: IUserModel): UserResponse {
        return new UserResponse(_id, username, email, password, createdAt);
    }
}