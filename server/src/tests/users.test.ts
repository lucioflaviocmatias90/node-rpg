/* eslint-disable no-undef */
import '../utils/env';
import request from 'supertest';
import app from '../app';
import { User as userData } from '../database/factory';
import { User } from '../app/models/User';
import Database from '../database/connection';
import options from '../config/database';

const database = new Database(options);

beforeAll(async () => {
  await database.connect();
});

afterAll(async () => {
  await database.disconnect();
});

beforeEach(async () => {
  await database
    .connection
    .createQueryBuilder()
    .delete()
    .from(User)
    .execute();
});

describe('GET /users', () => {
  it('get all users', async () => {
    const response = await request(app).get('/users');

    const { list } = response.body;

    expect(list).toEqual([]);
  });
});

describe('POST /users', () => {
  it('create a new user', async () => {
    const response = await request(app).post('/users').send(userData);

    const { user } = response.body;

    expect(user.name).toBe(userData.name);
  });
});
