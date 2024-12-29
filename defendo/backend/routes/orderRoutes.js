import express from 'express';
import {createOrder, GetOrders, deleteOrder, } from '../controllers/orderController.js'
import { isAuthenticatedUser, isAuthorizedUser } from '../middleware/auth.js';
const router = express.Router();


router.route('/newOrder').post(createOrder);

router.route('/orders').get(GetOrders);

router.route('/deleteOrder/:id').delete(deleteOrder);

// router.route('/orderConfirmation').post(confirmationEmail);




export default router;