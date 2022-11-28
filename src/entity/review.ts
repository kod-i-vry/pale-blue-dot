import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Tutor } from './tutor';
import { Tutee } from './tutee';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', comment: 'review text', nullable: true })
  text: string;

  @Column({ type: 'varchar', comment: 'rate', nullable: true })
  rate: string;

  @CreateDateColumn({ type: 'timestamp', comment: 'createdAt', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: 'updatedAt', nullable: true })
  updatedAt: Date;

  @ManyToOne(() => Tutor, (tutor) => tutor.reviews)
  public tutor: Tutor;

  @ManyToOne(() => Tutee, (tutee) => tutee.reviews)
  public tutee: Tutee;
}