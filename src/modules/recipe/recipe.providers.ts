import { Recipes } from 'src/entities';
import { DataSource } from 'typeorm';

export const recipeProviders = [
  {
    provide: 'RECIPE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Recipes),
    inject: ['DATA_SOURCE'],
  },
];