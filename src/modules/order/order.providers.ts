import { Orders } from 'src/entities';
import { DataSource } from 'typeorm';

export const orderProviders = [
  {
    provide: 'ORDER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Orders),
    inject: ['DATA_SOURCE'],
  },
];
