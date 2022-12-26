import { 
    User
} from 'src/entities/user.entity';

import { DataSource } from 'typeorm';

import * as dotenv from 'dotenv';

dotenv.config()

const { DB_USERNAME, DB_HOST, DB_PORT, DB_PASSWORD, DB_NAME } = process.env;

const dataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: +DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [
    User
],
  synchronize: true,
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];
