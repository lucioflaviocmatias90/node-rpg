/* eslint-disable no-undef */
import '../../utils/env';
import supertest from 'supertest';
import app from '../../app';
import { UserFactory } from '../../database/factories/UserFactory';
import Database from '../../database/connection';
import { v4 as uuidV4 } from 'uuid';

const database = Database.getInstance();
const request = supertest(app);

beforeAll(async () => {
  await database.connect();
});

afterAll(async () => {
  await database.disconnect();
});

beforeEach(async () => {
  await database.clear();
});

describe('GET /users', () => {
  it('get all users', async () => {
    const newUser = await new UserFactory().create();

    const response = await request.get('/users');

    const { list } = response.body;

    expect(response.status).toBe(200);
    expect(list[0].id).toBe(newUser.id);
    expect(list[0].name).toBe(newUser.name);
    expect(list[0].email).toBe(newUser.email);
  });
});

describe('POST /users', () => {
  it('should return error when not sending required params', async () => {
    const response = await request.post('/users').send({});

    const { errors } = response.body;

    expect(response.status).toBe(400);
    expect(errors).toHaveLength(9);
    expect(errors[0]).toHaveProperty('msg');
  });

  it('should return error when existing user with same email', async () => {
    const userFactory = new UserFactory();
    const newUser = await userFactory.create();
    const userData = userFactory.make();

    const response = await request.post('/users').send({
      name: userData.name,
      password: '123123',
      email: newUser.email,
      gender: userData.gender,
      birthday: userData.birthday
    });

    const { error } = response.body;

    expect(response.status).toBe(400);
    expect(error.code).toBe('001');
    expect(error.message).toBe('Email em uso');
  });

  it('should to create a new user', async () => {
    const userData = new UserFactory().make();
    const response = await request.post('/users').send(userData);

    const { message } = response.body;

    expect(response.status).toBe(201);
    expect(message).toBe('Usuário criado com sucesso');
  });
});

describe('DELETE /users', () => {
  it('should to exclude a specific user', async () => {
    const newUser = await new UserFactory().create();

    const response = await request.delete(`/users/${newUser.id}`);

    const { message } = response.body;

    expect(response.status).toBe(200);
    expect(message).toBe('Usuário excluído com sucesso');
  });

  it('should return error when non-existing user', async () => {
    const userId = uuidV4();

    const response = await request.delete(`/users/${userId}`);

    const { error } = response.body;

    expect(response.status).toBe(400);
    expect(error.code).toBe('001');
    expect(error.message).toBe('Usuário não encontrado');
  });

  it('should return error when sending unformatted uuid', async () => {
    const userId = 'unformatted_uuid';

    const response = await request.delete(`/users/${userId}`);

    const { error } = response.body;

    expect(response.status).toBe(400);
    expect(error.code).toBe('002');
    expect(error.message).toBe('Erro ao excluir o usuário');
  });
});
