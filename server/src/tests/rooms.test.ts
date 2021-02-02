/* eslint-disable no-undef */
import '../utils/env';
import supertest from 'supertest';
import app from '../app';
import { UserFactory, UserDataFactory } from '../database/UserFactory';
import { User } from '../app/models/User';
import Database from '../database/connection';
import Auth from '../app/services/Auth';

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

describe('GET /rooms', () => {
  it('should to list all available rooms', async () => {
    const token = await createToken();

    const response = await request
      .get('/rooms')
      .set('Authorization', `bearer ${token}`);

    const { list } = response.body;

    expect(list).toEqual([]);
  });
});

describe('POST /rooms', () => {
  it('should error when not sending required request body', async () => {
    const token = await createToken();

    const response = await request
      .post('/rooms')
      .set('Authorization', `bearer ${token}`)
      .send({});

    const { errors } = response.body;

    expect(errors).toEqual([
      { msg: 'O campo name é obrigatório', param: 'name', location: 'body' }
    ]);
  });
});

const createToken = async () => {
  const userRepository = database.connection.getRepository(User);
  const userData = new UserFactory().make<UserDataFactory>();

  const user = userRepository.create({
    name: userData.name,
    password: '123123',
    email: userData.email,
    gender: userData.gender,
    birthday: userData.birthday
  });

  const newUser = await userRepository.save(user);

  const token = new Auth().sign(newUser.id);

  return token;
};
