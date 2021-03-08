import { getRepository, Repository } from 'typeorm';
import { User } from '../../app/models/User';
import { Factory } from '../factory';

export type Gender = 'masculino' | 'feminino';

export interface UserDataFactory {
  name: string;
  email: string;
  password: string;
  gender: Gender;
  birthday: string;
}

export class UserFactory extends Factory {
  public userRepository: Repository<User>;

  public constructor() {
    super();
    this.userRepository = getRepository(User);
  }

  public make(): User {
    const userRepositoryData = this.userRepository.create({
      name: this.faker.name.firstName(),
      email: this.faker.internet.email(),
      password: '123123',
      gender: 'masculino',
      birthday: '2020-03-12'
    });

    return userRepositoryData;
  }

  public makeMany(length: number = 1) {
    const manyData = [];

    for (let index = length; index > 0; index--) {
      manyData.push({ ...this.make() });
    }

    return manyData;
  }

  public async create(): Promise<User> {
    const userRepositoryData = this.make();
    const user = await this.userRepository.save(userRepositoryData);

    return user;
  }

  public createMany(length: number): Promise<any[]> {
    throw new Error('Method not implemented.');
  }
}
