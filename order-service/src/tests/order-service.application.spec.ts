import {  app, initApp } from './../index';
import { Express } from 'express';
import request from 'supertest';
import { postgresDataSource } from '../connection/connection';
import { Order } from '../entity/Order';
import { OrderRepository } from '../repository/Orders.repository';
describe("e2e test",  ()=> {
    let baseUrl: string;
    let App: any;
    beforeAll(()=> {
        App = initApp();
        baseUrl = "http://localhost:5000/api/v1"
    });
    afterAll(async()=> {
        const orderTestRepo = new OrderRepository();
        const orders: Order[] = await orderTestRepo.getAll();
        const ids: number[] = orders.map(order=> order.id);
        const result = await orderTestRepo.deleteAll(ids);
        console.log("Deleted = " + result);
        App.close(()=> {
            console.log("http server closed");
            process.exit(0);
        })
        
    })
    it("GET /api/v1/orders",   ()=> {
        request(baseUrl).get("/orders")
                    .expect("Content-Type", "application/json")
                    .expect(200)
                    .expect(res => console.log(res.body));
                    
    });
    // it("POST /api/v1/orders")
})