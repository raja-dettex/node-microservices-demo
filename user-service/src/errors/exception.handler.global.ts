import { NextFunction, Request, Response } from "express";
import { ApiError } from "./api.error";

export const handleApiException = (err: ApiError, req: Request, res: Response, next: NextFunction)  => {
    if(err) {
        res.json({message: err.message});
        res.end();
    }
}