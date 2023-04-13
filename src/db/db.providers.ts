import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv'

dotenv.config()

const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, ENVIRONMENT } = process.env;


export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: DB_HOST,
        port: Number(DB_PORT),
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: ENVIRONMENT === 'dev' ? true : false,
      });

      return dataSource.initialize();
    },
  },
];