/* eslint-disable no-undef */
import '../utils/env';
import request from 'supertest';
import app from '../app';
import { User as userData } from '../database/factory';
import { User } from '../app/models/User';
import Database from '../database/connection';
import options from '../config/database';
import { v4 as uuidV4 } from 'uuid';

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
  it('should to create a new user', async () => {
    const response = await request(app).post('/users').send(userData);

    const { user } = response.body;

    expect(user.name).toBe(userData.name);
  });

  it('should return error when existing user with same email', async () => {
    const newUser = await createUser();

    const response = await request(app).post('/users').send({
      name: userData.name,
      password: '123123',
      email: newUser.email,
      gender: userData.gender,
      birthday: userData.birthday
    });

    const { error } = response.body;

    expect(error.code).toBe('001');
    expect(error.message).toBe('Email em uso');
  });
});

describe('DELETE /users', () => {
  it('should to exclude a specific user', async () => {
    const newUser = await createUser();

    const response = await request(app).delete(`/users/${newUser.id}`);

    const { message } = response.body;

    expect(message).toBe('Usuário excluído com sucesso');
  });

  it('should return error when non-existing user', async () => {
    const userId = uuidV4();

    const response = await request(app).delete(`/users/${userId}`);

    const { error } = response.body;

    expect(error.code).toBe('001');
    expect(error.message).toBe('Usuário não encontrado');
  });

  it('should return error when sending unformatted uuid', async () => {
    const userId = 'unformatted_uuid';

    const response = await request(app).delete(`/users/${userId}`);

    const { error } = response.body;

    expect(error.code).toBe('002');
    expect(error.message).toBe('Erro ao excluir o usuário');
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
