import 'dotenv/config';
import env from 'env-var';

import { DataSource } from 'typeorm';
import { Tutee, Tutor, TimeTable } from '../entity';

const DB_PORT = env.get('DB_PORT').required().asPortNumber();
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
  synchronize: true,
  logging: true,
  entities: [Tutee, Tutor, TimeTable]
});

AppDataSource.initialize().then(async () => {
  console.log('db synchronizer connect success');
  process.exit(1);
}).catch(error => console.log(error));