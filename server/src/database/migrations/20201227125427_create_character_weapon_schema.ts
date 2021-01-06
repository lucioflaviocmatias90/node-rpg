import * as Knex from 'knex';

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('character_weapon', table => {
    table.uuid('id').primary();
    table
      .uuid('character_id')
      .notNullable()
      .references('id')
      .inTable('characters')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .uuid('weapon_id')
      .notNullable()
      .references('id')
      .inTable('weapons')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('name');
    table.timestamps();
  });
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('character_weapon');
}
