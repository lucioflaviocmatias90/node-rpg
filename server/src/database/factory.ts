import faker from 'faker';

export const User = {
  name: faker.name.firstName(),
  email: faker.internet.email(),
  password: faker.random.word(),
  gender: faker.random.word(),
  birthday: faker.date.past()
};
