import { DataSource } from 'typeorm';
import {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PORT,
  DB_PASSWORD,
} from '../common/environment';
import * as entities from '../entities';

export let AppDataSource: DataSource;

type DataSourceParameters = {
  logging?: boolean;
  synchronize?: boolean;
};

const getDataSource = ({
  logging = false,
  synchronize = false,
}: DataSourceParameters) =>
  new DataSource({
    type: 'mysql',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: entities,
    synchronize,
    logging,
  });

export const dataSourceInit = async (
  dataSourceParam?: DataSourceParameters
) => {
  AppDataSource = getDataSource(dataSourceParam || {});

  await AppDataSource.initialize()
    .then(() => {
      console.log('db connected');
    })
    .catch((error) => {
      console.error('db connect failed', error);
      process.exit(1);
    });
};

export const sync = async () => {
  await dataSourceInit();

  await AppDataSource.synchronize();

  await AppDataSource.destroy();
};
