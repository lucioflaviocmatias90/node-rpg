import { Factory } from './factory';
import { User } from '../app/models/User';

export type Gender = 'masculino' | 'feminino';

export interface UserDataFactory {
  name: string;
  email: string;
  password: string;
  gender: Gender;
  birthday: string;
}

export class UserFactory extends Factory {
  get model() {
    return User;
  }

  get data(): UserDataFactory {
    return {
      name: this.faker.name.firstName(),
      email: this.faker.internet.email(),
      password: '123123',
      gender: 'masculino',
      birthday: '2020-03-12'
    };
  }
}
