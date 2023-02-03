import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { OrdersProducts } from './order_product.entity';
import { Users } from './user.entity';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'client', type: 'text', nullable: true })
  client: string;

  @Column({ name: 'date_delivery', type: 'timestamp', nullable: true })
  dateDelivery: Date;

  @Column({ name: 'hour_delivery', type: 'text', nullable: true })
  hourDelivery: string;

  @Column({ name: 'total_price', type: 'float', nullable: true })
  totalPrice: number;

  @CreateDateColumn({ name: 'create_at', type: 'timestamp', default: 'NOW' })
  createAt: Date

  @UpdateDateColumn({ name: 'update_at', type: 'timestamp' })
  updateAt: Date
  
  @DeleteDateColumn({ name: 'delete_at', type: 'timestamp' })
  deleteAt: Date

  @Column({ name: 'id_user', type: 'uuid', nullable: true})
  @JoinColumn({ name: 'id_user' })
  @ManyToOne(() => Users)
  user: Users

  @OneToMany(() => OrdersProducts, (orderProduct) => orderProduct.order)
  orderProduct: OrdersProducts[]

}
