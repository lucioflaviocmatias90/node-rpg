import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('user_addresses').del();

  // Inserts seed entries
  await knex('user_addresses').insert({
    id: '469b9280-449e-4bed-bcd8-71dbfec336cc',
    user_id: '25c45c27-1260-4ea7-89ab-ca57873dd6d2',
    city: 'São José do Rio Preto',
    zipcode: '15045560',
    neighborhood: 'Residencial Ana Célia',
    street: 'Rua José Sebastião de Almeida',
    number: '847',
    complement: 'Fundos'
  });
}
