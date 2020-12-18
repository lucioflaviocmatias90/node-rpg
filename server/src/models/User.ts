// import Hash from '../services/Hash'

// UserSchema.pre('save', async function(this: IUser, next: Function) {
//   this.password = await Hash.generate(this.password);
// });

import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  gender: number;

  @Column()
  birthday: Date;
}
