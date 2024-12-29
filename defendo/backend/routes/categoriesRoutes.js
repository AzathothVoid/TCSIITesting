import express from 'express';
import { getCategoryImages } from '../controllers/categoriesController.js';



const router = express.Router();

router.route('/categories').get(getCategoryImages);

export default router;