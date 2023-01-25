import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Roles } from './role.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'rut', type: 'text', nullable: true})
  rut: string;

  @Column({name: 'username', type: 'text', nullable: true})
  username: string;

  @Column({name: 'password', type: 'text', nullable: true})
  password: string;

  @Column({name: 'state', type: 'boolean', nullable: true})
  state: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date

  @Column({ name: 'id_role', type: 'uuid', nullable: true})
  @JoinColumn({ name: 'id_role' })
  @ManyToOne(() => Roles)
  role: Roles
}
