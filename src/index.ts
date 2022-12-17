import 'dotenv/config';
import express from 'express';
import { errorHandler } from './middleware/index';
import cors from 'cors';
import { userRouter } from './domain'

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter);
app.use(errorHandler);

export default app;
