import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { PORT } from './common/environment';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.listen(PORT, () => {
  console.log(`port ${PORT} server opened`);
})