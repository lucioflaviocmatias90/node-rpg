import express from 'express';
import UserController from '../app/controllers/UserController';
import { store as UserValidator } from '../app/requests/UserRequest';

const router = express.Router();

router.get('/', UserController.index);
router.post('/', UserValidator, UserController.store);
router.delete('/:id', UserController.destroy);

export default router;
