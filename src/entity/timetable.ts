import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tutor } from './tutor';
import { Tutee } from './tutee';

@Entity() 
export class TimeTable {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'int', comment: 'timeId' })
  timeId: number;

  @Column({ type: 'varchar', comment: 'start time', length: 45 })
  start: string;

  @Column({ type: 'varchar', comment: 'end time', length: 45 })
  end: string;

  @Column({ type: 'tinyint', comment: 'tutee notification' })
  tuteeNoti: number;

  @ManyToOne(() => Tutor, (tutor) => tutor.timeTables)
  public tutor: Tutor;

  @ManyToOne(() => Tutee, (tutee) => tutee.timeTables)
  public tutee: Tutee;
}