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

describe('POST /sessions', () => {
  it('should to create a new session', async () => {
    const newUser = await createUser();

    const response = await request(app).post('/sessions').send({
      email: userData.email,
      password: '123123'
    });

    const { userId } = response.body;

    expect(userId).toBe(newUser.id);
  });

  it('should return error when send wrong password', async () => {
    const newUser = await createUser();

    const response = await request(app).post('/sessions').send({
      email: newUser.email,
      password: '123456'
    });

    const { error } = response.body;

    expect(error.code).toBe('002');
    expect(error.message).toBe('Email ou senha inválido');
  });

  it('should return error when send non-existing email', async () => {
    await createUser();

    const response = await request(app).post('/sessions').send({
      email: 'non_existing_email@email.com',
      password: '123123'
    });

    const { error } = response.body;

    expect(error.code).toBe('001');
    expect(error.message).toBe('Email ou senha inválido');
  });
});

const createUser = async () => {
  const userRepository = database.connection.getRepository(User);

  const user = userRepository.create({
    name: userData.name,
    password: '123123',
    email: userData.email,
    gender: userData.gender,
    birthday: userData.birthday
  });

  return await userRepository.save(user);
};
