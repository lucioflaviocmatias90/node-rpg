import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UsersSchema1608319777574 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "varchar",
            generationStrategy: "uuid",
            isPrimary: false,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "gender",
            type: "varchar",
          },
          {
            name: "birthday",
            type: "varchar",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
