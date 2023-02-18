import { Ingredients } from 'src/entities/ingredient.entity';
import { DataSource } from 'typeorm';

export const ingredientProviders = [
  {
    provide: 'INGREDIENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Ingredients),
    inject: ['DATA_SOURCE'],
  },
];