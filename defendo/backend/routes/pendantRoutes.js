import express from 'express';
import {getPendantDetails , deletePendantDetails, addPendantDetails, getPendantDetailsById} from '../controllers/pendantControllers.js'


const router = express.Router();

router.route('/pendants').get(getPendantDetails);

router.route('/pendants/:id').get(getPendantDetailsById);

router.route('/pendants/new').post(addPendantDetails);

router.route('/pendants/delete/:id').delete(deletePendantDetails);





export default router;