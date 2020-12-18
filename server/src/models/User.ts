// import Hash from '../services/Hash'

// UserSchema.pre('save', async function(this: IUser, next: Function) {
//   this.password = await Hash.generate(this.password);
// });

import { Entity } from "typeorm";

@Entity("users")
export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  gender: number;
  birthday: Date;
}
