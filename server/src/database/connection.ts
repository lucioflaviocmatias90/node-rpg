import { createConnection, ConnectionOptions, Connection } from 'typeorm';

export default class Database {
  private options: ConnectionOptions;
  public connection!: Connection;

  constructor (options: ConnectionOptions) {
    this.options = options;
  }

  async connect () {
    try {
      this.connection = await createConnection(this.options);
    } catch (err) {
      throw new Error(
        `An occurred error on connect to database: ${err.message}`
      );
      ;
    }
  }

  async disconnect () {
    try {
      await this.connection.close();
    } catch (err) {
      console.log(
        `An occurred error on disconnect to database: ${err.message}`
      );
    }
  }

  async clear () {
    const entities = this.connection.entityMetadatas;

    entities.forEach(async (entity) => {
      const repository = this.connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  }
}
