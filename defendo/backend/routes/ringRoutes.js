import express from 'express';
import { getRingDetails, getRingDetailsById, addRingDetails, deleteRingDetails } from '../controllers/ringsController.js';
import multer from 'multer'

const router = express.Router();
const upload = multer({dest : 'rings/'})


router.route('/rings').get(getRingDetails);

router.route('/rings/:id').get(getRingDetailsById);

router.route('/rings/new').post(addRingDetails);

router.route('/rings/delete/:id').delete(deleteRingDetails);



export default router;