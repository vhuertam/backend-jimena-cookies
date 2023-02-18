import { SubrecipesIngredients } from 'src/entities';
import { DataSource } from 'typeorm';

export const subrecipeIngredientProviders = [
  {
    provide: 'SUBRECIPEINGREDIENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(SubrecipesIngredients),
    inject: ['DATA_SOURCE'],
  },
];