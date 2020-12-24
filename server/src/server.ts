import * as dotenv from 'dotenv';
dotenv.config();

// eslint-disable-next-line import/first
import 'reflect-metadata';

// eslint-disable-next-line import/first
import app from './app';

app.listen(3333, () => console.log('Running server on port 3333'));
