import { RecipesIngredients } from 'src/entities/recipe_ingredient.entity';
import { DataSource } from 'typeorm';

export const recipeIngredientProviders = [
  {
    provide: 'RECIPEINGREDIENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RecipesIngredients),
    inject: ['DATA_SOURCE'],
  },
];