import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class BlueDotBaseEntity extends BaseEntity {
  @CreateDateColumn({ type: 'timestamp', comment: 'createdAt' })
  public createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: 'updatedAt' })
  public updatedAt?: Date;
}
