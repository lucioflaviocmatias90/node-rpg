import express from 'express';
import SessionController from '../controllers/SessionController';

const router = express.Router();

router.post('/', SessionController.store);

export default router;
