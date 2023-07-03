import { Repository } from "typeorm";
import { postgresDataSource } from "../connection/connection";
import { Order } from "../entity/Order";
import { OrderRepositoryImpl } from "./orders.repository.interface";

export class OrderRepository implements OrderRepositoryImpl {
    orderRepo!: Repository<Order>;
    public constructor() {
        this.orderRepo = postgresDataSource.getRepository<Order>(Order);
    }
    public async getAll() : Promise<Order[]> {
        return this.orderRepo.find();
    }

    public async getById(id: number) : Promise<Order | null> {
        return this.orderRepo.findOneBy({id: id});
    }

    public async create(order: Order) : Promise<Order> {
        return this.orderRepo.save(order);
    }

    public async delete(id: number) : Promise<boolean> {
        const deletedResult = await this.orderRepo.delete({id: id});
        return  (deletedResult.affected != null  && deletedResult.affected > 0);
    }

    public async deleteAll(ids: number[]) : Promise<boolean> {
        const deletedResult = await this.orderRepo.delete(ids);
        return  (deletedResult.affected != null  && deletedResult.affected > 0);
    }

}

