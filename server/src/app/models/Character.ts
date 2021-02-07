import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

@Entity('characters')
export class Character {
  // Properties
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', name: 'user_id' })
  userId!: string;

  @Column({ type: 'varchar', name: 'room_id' })
  roomId!: string;

  @Column({ type: 'varchar', name: 'race_id' })
  raceId!: string;

  @Column({ type: 'varchar', name: 'class_id' })
  classId!: string;

  @Column('varchar')
  name!: string;

  @Column({ type: 'varchar', name: 'total_xp' })
  totalXp!: string;

  @Column({ type: 'varchar', name: 'epic_destiny' })
  epicDestiny!: string;

  @Column('varchar')
  affiliations!: string;

  @Column('varchar')
  height!: string;

  @Column('varchar')
  weight!: string;

  @Column('varchar')
  gender!: string;

  @Column('varchar')
  age!: string;

  @Column('varchar')
  size!: string;

  @Column('varchar')
  level!: string;

  @Column('varchar')
  alignment!: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at' })
  deletedAt!: Date;

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
