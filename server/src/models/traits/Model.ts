import {
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn, 
  DeleteDateColumn,
  BeforeInsert 
} from "typeorm";

import { v4 as uuidv4 } from 'uuid';

export abstract class Model {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at' })
  deleted_at: Date;

  @BeforeInsert()
  generateUuid() {
    this.id = uuidv4();
  }

  @BeforeInsert()
  createDates() {
    this.created_at = new Date();
  }

  @BeforeInsert()
  updateDates() {
    this.updated_at = new Date();
  }
}