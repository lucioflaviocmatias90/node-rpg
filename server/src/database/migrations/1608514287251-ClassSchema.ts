import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ClassSchema1608557416293 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "classes",
              columns: [
                {
                  name: "id",
                  type: "varchar",
                  generationStrategy: "uuid",
                  isPrimary: true,
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                  name: "created_at",
                  type: "timestamp",
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                },
                {
                  name: "deleted_at",
                  type: "timestamp",
                  isNullable: true
                },
              ]
            }),
            true
        );

      const data = [
        {
          id: '5771c1df-d2c8-4d39-862a-8b56cf3c79bd',
          name: 'Bruxo',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '028b670c-d73d-4abc-960f-e323e47eea5d',
          name: 'Clérigo',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '2671ad52-f0fd-4543-b6f0-32529ae434a1',
          name: 'Guerreiro',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '12712dac-0d0d-4053-a60e-70b45ec01e2c',
          name: 'Ladino',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'b718cd7b-2bfe-4947-ac5c-fab120f3ca34',
          name: 'Mago',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'f5086335-32d4-4ac6-bd8e-9d973d5dee12',
          name: 'Paladino',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'e7035934-63ea-4e1d-9286-3eaad61eb3bb',
          name: 'Patrulheiro',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '9ab45d55-eba3-46dc-9028-775c36093e86',
          name: 'Senhor da Guerra',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]

       await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into("classes")
        .values(data)
        .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('classes');
    }

}
