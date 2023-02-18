import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Ingredients {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'text', nullable: true })
  name: string;

  @Column({ name: 'quantity', type: 'text', nullable: true })
  quantity: string;

  @CreateDateColumn({ name: 'create_at', type: 'timestamp', default: 'NOW' })
  createdAt: Date

  @UpdateDateColumn({ name: 'update_at', type: 'timestamp' })
  updatedAt: Date
  
  @DeleteDateColumn({ name: 'delete_at', type: 'timestamp' })
  deletedAt: Date

}
