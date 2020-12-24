import { Entity, Column } from 'typeorm';
import { Model } from './traits/Model';

@Entity('rooms')
export class Room extends Model {
  @Column('varchar')
  name!: string;

  @Column('varchar')
  status_room_id!: string;
}
