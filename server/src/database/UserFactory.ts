import { Factory } from './factory';

export class UserFactory extends Factory {
  get data () {
    return {
      name: this.faker.name.firstName(),
      email: this.faker.internet.email(),
      password: this.faker.random.word(),
      gender: this.faker.random.word(),
      birthday: '2020-03-12'
    };
  }
}
