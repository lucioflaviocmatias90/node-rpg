import { join } from 'path';
/* eslint-disable import/first */
import * as dotenv from 'dotenv';

dotenv.config();

const envPath = process.env.NODE_ENV === 'testing'
  ? join(__dirname, '..', '.env.testing')
  : join(__dirname, '..', '.env');

dotenv.config({ path: envPath });

import 'reflect-metadata';
import app from './app';

app.listen(3333, () => console.log('Running server on port 3333'));
