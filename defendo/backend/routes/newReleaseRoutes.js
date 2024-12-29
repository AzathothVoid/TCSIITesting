import express from 'express';
import { addNewReleasesDetails, deleteNewReleasesDetails, getNewReleasesDetails, getNewReleasesDetailsById} from '../controllers/newReleasesController.js';

const router = express.Router();

router.route('/newReleases').get(getNewReleasesDetails);

router.route('/newReleases/:id').get(getNewReleasesDetailsById);

router.route('/newReleases/new').post(addNewReleasesDetails);

router.route('/newReleases/delete/:id').delete(deleteNewReleasesDetails);



export default router;