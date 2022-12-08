import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { BlueDotBaseEntity } from './blue-dot-base-entity';
import { Tutor } from './tutor';
import { Tutee } from './tutee';


@Entity()
export class Reservation extends BlueDotBaseEntity {
@PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column({ type: 'varchar', comment: 'start time', length: 45, nullable: true })
  start: string;

  @Column({ type: 'varchar', comment: 'end time', length: 45, nullable: true })
  end: string;

  @Column({ type: 'tinyint', comment: 'tutee notification', nullable: true })
  tuteeNoti: number;

  @ManyToOne(() => Tutor, (tutor) => tutor.reservations)
  public tutor: Tutor;

  @ManyToOne(() => Tutee, (tutee) => tutee.reservations)
  public tutee: Tutee;
}
