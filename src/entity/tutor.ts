import { 
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,  
} from 'typeorm';
import { BlueDotBaseEntity } from './blue-dot-base-entity';

@Entity()
export class Tutor extends BlueDotBaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar2', comment: 'userName', length: 20})
  userName!: string;

  @Column({ type: 'varchar2', comment: 'userEmail', })
  userEmail!: string;

  @Column({ type: 'varchar2', comment: 'pwd'})
  pwd!: string;

  @Column({ type: 'bool', comment: 'is Tutor', length: 10})
  isTutor!: boolean;

  @Column({ type: 'varchar2', comment: 'user profile url'})
  userProfile!: string;

  @Column({ type: 'varchar2', comment: 'tag'})
  tag!: string;

  @Column({ type: 'text', comment: 'contents'})
  contents!: string;

  @Column({ type: 'varchar2', comment: 'class startTime', length: 45})
  classStartTime!: string;

  @Column({ type: 'varchar2', comment: 'class endTime', length: 45})
  classEndTime!: string;

  @Column({ type: 'varchar2', comment: '1 line comment', length: 255})
  oneLineComment: string;

  @Column({ type: 'int', comment: 'the number of like'})
  numOfLike!: number;

  @Column({ type: 'varchar2', comment: 'favorite languages', length: 255})
  favoriteLanguages!: string;

  @OneToMany



}