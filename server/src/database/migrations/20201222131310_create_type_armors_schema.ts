import * as Knex from 'knex';

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('type_armors', table => {
    table.uuid('id').primary();
    table.string('name');
    table.timestamps();
  }).then(() => {
    const data = [
      {
        id: '02953bab-515f-4bbc-809b-40ef38b33d35',
        name: 'Trajes (Leve)',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '501829db-37ed-4afd-a8e3-5d93beee9626',
        name: 'Corseletes (Leve)',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e43b35c0-b8de-4c87-aedb-00a5fcf9afc1',
        name: 'Gibões (Leve)',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '4fa52ff1-474d-4afe-9c86-f298ac68eb09',
        name: 'Cotas (Pesada)',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '0fc3aee7-8b4a-4877-951e-9158297947b1',
        name: 'Bruneas (Pesada)',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'a161ca0e-5f6b-4287-9b75-e9ca7a666756',
        name: 'Armaduras de Placas (Pesada)',
        created_at: new Date(),
        updated_at: new Date()
      }
    ];
    return knex.insert(data).into('type_armors');
  });
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('type_armors');
}
