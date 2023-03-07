import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { OrdersProducts } from './order_product.entity';
import { PricesSizes } from './priceSize.entity';
import { Recipes } from './recipe.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'text', nullable: true })
  name: string;

  @OneToOne(() => Recipes, (recipe) => recipe.product, {
    cascade: ["remove"],
  })
  @JoinColumn()
  recipe: Recipes

  @OneToMany(() => OrdersProducts, (orderProduct) => orderProduct.product)
  orderProduct: OrdersProducts[]
  
  @OneToMany(() => PricesSizes, (priceSize) => priceSize.product, {
    cascade: ["remove"],
  })
  priceSize: PricesSizes[]
}