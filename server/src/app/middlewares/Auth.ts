import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
import { getRepository } from 'typeorm';
import Auth from '../services/Auth';

export default async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const header: string | undefined = request.header('authorization');

  if (!header) {
    return response.status(400).json({
      error: {
        code: '098',
        message: 'Usuário sem permissão de acesso.'
      }
    });
  }

  const [, token]: string[] = header.split(' ');

  if (!token) {
    return response.status(400).json({
      error: {
        code: '099',
        message: 'Usuário sem permissão de acesso.'
      }
    });
  }

  const userId = await new Auth().verify(token);

  if (typeof userId === 'object') {
    return response.status(400).json({
      error: {
        code: '100',
        message: 'Usuário sem permissão de acesso.'
      }
    });
  }

  const userRepository = getRepository(User);

  request.authenticatedUser = await userRepository.findOne(userId);

  next();
};
