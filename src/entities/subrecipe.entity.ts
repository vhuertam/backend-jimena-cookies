import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { RecipesSubrecipes } from './recipe_subrecipe.entity';
import { SubrecipesIngredients } from './subrecipe_ingredient.entity';

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

  @OneToMany(() => RecipesSubrecipes, (recipeSubrecipe) => recipeSubrecipe.subrecipe)
  recipeSubrecipe: RecipesSubrecipes[]
  
  @OneToMany(() => SubrecipesIngredients, (subrecipeIngredient) => subrecipeIngredient.subrecipe)
  subrecipeIngredient: SubrecipesIngredients[]

}
