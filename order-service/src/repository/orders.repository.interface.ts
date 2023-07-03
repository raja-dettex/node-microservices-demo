import { Order } from "../entity/Order";

export interface OrderRepositoryImpl {
    getAll(): Promise<Order[] > ;
    getById(id: number): Promise<Order | null >;
    create(order: Order) : Promise<Order>;
    delete(id: number): Promise<boolean>;
}