import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';
import { StatusRoom } from './StatusRoom';
import { User } from './User';

@Entity('rooms')
export class Room {
  // Properties
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
  generateUuid() {
    this.id = uuidv4();
  }

  // Hooks
  @BeforeInsert()
  createDates() {
    this.createdAt = new Date();
  }

  @BeforeInsert()
  updateDates() {
    this.updatedAt = new Date();
  }

  // Relationships
  @ManyToMany(() => User, (user) => user.rooms)
  @JoinTable({
    name: 'user_room',
    joinColumns: [{ name: 'room_id' }],
    inverseJoinColumns: [{ name: 'user_id' }]
  })
  users!: User[];

  @OneToOne(() => StatusRoom)
  @JoinColumn({ name: 'status_room_id', referencedColumnName: 'id' })
  status!: StatusRoom;
}
