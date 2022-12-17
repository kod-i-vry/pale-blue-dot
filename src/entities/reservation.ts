import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { BlueDotBaseEntity } from './blue-dot-base-entity';
import { Tutee } from './tutee';
import { Tutor } from './tutor';

@Entity()
export class Reservation extends BlueDotBaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @ManyToOne(() => Tutor, (tutor) => tutor.reservations)
  tutor!: Tutor;

  @ManyToOne(() => Tutee, (tutee) => tutee.reservations)
  tutee!: Tutee;
}
