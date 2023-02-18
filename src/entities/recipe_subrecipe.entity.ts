import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Recipes } from './recipe.entity';
import { Subrecipes } from './subrecipe.entity';

@Entity()
export class RecipesSubrecipes {
    
    @Column({ name: 'id_recipe', type: 'uuid', primary: true })
    @JoinColumn({ name: 'id_recipe'})
    @ManyToOne(() => Recipes)
    recipe: Recipes

    @Column({ name: 'id_subrecipe', type: 'uuid', primary: true })
    @JoinColumn({ name: 'id_subrecipe'})
    @ManyToOne(() => Subrecipes)
    subrecipe: Subrecipes

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: 'NOW' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
    deletedAt: Date

}