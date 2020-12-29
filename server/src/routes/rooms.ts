import express from 'express';
import RoomController from '../app/controllers/RoomController';
import { store as RoomValidator } from '../app/requests/RoomRequest';

const router = express.Router();

router.get('/', RoomValidator, RoomController.index);
router.post('/', RoomValidator, RoomController.store);

export default router;
