import express from 'express';
import SessionController from '../app/controllers/SessionController';
import { store as SessionValidator } from '../app/requests/SessionRequest';

const router = express.Router();

router.post('/', SessionValidator, SessionController.store);

export default router;
