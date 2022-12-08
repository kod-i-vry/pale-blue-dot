import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BlueDotBaseEntity } from './blue-dot-base-entity';
import { Tutor } from './tutor';
import { Tutee } from './tutee';

@Entity()
export class Like extends BlueDotBaseEntity{
  @PrimaryGeneratedColumn()
  public id: number;
  
  @ManyToOne(() => Tutor, (tutor) => tutor.likes)
  public tutor: Tutor;

  @ManyToOne(() => Tutee, (tutee) => tutee.likes)
  public tutee: Tutee;
}