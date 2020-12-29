import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

@Entity('user_room')
export class UserRoom {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', name: 'user_id' })
  userId!: string;

  @Column({ type: 'varchar', name: 'room_id' })
  roomId!: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

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
}
