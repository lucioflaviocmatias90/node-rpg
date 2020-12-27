import * as Knex from 'knex';

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('user_addresses', table => {
    table.uuid('id').primary();
    table
      .uuid('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('zipcode');
    table.string('street');
    table.string('number');
    table.string('neighborhood');
    table.string('complement');
    table.string('city');
    table.timestamps();
  });
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('user_addresses');
}
