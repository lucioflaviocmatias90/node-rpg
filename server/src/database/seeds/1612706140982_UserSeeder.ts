import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert({
    id: '25c45c27-1260-4ea7-89ab-ca57873dd6d2',
    name: 'Lucio Flavio C. Matias',
    email: 'lucio@email.com',
    password: '$2b$12$uiWsdccpqOOci/tE9ZmpqeSdKLxAxoNCnBcLw35OlZQpCMBKeYkvK', // 123123
    gender: 'masculino',
    birthday: '1990-03-12',
    created_at: new Date(),
    updated_at: new Date()
  });
}
