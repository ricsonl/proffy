import express from 'express';
import routes from './routes';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: `http://localhost:3000`,
  optionsSuccessStatus: 200
}));
app.use(routes);

app.listen(process.env.PORT);