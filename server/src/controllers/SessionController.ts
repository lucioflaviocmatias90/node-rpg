import { Request, Response } from 'express';
import User from '../models/User';
import Auth from '../services/Auth';
import Hash from '../services/Hash';

class SessionController {
  async store(request: Request, response: Response) {
    const { email, password } = request.body;

    const userExists = await User.findOne({ email })

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
          message: 'Email ou senha inválido'
        }
      });
    }

    const token = await new Auth().sign(userExists);

    return response.status(200).json({ userId: userExists.id, token })
  }
}

export default new SessionController();