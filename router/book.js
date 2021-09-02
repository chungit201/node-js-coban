import express from 'express';
import { add, bookById, list, read, search } from '../controller/book';
const router = express.Router();
    router.post('/books',add);
    router.get('/books',list);
    router.get('/search', search);
    router.get('/books/:bookId',read)
    router.param('bookId',bookById)
module.exports = router;