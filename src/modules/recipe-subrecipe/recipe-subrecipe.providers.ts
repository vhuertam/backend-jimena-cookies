import { RecipesSubrecipes } from 'src/entities/recipe_subrecipe.entity';
import { DataSource } from 'typeorm';

export const recipeSubrecipeProviders = [
  {
    provide: 'RECIPESUBRECIPE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RecipesSubrecipes),
    inject: ['DATA_SOURCE'],
  },
];