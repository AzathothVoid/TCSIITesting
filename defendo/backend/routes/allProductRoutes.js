import { getAllProductsBySearch } from "../controllers/allProductsController.js";   
import express from 'express'


const router = express.Router()

router.route('/products').get(getAllProductsBySearch);

export default router;