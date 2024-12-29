import express from 'express';
import { getInstaDetails } from '../controllers/instaDeatilsController.js';



const router = express.Router();

router.route('/instaDetails').get(getInstaDetails);

export default router;