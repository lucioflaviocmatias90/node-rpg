import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('character_magic_ritual', (table) => {
    table.uuid('id').primary();
    table
      .uuid('character_id')
      .notNullable()
      .references('id')
      .inTable('characters')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .uuid('magic_ritual_id')
      .notNullable()
      .references('id')
      .inTable('magic_rituals')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('name');
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('character_magic_ritual');
}
