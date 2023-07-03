import { Request, Response } from "express"
import { CreateOrderDto } from "../dtos/create.order.dto";
import {  v4 as uuidv4} from 'uuid';
import { Order } from "../entity/Order";
import { OrderServiceImpl } from "../interfaces/order.service.interface";
import { OrderService } from "../services/orders.sevice";
import { OrderResponseDto } from "../dtos/order.response.dto";
import { OrderRepository } from "../repository/Orders.repository";

const orderRepo = new OrderRepository();
const orderService = new OrderService(orderRepo);

const getAllOrders  = async (req: Request, res: Response ) => {

        try {
            
            console.log(orderService == undefined);
            console.log(orderService);
            const response: OrderResponseDto[]  = await orderService.getAllOrders();
            res.status(200).json({message: "success", data: response});
        } catch(e:any) {
            res.status(400).json({message: "failure", error: e.message});
        }
    }
    
    const  getOrderById  = async(req: Request, res: Response ) =>  {
        try {
            const orderId = parseInt(req.params.id);
            const response: OrderResponseDto | null = await orderService.getOrderById(orderId);
            if(response == null) {
                res.status(404).json({message: "failure", data: null});
                res.end();
        }
        res.status(200).json({message: "success", data: response});
        } catch(e:any) {
            res.status(400).json({message: "failure", error: e.message});
        }
    }
    
    const createOrder = async  (req: Request, res: Response ) =>  {
        try {
            const orderDto: CreateOrderDto = { orderNumber: uuidv4(), ...req.body}
            const response: OrderResponseDto = await  orderService.createOrder(orderDto);
            res.status(200).json({message: "success", data: response});
        } catch(e:any) {
            res.status(400).json({message: "failure", error: e.message});
        }
    }
    
    const  deleteOrder  = async (req: Request, res: Response )=> {
        try {
            const orderId = parseInt(req.params.id);
            const response : boolean = await orderService.deleteOrder(orderId);
            const message = !response?"failure":"success"
            res.status(200).json({message: message, data: response});
        } catch(e:any) {
            res.status(400).json({message: "failure", error: e.message});
        }
    }
 export {getAllOrders, getOrderById, createOrder,deleteOrder};


