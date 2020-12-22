import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PersonSchema1608560760261 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "persons",
            columns: [
              {
                name: "id",
                type: "varchar",
                generationStrategy: "uuid",
                isPrimary: true,
              },
              {
                name: "user_id",
                type: "varchar",
              },
              {
                name: "class_id",
                type: "varchar",
              },
              {
                name: "name",
                type: "varchar",
              },
              {
                name: "total_xp",
                type: "integer",
              },
              {
                name: "epic_destiny",
                type: "varchar",
              },
              {
                name: "affiliations",
                type: "varchar",
              },
              {
                name: "height",
                type: "integer",
              },
              {
                name: "weight",
                type: "integer",
              },
              {
                name: "gender",
                type: "varchar",
              },
              {
                name: "age",
                type: "integer",
              },
              {
                name: "size",
                type: "varchar",
              },
              {
                name: "race",
                type: "varchar",
              },
              {
                name: "level",
                type: "integer",
              },          
              {
                name: "alignment",
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
            ],
            foreignKeys: [
              {
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
              },
              {
                columnNames: ["class_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "classes",
              }
            ]
          }),
          true
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('persons');
      }

}
