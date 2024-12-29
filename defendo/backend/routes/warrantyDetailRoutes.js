import express from 'express';
import { getWarrantyDetails } from '../controllers/warrantyDetailsController.js';



const router = express.Router();

router.route('/warrantyDetails').get(getWarrantyDetails);

export default router;