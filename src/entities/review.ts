import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { BlueDotBaseEntity } from './blue-dot-base-entity';
import { Tutor } from './tutor';
import { Tutee } from './tutee';

@Entity()
export class Review extends BlueDotBaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column({ type: 'varchar', comment: 'review text', nullable: true })
  text: string;

  @Column({ type: 'varchar', comment: 'rate', nullable: true })
  rate: string;

  @ManyToOne(() => Tutor, (tutor) => tutor.reviews)
  public tutor: Tutor;

  @ManyToOne(() => Tutee, (tutee) => tutee.reviews)
  public tutee: Tutee;
}