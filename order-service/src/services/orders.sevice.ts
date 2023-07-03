import { CreateOrderDto } from "../dtos/create.order.dto";
import { OrderResponseDto } from "../dtos/order.response.dto";
import { Order } from "../entity/Order";
import { OrderServiceImpl } from "../interfaces/order.service.interface";
import { OrderRepository } from "../repository/Orders.repository";
import { OrderRepositoryImpl } from "../repository/orders.repository.interface";

export class OrderService implements OrderServiceImpl {
    private orderRepo: OrderRepositoryImpl;
    public constructor(orderRepo: OrderRepositoryImpl) {
        console.log("service constructor is called");
        this.orderRepo  = orderRepo;
        console.log(this.orderRepo);
    }


    async createOrder(orderDto: CreateOrderDto): Promise<OrderResponseDto>  {
        const { orderNumber, item, price, quantity} = orderDto

        const order: Order = new Order(orderNumber, item, price, quantity);
        const orderCreated: Order = await this.orderRepo.create(order);
        return  this.mapToOrderResponse(orderCreated);
    }

    async getAllOrders() : Promise<OrderResponseDto[]> {
        const orders: Order[] = await this.orderRepo.getAll();
        return orders.map(order=> this.mapToOrderResponse(order));
    }

    async getOrderById(id: number ): Promise<OrderResponseDto| null> {
        const order: Order | null = await this.orderRepo.getById(id);
        return (order!=null)?this.mapToOrderResponse(order):null
    }

    async deleteOrder(id: number): Promise<boolean> {
        return this.orderRepo.delete(id);
    }

    private mapToOrderResponse(order: Order) {
        const orderResponse: OrderResponseDto = {...order}
        return orderResponse;
    }


}




