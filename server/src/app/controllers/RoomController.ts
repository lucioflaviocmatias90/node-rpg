import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { RoomRepository } from '../repositories/RoomRepository';
import { validationResult } from 'express-validator';

class RoomController {
  async index (request: Request, response: Response) {
    const roomRepository = getCustomRepository(RoomRepository);

    try {
      const rooms = await roomRepository.fetchAll();

      return response.status(200).json({ list: rooms });
    } catch (err) {
      return response.status(400).json({
        error: {
          code: '001',
          message: 'Erro ao listar os produtos',
          err: err.message
        }
      });
    }
  }

  async store (request: Request, response: Response) {
    try {
      const errors = validationResult(request);

      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }

      // const { name } = request.body;
      // const user = request.authenticatedUser;

      // const roomRepository = getCustomRepository(RoomRepository);

      // await roomRepository.createAndSave(name, user.id);

      return response.status(200).json({ message: 'Sala criada com sucesso' });
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
