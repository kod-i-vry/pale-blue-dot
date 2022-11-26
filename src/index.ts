import 'dotenv/config';
import express from 'express';
import { errorHandler } from './middleware/index';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandler);

export default app;
