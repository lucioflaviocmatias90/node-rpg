import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar')
  name!: string;

  @Column({ type: 'varchar', name: 'status_room_id' })
  statusRoomId!: string;

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
