import {Router, Request, Response } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser  } from '../controllers/user';


export function userRoutes(router: Router) {
    router.get("/api/v1/users", getAllUsers);
    router.get("/api/v1/users/:username", getUserById);
    router.post("/api/v1/users", createUser);
    router.put("/api/v1/users/:username", updateUser);
    router.delete("/api/v1/users", deleteUser);
}