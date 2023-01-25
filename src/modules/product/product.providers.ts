import { Products } from 'src/entities';
import { DataSource } from 'typeorm';

export const productProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Products),
    inject: ['DATA_SOURCE'],
  },
];
