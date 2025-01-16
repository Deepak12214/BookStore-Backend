import express from 'express';
import { register,login, logout, like, ForgetPassword } from '../controller/user.controller.js';
import { authenticateToken, protectRoute } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/logout',logout);
router.get('/like/:id',authenticateToken,like);
router.post('/forgetpassword',ForgetPassword);


export default router;