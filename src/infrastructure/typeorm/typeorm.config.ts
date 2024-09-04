import * as dotenv from 'dotenv';
import { DataSourceOptions } from 'typeorm';
import { MetricModel } from './models/metric.model';

dotenv.config({
  path: './.env',
});

export const TypeormConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST ?? '127.0.0.1',
  port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 3306,
  username: process.env.DATABASE_USERNAME ?? 'root',
  password: process.env.DATABASE_PASSWORD ?? 'password',
  database: process.env.DATABASE_NAME,
  entities: [MetricModel],
  logging: process.env.NODE_ENV === 'development',
  synchronize: true,
};
