import express from 'express'
import { createOrder, GetOrders, deleteOrder } from '../controllers/orderController.js';

const router = express.Router();

router.route('checkout/newOrder').post(createOrder);

router.route('checkout/orders').get(GetOrders);

router.route('checkout/order/:id').delete(deleteOrder);



export default router;

