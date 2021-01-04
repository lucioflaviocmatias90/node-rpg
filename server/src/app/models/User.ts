import {
  Entity,
  Column,
  BeforeInsert,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';
import Hash from '../services/Hash';

@Entity('users')
export class User {
  // Properties
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar')
  name!: string;

  @Column('varchar')
  email!: string;

  @Column('varchar')
  password!: string;

  @Column('varchar')
  gender!: string;

  @Column('varchar')
  birthday!: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at' })
  deletedAt!: Date;

  // Hooks
  @BeforeInsert()
  generateUuid () {
    this.id = uuidv4();
  }

  @BeforeInsert()
  createDates () {
    this.createdAt = new Date();
  }

  @BeforeInsert()
  updateDates () {
    this.updatedAt = new Date();
  }

  @BeforeInsert()
  async generateHash () {
    this.password = await Hash.generate(this.password);
  }
}
