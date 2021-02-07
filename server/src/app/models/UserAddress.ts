import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

@Entity('user_addresses')
export class UserAddress {
  // Properties
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', name: 'user_id' })
  userId!: string;

  @Column('varchar')
  zipcode!: string;

  @Column('varchar')
  street!: string;

  @Column('varchar')
  number!: string;

  @Column('varchar')
  neighborhood!: string;

  @Column('varchar')
  complement!: string;

  @Column('varchar')
  city!: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  // Hooks
  @BeforeInsert()
  generateUuid() {
    this.id = uuidv4();
  }

  @BeforeInsert()
  createDates() {
    this.createdAt = new Date();
  }

  @BeforeInsert()
  updateDates() {
    this.updatedAt = new Date();
  }
}
