import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', table => {
       table.uuid('id').primary();
       table.string('name');
       table.string('email');
       table.string('password');
       table.string('gender');
       table.string('birthday');
       table.timestamps();
       table.timestamp('deleted_at');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}

