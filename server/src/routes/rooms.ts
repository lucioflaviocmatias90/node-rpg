import express from 'express';
import RoomController from '../app/controllers/RoomController';

const router = express.Router();

router.post('/', RoomController.store);

export default router;