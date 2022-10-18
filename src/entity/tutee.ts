import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { TimeTable, Like, Review } from './index';

@Entity() 
export class Tutee {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'bigint', comment: 'user id', unique: true })
  userId: number;

  @Column({ type: 'varchar', comment: 'user name', length: 20 })
  userName: string;

  @Column({ type: 'varchar', comment: 'user email', length: 50 })
  userEmail: string;

  @Column({ type: 'varchar', comment: 'password', length: 20 })
  pwd: string;

  @Column({ type: 'tinyint', comment: 'tutor 여부'})
  isTutor: boolean;

  @Column({ type: 'varchar', comment: 'profile pic', length: 255 })
  userProfile: string;

  @Column({ type: 'varchar', comment: 'tag', length: 255 })
  tag: string;

  @Column({ type: 'datetime', comment: 'contents'})
  contents: string;

  @Column({ type: 'varchar', comment: 'startTime'})
  startTime: string;

  @Column({ type: 'varchar', comment: 'endTime'})
  endTime: string;

  @Column({ type: 'varchar', comment: 'comment'})
  comment: string;

  @Column({ type: 'varchar', comment: 'language1'})
  language1: string;

  @Column({ type: 'varchar', comment: 'language2'})
  language2: string;

  @Column({ type: 'varchar', comment: 'language3'})
  language3: string;

  @CreateDateColumn({ type: 'timestamp', comment: 'createdAt'})
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: 'updatedAt'})
  updatedAt: Date;

  @OneToMany(() => TimeTable, (timetable) => timetable.tutee)
  public timeTables: TimeTable[];

  @OneToMany(() => Like, (like) => like.tutee)
  public likes: Like[];

  @OneToMany(() => Review, (review) => review.tutee)
  public reviews: Review[];
}