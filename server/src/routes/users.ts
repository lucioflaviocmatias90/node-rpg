import express from 'express';
import UserController from '../app/controllers/UserController';
import { store as UserStore } from '../app/requests/UserRequest';

const router = express.Router();

router.get('/', UserController.index);
router.post('/', UserStore, UserController.store);
router.delete('/:id', UserController.destroy);

export default router;
