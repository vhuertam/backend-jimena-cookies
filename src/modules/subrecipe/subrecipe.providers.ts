import { Subrecipes } from 'src/entities/subrecipe.entity';
import { DataSource } from 'typeorm';

export const subrecipeProviders = [
  {
    provide: 'SUBRECIPE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Subrecipes),
    inject: ['DATA_SOURCE'],
  },
];