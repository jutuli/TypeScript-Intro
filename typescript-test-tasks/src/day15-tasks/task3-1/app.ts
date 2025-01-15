import { addOrderToService, createOrder } from "./order/index.ts";
import { createProduct, addProductToService } from "./product/index.ts";

createOrder(["Smartphone", "Earbuds", "Laptop"]);
addOrderToService("Billing", "4103-43");

createProduct("Keyboard", 299.99);
addProductToService("Shipping", "Keyboard");
