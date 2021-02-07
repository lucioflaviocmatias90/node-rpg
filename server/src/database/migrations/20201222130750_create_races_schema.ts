import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('races', (table) => {
      table.uuid('id').primary();
      table.string('name');
      table.timestamps();
    })
    .then(() => {
      const data = [
        {
          id: '9f7e5b9a-a2bb-419e-ab5b-651498ed6c37',
          name: 'Anão',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '26b20a34-92dc-4872-b64b-3f1452169f09',
          name: 'Draconato',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'c4c62584-5a35-49f1-b269-5d538cc26b0e',
          name: 'Eladrin',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '1086eb06-6e1c-4f22-9b2b-b531ad27f791',
          name: 'Elfo',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '4506b68b-ee93-478b-bfd7-9d02688d1f31',
          name: 'Halfling',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '3dbce44d-acbc-4122-a9ea-2825cca081a9',
          name: 'Humano',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'd0f4435a-ae3c-4ff7-bdd7-54b27ff05391',
          name: 'Meio-Elfo',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'e1eb1a0d-b245-4250-bfc2-9d3f0ba50bfe',
          name: 'Tieflings',
          created_at: new Date(),
          updated_at: new Date()
        }
      ];

      return knex.insert(data).into('races');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('races');
}
