/* eslint-disable no-undef */
import '../../utils/env';
import supertest from 'supertest';
import app from '../../app';
import { UserFactory, UserDataFactory } from '../../database/UserFactory';
import { User } from '../../app/models/User';
import Database from '../../database/connection';
import Auth from '../../app/services/Auth';
import { Room } from '../../app/models/Room';

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

    expect(response.status).toBe(200);
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

    expect(response.status).toBe(400);
    expect(errors).toHaveLength(1);
    expect(errors).toEqual([
      { msg: 'O campo name é obrigatório', param: 'name', location: 'body' }
    ]);
  });

  it('should error when user trying access not authorized', async () => {
    const response = await request.post('/rooms').send({});

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: {
        code: '098',
        message: 'Usuário sem permissão de acesso.'
      }
    });
  });

  it('should error when already exists room name', async () => {
    const token = await createToken();

    const room = await createRoom('sala sombria');

    const response = await request
      .post('/rooms')
      .set('Authorization', `bearer ${token}`)
      .send({ name: room.name });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: {
        code: '098',
        message: 'Usuário sem permissão de acesso.'
      }
    });
  });
});

const createToken = async () => {
  const newUser = await createUser();

  const token = new Auth().sign(newUser.id);

  return token;
};

const createUser = async () => {
  const userRepository = database.connection.getRepository(User);
  const userData = new UserFactory().make<UserDataFactory>();

  const user = userRepository.create({
    name: userData.name,
    password: '123123',
    email: userData.email,
    gender: userData.gender,
    birthday: userData.birthday
  });

  return await userRepository.save(user);
};

const createRoom = async (name: string) => {
  const roomRepository = database.connection.getRepository(Room);

  const room = roomRepository.create({ name: name });

  return await roomRepository.save(room);
};
