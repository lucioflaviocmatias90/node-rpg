import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';
import Auth from '../services/Authentication';

class SessionController {
  async store(request: Request, response: Response) {
    const { email, password } = request.body;

    const userExists = await User.findOne().where({ email });

    if (!userExists) {
      return response.status(400).json({ 
        error: {
          code: '001',
          message: 'Email ou senha inválido'
        }
      });
    }

    const result = await bcrypt.compare(password, userExists.password);

    if (!result) {
      return response.status(400).json({ 
        error: {
          code: '002',
          message: 'Email ou senha inválido'
        }
      });
    }

    const token = await new Auth().sign(userExists);

    return response.status(200).json({ userId: userExists.id, token })
  }
}

export default new SessionController();