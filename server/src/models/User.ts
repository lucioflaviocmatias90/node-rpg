// import Hash from '../services/Hash'

// UserSchema.pre('save', async function(this: IUser, next: Function) {
//   this.password = await Hash.generate(this.password);
// });

import { Entity, Column } from "typeorm";
import { Model } from './traits/Model'

@Entity("users")
export class User extends Model {
  @Column('varchar')
  name: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string;

  @Column('integer')
  gender: number;

  @Column('varchar')
  birthday: Date;  
}
