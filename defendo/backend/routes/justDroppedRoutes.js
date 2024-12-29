import express from 'express';
import { getJustDroppedImages } from '../controllers/justDroppedController.js';



const router = express.Router();

router.route('/justDropped').get(getJustDroppedImages);

export default router;