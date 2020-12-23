import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('attributes', table => {
    table.uuid('id').primary();
    table
        .uuid('character_id')
        .notNullable()
        .references('id')
        .inTable('characters')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    table.integer('strength');
    table.integer('dexterity');
    table.integer('constituition');
    table.integer('intelligence');
    table.integer('wisdow');
    table.integer('charisma');
    table.timestamps();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('attributes');
}

