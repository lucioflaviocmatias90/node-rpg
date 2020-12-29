/* eslint-disable no-unused-vars */
interface IUser {
  id: string,
  name: string,
  email: string,
  password: string,
  gender: string,
  birthday: string,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
}

declare global {
  namespace Express {
    interface Request {
      authenticatedUser: IUser
    }
  }
}
