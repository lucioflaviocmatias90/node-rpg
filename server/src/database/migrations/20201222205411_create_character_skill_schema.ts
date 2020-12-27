import * as Knex from 'knex';

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('character_skill', table => {
    table.uuid('id').primary();
    table
      .uuid('character_id')
      .notNullable()
      .references('id')
      .inTable('characters')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .uuid('skill_id')
      .notNullable()
      .references('id')
      .inTable('skills')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.timestamps();
  });
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('character_skill');
}
