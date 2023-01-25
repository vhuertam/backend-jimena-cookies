import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Orders } from './order.entity';
import { Products } from './product.entity';

@Entity()
export class OrdersProducts {
    @Column({ name: 'id_order', type: 'uuid', primary: true })
    @JoinColumn({ name: 'id_order'})
    @ManyToOne(() => Orders)
    order: Orders

    @Column({ name: 'id_product', type: 'uuid', primary: true })
    @JoinColumn({ name: 'id_product'})
    @ManyToOne(() => Products)
    product: Products

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
    deletedAt: Date

}