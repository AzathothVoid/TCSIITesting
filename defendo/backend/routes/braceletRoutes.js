import express from 'express';
import { getBraceletDetails, getBraceletDetailsById, addBraceletDetails, deleteBraceletDetails} from '../controllers/braceletsController.js'


const router = express.Router();

router.route('/bracelets').get(getBraceletDetails);

router.route('/bracelets/:id').get(getBraceletDetailsById);

router.route('/bracelets/new').post(addBraceletDetails);

router.route('/bracelets/delete/:id').delete(deleteBraceletDetails);

export default router;