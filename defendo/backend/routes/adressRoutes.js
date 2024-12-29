import express from 'express'
import { getAddressbyId, addAddress, deleteAddress, editAddress } from '../controllers/addressController.js';

const router = express.Router();

router.route('/account/address/new').post(addAddress);

router.route('/account/address/:id').get(getAddressbyId);   

router.route('/account/address/delete/:id').delete(deleteAddress);

router.route('/account/address/update/:id').put(editAddress);


export default router;