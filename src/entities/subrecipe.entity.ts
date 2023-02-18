import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Subrecipes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @CreateDateColumn({ name: 'create_at', type: 'timestamp', default: 'NOW' })
  createAt: Date

  @UpdateDateColumn({ name: 'update_at', type: 'timestamp' })
  updateAt: Date
  
  @DeleteDateColumn({ name: 'delete_at', type: 'timestamp' })
  deleteAt: Date

}
