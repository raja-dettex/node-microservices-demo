import { Order } from "../entity/Order";
import { OrderRepositoryImpl } from "../repository/orders.repository.interface";
import { OrderService } from "./orders.sevice"

describe("order service", ()=> {
    let orderService: OrderService;
    let orderRepository: OrderRepositoryImpl;
    let orders: Order[] = [
        {
            id: 1,
            orderNumber: "fssfsfd",
            item: "iphone 13",
            price: 65000,
            quantity: 1
        }
    ]
    beforeAll(()=> {
        orderRepository = {
            getAll: jest.fn().mockImplementation(async ()=> ( orders)),
            getById: jest.fn().mockImplementation(async (id: number) => orders[0]),
            create: jest.fn(),
            delete: jest.fn()
        };
        orderService = new OrderService(orderRepository);
    });

    it("shoud return an array of order", async ()=> {
        expect(await orderService.getAllOrders()).toEqual(orders);
    });
    it("shoud return order of givn id", async ()=> {
        expect(await orderService.getOrderById(orders[0].id)).toEqual(orders[0]);
    })
    
})