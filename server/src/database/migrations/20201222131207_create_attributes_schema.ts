import * as Knex from 'knex';

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('attributes', table => {
    table.uuid('id').primary();
    table.string('name');
    table.timestamps();
    table.timestamp('deleted_at');
  }).then(() => {
    const data = [
      {
        id: '82dec588-446c-4767-91c1-050268df1d4b',
        name: 'FORÇA',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'f6be3c74-87b4-42c0-8e9e-b9f2aea94003',
        name: 'DESTREZA',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'f0e1316d-6c08-4265-9ee6-0d0c70cc94db',
        name: 'CONSTITUIÇÃO',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '2c94a7d9-444a-42c2-8f88-39c7c58c8a20',
        name: 'INTELIGÊNCIA',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '73634786-f1a5-4d39-b36f-238d854ca6ac',
        name: 'SABEDORIA',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '1a52d2a8-ffcf-48ec-9100-13544ea22935',
        name: 'CARISMA',
        created_at: new Date(),
        updated_at: new Date()
      }
    ];
    return knex.insert(data).into('attributes');
  });
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('attributes');
}
