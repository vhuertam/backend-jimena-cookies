import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'username', type: 'text', nullable: true})
  username: string;

  @Column({name: 'password', type: 'text', nullable: true})
  password: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date

}
