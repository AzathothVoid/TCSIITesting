import express from 'express';
import { getLimitedDropsDetails, getLimitedDropsDetailsById, deleteLimitedDropsDetails, addLimitedDropsDetails } from '../controllers/limitedDropsController.js'

const router = express.Router();

router.route('/limitedDrops').get(getLimitedDropsDetails);

router.route('/limitedDrops/:id').get(getLimitedDropsDetailsById);

router.route('/limitedDrops/new').post(addLimitedDropsDetails);

router.route('/limitedDrops/delete/:id').delete(deleteLimitedDropsDetails);



export default router;