import express from 'express'
import { regsiterUser, loginUser, logoutUser, getAllUsers, deleteUserById } from '../controllers/userController.js';

const router = express.Router();

router.route('/account/Register').post(regsiterUser);

router.route('/account/Login').post(loginUser);

router.route('/account/Logout').get(logoutUser);

router.route('/users').get(getAllUsers);

router.route('/deleteUser/:id').delete(deleteUserById);


export default router;

