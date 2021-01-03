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

declare namespace Express {
  export interface Request {
    authenticatedUser?: IUser
  }
}
