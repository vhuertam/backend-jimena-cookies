import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { OrdersProducts } from './order_product.entity';
import { Users } from './user.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'text', nullable: true })
  name: string;

  @CreateDateColumn({ name: 'create_at', type: 'timestamp', default: 'NOW' })
  createAt: Date

  @UpdateDateColumn({ name: 'update_at', type: 'timestamp' })
  updateAt: Date
  
  @DeleteDateColumn({ name: 'delete_at', type: 'timestamp' })
  deleteAt: Date

  @OneToMany(() => OrdersProducts, (orderProduct) => orderProduct.product)
    orderProduct: OrdersProducts[]

}
