import { Order } from "../model/orderSchema.js";
import nodemailer from "nodemailer"


export const createOrder = async (req, res, next) => {

    const createOrder = req.body
    try {
        await Order.create(createOrder)
        res.json({ message: "Order has been Placed",  createOrder })
    }
     catch (error) {
        next(error)
    }

}


export const GetOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();

        res.json(orders)
    }
     catch (error) {
        next(error)
    }



}
export const deleteOrder = async (req, res, next) => {

    const { id } = req.params;

    try {
        await Order.findByIdAndDelete(id)
        res.json({ message: "Order has been Deleted" })
  
    }
    catch (error) {
        next(error)
    }


}



