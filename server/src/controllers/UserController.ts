import { Request, Response } from 'express';
import User from '../models/User';
import AuthService from '../services/AuthService';

class UserController {
  async index(_: Request, res: Response) {
    const users = await User.find();
    const service = new AuthService();
    const token = service.sign({ user: 12 });
    return res.json({ users, token });
  }

  async store(req: Request, res: Response) {
    const {
      name, email, password, gender, birthday, token,
    } = req.body;
    const user = await User.create({
      name, email, password, gender, birthday,
    });
    const service = new AuthService();
    const { data, iat, exp } = service.verify(token);

    return res.json({ user, decoded });
  }
}

export default new UserController();
