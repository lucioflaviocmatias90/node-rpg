import { Request, Response } from 'express'

class UserController {
  index(req: Request, res: Response) {
    const { name = 'Forasteiro' } = req.query
    return res.json({ message: `Ola mundo ${name} !!` })
  }

  store(req: Request, res: Response) {
    const { name, age, phone } = req.body
    return res.json({ message: `Meu nome é ${name} e tenho ${age} anos, meu contato é ${phone}!!` })
  }
}

export default new UserController