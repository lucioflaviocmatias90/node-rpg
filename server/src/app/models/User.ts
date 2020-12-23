import { Entity, Column, BeforeInsert } from "typeorm";
import { Model } from './traits/Model';
import Hash from '../services/Hash'

@Entity("users")
export class User extends Model {
  @Column('varchar')
  name: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  gender: number;

  @Column('varchar')
  birthday: Date;  

  @BeforeInsert()
  async generateHash() {
    this.password = await Hash.generate(this.password);
  }
}
