import express from 'express';
import { getAllBooks, addBook } from '../controllers/bookController';

const router = express.Router();

router.get('/books', getAllBooks);

router.post('/books', addBook);

export default router;
