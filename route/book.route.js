import express from 'express';
import { getBook } from '../controller/book.controller.js';

const router = express.Router();

router.get('/getbook',getBook);

export default router;