import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { RoomRepository } from '../repositories/RoomRepository';
import { validationResult } from 'express-validator';

class RoomController {
  async index(request: Request, response: Response) {
    const roomRepository = getCustomRepository(RoomRepository);

    try {
      const rooms = await roomRepository.fetchAll();

      const list = rooms.map((room) => ({
        id: room.id,
        name: room.name,
        status: room.status.name,
        createdAt: room.createdAt,
        updatedAt: room.updatedAt
      }));

      return response.status(200).json({ list });
    } catch (err) {
      /* istanbul ignore next */
      return response.status(400).json({
        error: {
          code: '001',
          message: 'Erro ao encontrar as salas',
          err: err.message
        }
      });
    }
  }

  async store(request: Request, response: Response) {
    try {
      const errors = validationResult(request);

      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }

      const { name } = request.body;

      if (!request.authenticatedUser) {
        return response.status(400).json({
          error: {
            code: '003',
            message: 'Usuário não atenticado'
          }
        });
      }

      const roomRepository = getCustomRepository(RoomRepository);

      const roomExists = await roomRepository.findByName(name);

      if (roomExists) {
        return response.status(400).json({
          error: {
            code: '004',
            message: 'Está sala já foi criada, por favor digite outro nome'
          }
        });
      }

      await roomRepository.createAndSave(name, request.authenticatedUser.id);

      return response.status(200).json({ message: 'Sala criada com sucesso' });
    } catch (err) {
      return response.status(400).json({
        error: {
          code: '005',
          message: 'Erro ao criar uma nova sala',
          err: err.message
        }
      });
    }
  }

  async show(request: Request, response: Response) {
    try {
      const { id: roomId } = request.params;
      const roomRepository = getCustomRepository(RoomRepository);

      const room = await roomRepository.findById(roomId);

      return response.status(200).json({
        id: room?.id,
        name: room?.name,
        status: room?.status.name,
        createdAt: room?.createdAt,
        users: room?.users.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email
        }))
      });
    } catch (err) {
      return response.status(400).json({
        error: {
          code: '001',
          message: 'Sala não encontrada',
          err: err.message
        }
      });
    }
  }
}

export default new RoomController();
