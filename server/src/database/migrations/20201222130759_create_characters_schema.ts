import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('characters', table => {
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
    table
        .uuid('race_id')
        .notNullable()
        .references('id')
        .inTable('races')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    table
        .uuid('class_id')        
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');    
    table.string('name');
    table.string('total_xp');
    table.string('epic_destiny');
    table.string('affiliations');
    table.string('height');
    table.string('weight');
    table.string('gender');
    table.string('age');
    table.string('size');    
    table.string('level');
    table.string('alignment');
    table.timestamps();
    table.timestamp('deleted_at');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('characters');
}

