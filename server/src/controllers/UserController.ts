import { Request, Response } from 'express'

class UserController {
  index(req: Request, res: Response) {
    const { name = 'Forasteiro' } = req.query
    return res.json({ message: `Ola mundo ${name} !!` })
  }
}

export default new UserController