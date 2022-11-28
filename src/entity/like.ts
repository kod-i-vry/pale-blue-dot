import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Tutor } from './tutor';
import { Tutee } from './tutee';

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn({ type: 'timestamp', comment: 'createdAt', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: 'updatedAt', nullable: true })
  updatedAt: Date;
  
  @ManyToOne(() => Tutor, (tutor) => tutor.likes)
  public tutor: Tutor;

  @ManyToOne(() => Tutee, (tutee) => tutee.likes)
  public tutee: Tutee;
}