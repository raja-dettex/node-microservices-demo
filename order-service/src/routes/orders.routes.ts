import { Router } from "express";
import { getAllOrders, getOrderById, createOrder, deleteOrder } from "../controllers/orders.controllers";

export const orderRoutes = (router: Router) => {
    router.get("/api/v1/orders", getAllOrders);
    router.get("/api/v1/orders/:id", getOrderById);
    router.post("/api/v1/orders", createOrder);
    router.delete("/api/v1/orders/:id", deleteOrder);
}