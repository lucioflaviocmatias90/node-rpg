import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const envPath = process.env.NODE_ENV === 'testing'
  ? join(__dirname, '..', '.env.testing')
  : join(__dirname, '..', '.env');

dotenv.config({ path: envPath });
