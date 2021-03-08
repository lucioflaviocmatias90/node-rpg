/* eslint-disable no-undef */
import '../../utils/env';
import supertest from 'supertest';
import app from '../../app';
import { UserFactory } from '../../database/factories/UserFactory';
import Database from '../../database/connection';

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

describe('POST /sessions', () => {
  it('should return error when not sending required params', async () => {
    const response = await request.post('/sessions').send({});

    const { errors } = response.body;

    expect(response.status).toBe(400);
    expect(errors).toHaveLength(3);
    expect(errors[0]).toHaveProperty('location');
    expect(errors[0]).toHaveProperty('msg');
    expect(errors[0]).toHaveProperty('param');
  });

  it('should to create a new session', async () => {
    const newUser = await new UserFactory().create();

    const response = await request.post('/sessions').send({
      email: newUser.email,
      password: '123123'
    });

    const { userId } = response.body;

    expect(userId).toBe(newUser.id);
  });

  it('should return error when send wrong password', async () => {
    const newUser = await new UserFactory().create();

    const response = await request.post('/sessions').send({
      email: newUser.email,
      password: '123456'
    });

    const { error } = response.body;

    expect(error.code).toBe('002');
    expect(error.message).toBe('Email ou senha inválido');
  });

  it('should return error when send non-existing email', async () => {
    const response = await request.post('/sessions').send({
      email: 'non_existing_email@email.com',
      password: '123123'
    });

    const { error } = response.body;

    expect(error.code).toBe('001');
    expect(error.message).toBe('Email ou senha inválido');
  });
});
