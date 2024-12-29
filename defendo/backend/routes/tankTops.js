import express from 'express';
import {getTankTopsDetails , deleteTankTopsDetails, addTankTopsDetails, getTankTopsDetailsById} from '../controllers/TankTopsControllers.js'


const router = express.Router();

router.route('/TankTops').get(getTankTopsDetails);

router.route('/TankTops/:id').get(getTankTopsDetailsById);

router.route('/TankTops/new').post(addTankTopsDetails);

router.route('/TankTops/delete/:id').delete(deleteTankTopsDetails);


export default router;