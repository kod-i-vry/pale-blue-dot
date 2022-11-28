import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TimeTable, Like, Review } from './index';


@Entity() 
export class Tutor {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', comment: 'user name', length: 20, nullable: true})
  userName: string;

  @Column({ type: 'varchar', comment: 'user email', length: 50, nullable: true })
  userEmail: string;

  @Column({ type: 'varchar', comment: 'password', length: 20, nullable: true })
  pwd: string;

  @Column({ type: 'tinyint', comment: 'tutor 여부', nullable: true })
  isTutor: boolean;

  @Column({ type: 'varchar', comment: 'profile pic', length: 255, nullable: true })
  userProfile: string;

  @Column({ type: 'varchar', comment: 'tag', length: 255, nullable: true })
  tag: string;

  @Column({ type: 'text', comment: 'contents', nullable: true })
  contents: string;

  @Column({ type: 'varchar', comment: 'startTime', nullable: true })
  startTime: string;

  @Column({ type: 'varchar', comment: 'endTime', nullable: true })
  endTime: string;

  @Column({ type: 'varchar', comment: 'comment', nullable: true })
  comment: string;

  @Column({ type: 'int', comment: 'like', nullable: true })
  like: number;

  @Column({ type: 'varchar', comment: 'language1', nullable: true })
  language1: string;

  @Column({ type: 'varchar', comment: 'language2', nullable: true })
  language2: string;

  @Column({ type: 'varchar', comment: 'language3', nullable: true })
  language3: string; 

  @CreateDateColumn({ type: 'timestamp', comment: 'createdAt', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: 'updatedAt', nullable: true })
  updatedAt: Date;

  @OneToMany(() => TimeTable, (timetable) => timetable.tutor)
  public timeTables: TimeTable[];

  @OneToMany(() => Like, (like) => like.tutor)
  public likes: Like[];

  @OneToMany(() => Review, (review) => review.tutor)
  public reviews: Review[];
}