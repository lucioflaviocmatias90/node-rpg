// import { join } from 'path';
// /* eslint-disable import/first */
// import * as dotenv from 'dotenv';

// dotenv.config();

// const envPath = process.env.NODE_ENV === 'testing'
//   ? join(__dirname, '..', '..', '.env.testing')
//   : join(__dirname, '..', '..', '.env');

// dotenv.config({ path: envPath });

// console.log(process.env.DB_DATABASE);

/* eslint-disable no-undef */
import Connection from '../database/connection';

const connection = new Connection();

describe('Users testing...', () => {
  beforeAll(async () => {
    await connection.create();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  // beforeEach(async () => {
  //   await connection.clear();
  // });

  it('creates a user', () => {
    expect(true).toBeTruthy();
  });
});
