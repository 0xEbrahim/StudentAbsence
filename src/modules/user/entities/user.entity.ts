import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum USER_ROLE {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  RECIPIENT = 'recipient',
}

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  provider?: string;

  @Column({ type: 'varchar', nullable: true })
  providerId?: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: true })
  passwordResetToken?: string;

  @Column({ type: 'date', nullable: true })
  passwordResetTokenExpireDate?: Date;

  @Column({ type: 'varchar', nullable: true, unique: true })
  mobilePhone?: string;

  @Column({ type: 'varchar', nullable: true })
  avatar?: string;

  @Column({ type: 'enum', enum: USER_ROLE, default: USER_ROLE.RECIPIENT })
  role: USER_ROLE;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
