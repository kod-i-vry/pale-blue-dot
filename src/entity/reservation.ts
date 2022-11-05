import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { BlueDotBaseEntity } from './blue-dot-base-entity';

@Entity()
export class Reservation extends BlueDotBaseEntity {
  @PrimaryGeneratedColumn({ type: 'int'})
  id!: number;
}