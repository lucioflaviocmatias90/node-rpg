import {
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn, 
  DeleteDateColumn 
} from "typeorm";

export abstract class Model {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn('timestamp')
  created_at: Date;

  @UpdateDateColumn('timestamp')
  updated_at: Date;

  @DeleteDateColumn('timestamp')
  deleted_at: Date;
}