/* eslint-disable no-undef */
import request from 'supertest';
import app from '../app';
import database from './database';
import { User as userData } from '../database/factory';
import { User } from '../app/models/User';

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

describe('POST /sessions', () => {
  it('should to create a new session', async () => {
    const userRepository = database.connection.getRepository(User);
    const user = userRepository.create({
      name: userData.name,
      password: '123123',
      email: userData.email,
      gender: userData.gender,
      birthday: userData.birthday
    });

    const newUser = await userRepository.save(user);

    const response = await request(app).post('/sessions').send({
      email: userData.email,
      password: '123123'
    });

    const { userId } = response.body;

    expect(userId).toBe(newUser.id);
  });
});
