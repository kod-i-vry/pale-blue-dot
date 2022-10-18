import 'dotenv/config';
import express from 'express';
import { AppDataSource } from './database/index';

const app = express();

app.use(express.json());

app.listen(3000, () => {
  return console.log('Express is listening at 3000 port');
});

AppDataSource.initialize().then(async () => {
  console.log('db connect success');
  }).catch(error => console.log(error))
  

