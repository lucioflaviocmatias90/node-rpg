import { Request, Response } from 'express';
import { User } from '../models/User';
import { getRepository } from 'typeorm';
import { validationResult } from 'express-validator';

import Auth from '../services/Auth';
import Hash from '../services/Hash';

class SessionController {
  async store(request: Request, response: Response) {
    try {
      const errors = validationResult(request);

      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }

      const { email, password } = request.body;

      const userRepository = getRepository(User);
      const userExists = await userRepository.findOne({ where: { email } });

      if (!userExists) {
        return response.status(400).json({
          error: {
            code: '001',
            message: 'Email ou senha inválido'
          }
        });
      }

      const result = await Hash.compare(password, userExists.password);

      if (!result) {
        return response.status(400).json({
          error: {
            code: '002',
            message: 'Email ou senha inválido',
            result
          }
        });
      }

      const token = await new Auth().sign(userExists.id);

      return response.status(200).json({ userId: userExists.id, token });
    } catch (err) {
      /* istanbul ignore next */
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

export default new SessionController();
