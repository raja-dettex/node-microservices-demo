import { CreateOrderDto } from "../dtos/create.order.dto";
import { OrderResponseDto } from "../dtos/order.response.dto";

export interface OrderServiceImpl {
    createOrder(orderdto: CreateOrderDto) : Promise<OrderResponseDto>;
    getAllOrders(): Promise<OrderResponseDto[]>;
    getOrderById(id: number): Promise<OrderResponseDto | null>;
    deleteOrder(id: number): Promise<boolean>;
}