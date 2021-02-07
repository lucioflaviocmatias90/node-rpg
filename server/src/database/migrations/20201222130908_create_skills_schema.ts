import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('skills', (table) => {
      table.uuid('id').primary();
      table.string('name');
      table.timestamps();
    })
    .then(() => {
      const data = [
        {
          id: 'bf790410-90f8-49c2-8ecf-404a78a85985',
          name: 'Acrobacia',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '6346c64f-da5c-4635-89e0-ba394bb8d566',
          name: 'Arcanismo',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '53941227-4095-4015-84df-2ad9cfad26b3',
          name: 'Atletismo',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'fc3e7a86-8fae-4636-add8-a53815a004f6',
          name: 'Blefe',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '0322ee71-9296-421a-a18c-eaff05531195',
          name: 'Diplomacia',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'ca0c61fe-0eab-441f-afe6-f71d449c4e79',
          name: 'Exploração',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'bf2bd8b5-895e-4476-9063-ea26f864b298',
          name: 'Furtividade',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '02749663-239e-4fac-b60c-e1918d5d2ca1',
          name: 'História',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '57ce37aa-fca5-490e-8d7e-8a305a53bb15',
          name: 'Intimidação',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'cf67fc7d-8917-455a-af08-355caf2e0382',
          name: 'Intuição',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'e798263b-33df-4e50-9b7f-5e7896f598a4',
          name: 'Ladinagem',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '7cc4cf82-77bd-46c5-a913-a2200b9f89d7',
          name: 'Manha',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'dbba639d-935d-4a26-b73e-326ac786091b',
          name: 'Natureza',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'd72bdec1-5a97-4314-b268-1d66dbb41051',
          name: 'Percepção',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '0f033b0c-2ed9-41ad-96dd-ad58b14f5413',
          name: 'Religião',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '9d51f22f-e812-4442-ac8a-99cc7ba8dfa3',
          name: 'Socorro',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'e1ea53ac-572a-421e-9ae2-c6b0d744b990',
          name: 'Tolerância',
          created_at: new Date(),
          updated_at: new Date()
        }
      ];

      return knex.insert(data).into('skills');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('skills');
}
