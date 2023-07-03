import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';
import { createConnection } from './connection/connection';
import { orderRoutes } from './routes/orders.routes';
import { port } from './constants/constants';


const app = express();

app.use(cors({
    origin: ["localhost:5000", "localhost:4200", "localhost:8000"]
}));

export const initApp = () => {
    createConnection().then( ()=> {
    app.get("/welcome", (req: Request,res: Response)=> {
        res.send("welcome to app");
    });
    orderRoutes(app);
    app.listen(port, ()=> console.log(`app listening to port ${port}`));
    })
    .catch((e)=> console.log(e.message));
    return app;
}
initApp();
export { app};



