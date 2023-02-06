import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { OrdersProducts } from './order_product.entity';
import { Recipes } from './recipe.entity';

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

  @OneToOne(() => Recipes, (recipe) => recipe.product)
  @JoinColumn()
  recipe: Recipes

  @OneToMany(() => OrdersProducts, (orderProduct) => orderProduct.product)
  orderProduct: OrdersProducts[]

}
