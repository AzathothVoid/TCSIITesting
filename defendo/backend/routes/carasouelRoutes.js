import express from 'express';
import { getCarasouelImages } from '../controllers/carasouelController.js';


const router = express.Router();

router.route('/heroImages').get(getCarasouelImages);



export default router;