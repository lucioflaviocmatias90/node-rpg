import { Request, Response } from "express";
import User from "../models/User";

class UserController {
  async index(request: Request, response: Response) {
    const users = await User.find();
    return response.json({ users });
  }

  async store(request: Request, response: Response) {
    const { name, email, password, gender, birthday } = request.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return response.status(400).json({ 
        error: {
          code: '001',
          message: 'Email em uso'
        }
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      gender,
      birthday,
    });

    return response.status(200).json({ user });
  }

  async destroy(request: Request, response: Response) {
    try {
      const { id: userId } = request.params;

      const userExists = await User.findById(userId);

      if (!userExists) {
        return response.status(400).json({ 
          error: {
            code: '001',
            message: 'Usuário não encontrado'
          }
        });
      }

      await userExists.deleteOne();

      return response.status(200).json({ message: 'Usuário excluído com sucesso' });
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
