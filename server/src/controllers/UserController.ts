import { Request, Response } from 'express'
import User from '../models/User'

class UserController {
  async index(_: Request, res: Response) {
    const users = await User.find()
    return res.json({ users })
  }

  async store(req: Request, res: Response) {
    const { name, email, password, gender, birthday } = req.body
    const user = await User.create({ name, email, password, gender, birthday });

    return res.json({ user })
  }
}

export default new UserController