import { Request, Response } from 'express';
import { Room } from '../models/Room';
import { getRepository } from "typeorm";

class RoomController {
  async store(request: Request, response: Response) {
    try {
      const { name } = request.body;      

      const roomRepository = getRepository(Room);

      const statusRoom = 'f891cb29-2b75-4781-99e4-4550d20fda67';

      const room = roomRepository.create({ name, status_room_id: statusRoom });
      
      await roomRepository.save(room);

      return response.status(200).json({ message: 'Sala criada' });
    } catch (err) {
      return response.status(400).json({
        error: {
          code: '003',
          message: 'Erro ao criar nova sessão',
          err: err.message
        }
      });
    }
  }
}

export default new RoomController();