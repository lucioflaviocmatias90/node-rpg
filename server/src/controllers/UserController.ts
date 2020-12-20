import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController {
  async index(request: Request, response: Response) {
    try {
      const userRepository = getRepository(User);
      const users = await userRepository.find();

      return response.status(200).json({ users });
    } catch (err) {
      return response.status(400).json({
        error: {
          code: '001',
          message: 'Usuários não encontrado'
        }
      });
    }
  }

  async store(request: Request, response: Response) {
    const { name, email, password, gender, birthday } = request.body;
    const userRepository = getRepository(User);

    const userExists = await userRepository.findOne({ where: { email } });

    if (userExists) {
      return response.status(400).json({
        error: {
          code: "001",
          message: "Email em uso",
        },
      });
    }

    const user = await userRepository.create({
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
            code: "001",
            message: "Usuário não encontrado",
          },
        });
      }

      await userExists.deleteOne();

      return response
        .status(200)
        .json({ message: "Usuário excluído com sucesso" });
    } catch (err) {
      return response.status(400).json({
        error: {
          code: "002",
          message: "Erro ao excluir o usuário",
          err: err.message,
        },
      });
    }
  }
}

export default new UserController();
