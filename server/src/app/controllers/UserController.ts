import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';
import { validationResult } from 'express-validator';

class UserController {
  async index(request: Request, response: Response) {
    try {
      const userRepository = getRepository(User);
      const users = await userRepository.find();

      const list = users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        birthday: user.birthday,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }));

      return response.status(200).json({ list });
    } catch (err) {
      /* istanbul ignore next */
      return response.status(400).json({
        error: {
          code: '001',
          message: 'Usuários não encontrado'
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

      const { name, email, password, gender, birthday } = request.body;
      const userRepository = getRepository(User);

      const userExists = await userRepository.findOne({ where: { email } });

      if (userExists) {
        return response.status(400).json({
          error: {
            code: '001',
            message: 'Email em uso'
          }
        });
      }

      const user = userRepository.create({
        name,
        email,
        password,
        gender,
        birthday
      });

      await userRepository.save(user);

      return response.status(200).json({
        message: 'Usuário criado com sucesso'
      });
    } catch (err) {
      /* istanbul ignore next */
      return response.status(400).json({
        error: {
          code: '002',
          message: 'Erro ao cadastrar o usuário',
          err: err.message
        }
      });
    }
  }

  async destroy(request: Request, response: Response) {
    try {
      const { id: userId } = request.params;

      const userRepository = getRepository(User);
      const userExists = await userRepository.findOne(userId);

      if (!userExists) {
        return response.status(400).json({
          error: {
            code: '001',
            message: 'Usuário não encontrado'
          }
        });
      }

      await userRepository.delete(userId);

      return response
        .status(200)
        .json({ message: 'Usuário excluído com sucesso' });
    } catch (err) {
      return response.status(400).json({
        error: {
          code: '002',
          message: 'Erro ao excluir o usuário',
          err: err.message
        }
      });
    }
  }
}

export default new UserController();
