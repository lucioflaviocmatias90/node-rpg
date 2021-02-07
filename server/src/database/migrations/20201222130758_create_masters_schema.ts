import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('masters', (table) => {
    table.uuid('id').primary();
    table
      .uuid('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .uuid('room_id')
      .notNullable()
      .references('id')
      .inTable('rooms')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('masters');
}
