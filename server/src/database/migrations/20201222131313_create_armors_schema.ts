import * as Knex from 'knex';

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('armors', table => {
    table.uuid('id').primary();
    table
      .uuid('armor_id')
      .notNullable()
      .references('id')
      .inTable('armors')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .uuid('character_id')
      .notNullable()
      .references('id')
      .inTable('characters')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('name');
    table.timestamps();
    table.timestamp('deleted_at');
  });
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('armors');
}
