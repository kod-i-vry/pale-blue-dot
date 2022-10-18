import env from 'env-var';
import { Tutee, Tutor, TimeTable } from '../entity';
import { DataSource } from 'typeorm';

const DB_PORT = env.get('DB_PORT').required().asInt();
const DB_NAME = env.get('DB_NAME').required().asString();
const DB_HOST = env.get('DB_HOST').required().asString();
const DB_USER = env.get('DB_USER').required().asString();
const DB_PASSWORD = env.get('DB_PASSWORD').required().asString();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false,
  logging: true,
  entities: [Tutee, Tutor, TimeTable]
});