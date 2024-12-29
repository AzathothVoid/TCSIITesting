import express from 'express';
import { getChainDetails, getChainDetailsById, addChainDetails, deleteChainDetails } from '../controllers/chainsController.js'


const router = express.Router();

router.route('/chains').get(getChainDetails);

router.route('/chains/:id').get(getChainDetailsById);

router.route('/chains/new').post(addChainDetails);

router.route('/chains/delete/:id').delete(deleteChainDetails);





export default router;