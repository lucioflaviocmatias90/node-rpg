/* eslint-disable import/first */
import * as dotenv from 'dotenv';

dotenv.config();

import app from './app';
import './database';

// eslint-disable-next-line no-console
app.listen(3333, () => console.log('Running server on port 3333'));
