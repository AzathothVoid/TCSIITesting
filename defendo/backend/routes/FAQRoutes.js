import express from 'express';
import { getFAQs } from '../controllers/FAQsController.js'



const router = express.Router();

router.route('/FAQs').get(getFAQs);

export default router;