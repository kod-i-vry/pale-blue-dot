import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { BlueDotBaseEntity } from './blue-dot-base-entity';
import { Reservation, Like, Review } from './index';

@Entity() 
export class Tutee extends BlueDotBaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', comment: 'user name', length: 20 })
  userName!: string;

  @Column({ type: 'varchar', comment: 'user email', length: 100 })
  userEmail!: string;

  @Column({ type: 'varchar', comment: 'user password', length: 70 })
  pwd!: string;

  @Column({
    type: 'bool',
    comment: 'indicator if this user is Tutor',
  })
  isTutor?: boolean;

  @Column({ type: 'varchar', comment: 'user profile url' })
  userProfile?: string;

  @Column({ type: 'varchar', comment: 'tag user has' })
  tag?: string;

  @Column({
    type: 'text',
    comment: 'thing which user type in about him/her',
  })
  contents?: string;

  @Column({
    type: 'varchar',
    comment: 'class startTime',
    length: 45,
  })
  classStartTime?: string;

  @Column({
    type: 'varchar',
    comment: 'class endTime',
    length: 45,
  })
  classEndTime?: string;

  @Column({
    type: 'varchar',
    comment: '1 line comment',
    length: 255,
  })
  oneLineComment?: string;

  @Column({ type: 'int', comment: 'the number of like' })
  numOfLike?: number;

  @Column({ type: 'varchar', comment: 'main languages', length: 255 })
  language1?: string;

  @Column({ type: 'varchar', comment: 'main languages', length: 255 })
  language2?: string;

  @Column({ type: 'varchar', comment: 'main languages', length: 255 })
  language3?: string;

  @OneToMany(() => Reservation, (reservation) => reservation.tutee)
  public reservations: Reservation[];

  @OneToMany(() => Like, (like) => like.tutee)
  public likes: Like[];

  @OneToMany(() => Review, (review) => review.tutee)
  public reviews: Review[];
}