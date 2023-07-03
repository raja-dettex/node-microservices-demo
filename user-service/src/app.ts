import express, { NextFunction, Request, Response} from 'express';
import { connectToDb } from './database/connection';
import { port } from './constants/constants';
import { userRoutes} from './routes/user';
import { handleApiException } from './errors/exception.handler.global';
import { ApiError } from './errors/api.error';

const app = express();

export async function initApp() {
    connectToDb().then(()=> {
    app.get("/health", (req:Request , res:Response, next: NextFunction )=> {
        next(new ApiError("error occured", 400));
        res.send("App is running ");
    });
    userRoutes(app);
    app.use(handleApiException);
    app.listen(port, ()=> console.log("app listening to port" + port));
}).catch((err:any) => console.log(err.message));
}