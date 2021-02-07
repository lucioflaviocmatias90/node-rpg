import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('status_rooms', (table) => {
      table.uuid('id').primary();
      table.string('name');
      table.timestamps();
    })
    .then(() => {
      const data = [
        {
          id: 'f891cb29-2b75-4781-99e4-4550d20fda67',
          name: 'ABERTA',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'ecd89599-f0e0-48a8-b114-fa6d5fccfa32',
          name: 'PRIVADA',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '897d74bc-3a75-433d-a4cd-bfcbefdb1d28',
          name: 'COMPLETA',
          created_at: new Date(),
          updated_at: new Date()
        }
      ];

      return knex.insert(data).into('status_rooms');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('status_rooms');
}
