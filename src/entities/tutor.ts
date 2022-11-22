import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BlueDotBaseEntity } from './blue-dot-base-entity';

@Entity()
export class Tutor extends BlueDotBaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', comment: 'userName', length: 20 })
  userName!: string;

  @Column({ type: 'varchar', comment: 'userEmail' })
  userEmail!: string;

  @Column({ type: 'varchar', comment: 'user password' })
  pwd!: string;

  @Column({
    type: 'bool',
    comment: 'indicator if this user is Tutor',
    length: 10,
  })
  isTutor!: boolean;

  @Column({ type: 'varchar', comment: 'user profile url' })
  userProfile!: string;

  @Column({ type: 'varchar', comment: 'tag user has', nullable: true })
  tag?: string;

  @Column({
    type: 'text',
    comment: 'thing which user type in about him/her',
    nullable: true,
  })
  contents?: string;

  @Column({ type: 'varchar', comment: 'class startTime', length: 45 })
  classStartTime?: string;

  @Column({ type: 'varchar', comment: 'class endTime', length: 45 })
  classEndTime?: string;

  @Column({ type: 'varchar', comment: '1 line comment', length: 255 })
  oneLineComment?: string;

  @Column({ type: 'int', comment: 'the number of like', nullable: true })
  numOfLike?: number;

  @Column({ type: 'varchar', comment: 'favorite languages', length: 255 })
  favoriteLanguages!: string;
}
