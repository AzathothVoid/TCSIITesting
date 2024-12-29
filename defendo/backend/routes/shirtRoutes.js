import express from 'express';
import {getShirtDetails , deleteShirtDetails, addShirtDetails, getShirtDetailsById} from '../controllers/shirtsControllers.js'


const router = express.Router();

router.route('/shirts').get(getShirtDetails);

router.route('/shirts/:id').get(getShirtDetailsById);

router.route('/shirts/new').post(addShirtDetails);

router.route('/shirts/delete/:id').delete(deleteShirtDetails);


export default router;