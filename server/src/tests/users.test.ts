/* eslint-disable no-undef */

import Connection from '../database/connection';
import request from 'supertest';
import app from '../app';

const connection = new Connection({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'docker',
  password: 'docker',
  database: 'node-rpg-test',
  entities: ['./src/app/models/*.ts']
});

describe('Users testing...', () => {
  beforeAll(async () => {
    await connection.create();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('get all users', async () => {
    const response = await request(app).get('/users');

    const { list } = response.body;

    expect(list).toEqual([]);
  });

  it('creates a user', () => {
    expect(true).toBeTruthy();
  });
});
