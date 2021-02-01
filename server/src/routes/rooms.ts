import express from 'express';
import RoomController from '../app/controllers/RoomController';
import { store as RoomValidator } from '../app/requests/RoomRequest';

const router = express.Router();

router.get('/', RoomController.index);
router.post('/', RoomValidator, RoomController.store);
router.get('/:id', RoomController.show);

export default router;
