import {NextFunction, Request, Response } from 'express';
import { UserService } from '../services/users.services';
import { UserDto } from '../dtos/user.dto';
import { ApiError } from '../errors/api.error';
const userService = new UserService();

async function getAllUsers(req: Request, res: Response, next: NextFunction) {
   try { 
    const data = await userService.findAllUsers({});
    res.status(200).json({message: "success", data: data});
   } catch(e: any){
    next(new ApiError(e.message, 400));
   }
}

async function getUserById(req: Request, res: Response, next: NextFunction) {
       try { 
        const {username} = req.params;
        const data = await userService.findUserById({username: username});
        if(!data) {
            next(new ApiError("user not found with username: "+ username, 400));
        }
        res.status(200).json({message: "success", data: data});
       } catch(e: any){
        next(new ApiError(e.message, 400));
       }
}

async function createUser(req: Request, res: Response, next: NextFunction) {
       try { 
        const { username, email, password } = req.body;
        if(!username || !email || !password) {
            next(new ApiError("username , email, password is required to create user", 400));
        }
        const userDto: UserDto = { username, email, password};
        const data = await userService.createUser(userDto);
        res.status(201).json({message: "created", data: data});
       } catch(e: any){
        next(new ApiError(e.message, 400));
       }
}

async function updateUser(req: Request, res: Response, next: NextFunction) {
       try { 
        const { username, email, password } = req.body;
        if(!username || !email || !password) {
            next(new ApiError("username , email, password is required to create user", 400));
        }
        const userDto: UserDto = { ...req.body};
        const data = await userService.updateUser(userDto, {username: username} );
        res.status(200).json({message: "success", data: data});
       } catch(e: any){
        next(new ApiError(e.message, 400));
       }
}
async function deleteUser(req: Request, res: Response, next: NextFunction) {
    try { 
     const { username } = req.params;
     const data = await userService.deleteUser({username: username} );
     if(!data) {
        next(new ApiError("no user matched with username: " + username, 400));
     }
     res.status(200).json({message: "success", data: data});
    } catch(e: any){
     next(new ApiError(e.message, 400));
    }
}

export { getAllUsers , getUserById, createUser, updateUser, deleteUser };