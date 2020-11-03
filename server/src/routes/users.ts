import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.get('/', UserController.index);
router.post('/', UserController.store);

export default router;
