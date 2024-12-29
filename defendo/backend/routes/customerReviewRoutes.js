import express from 'express';
import { getCustomerReviews, getCustomerReviewsById, addCustomerReview, deleteCustomerReviews } from '../controllers/customerReviewsContoller.js';



const router = express.Router();

router.route('/customerReviews').get(getCustomerReviews);

router.route('/customerReviews/:id').get(getCustomerReviewsById);

router.route('/customerReviews/new').post(addCustomerReview);

router.route('/customerReviews/delete/:id').delete(deleteCustomerReviews);

export default router;