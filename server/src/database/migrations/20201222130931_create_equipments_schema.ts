import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('equipments', (table) => {
    table.uuid('id').primary();
    table.string('name');
    table.timestamps();
    table.timestamp('deleted_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('equipments');
}
