import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { isUndefined } from 'util';
import { BlueDotBaseEntity } from './blue-dot-base-entity';

@Entity()
export class Tutor extends BlueDotBaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', comment: 'userName', length: 20 })
  userName!: string;

  @Column({ type: 'varchar', comment: 'userEmail', length: 100 })
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
}
