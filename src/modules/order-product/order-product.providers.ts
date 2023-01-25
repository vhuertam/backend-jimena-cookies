import { OrdersProducts } from 'src/entities';
import { DataSource } from 'typeorm';

export const orderProductProviders = [
  {
    provide: 'ORDERPRODUCT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(OrdersProducts),
    inject: ['DATA_SOURCE'],
  },
];
