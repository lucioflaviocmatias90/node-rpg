import { createConnection, getConnection, ConnectionOptions } from 'typeorm';

export default class Database {
  private options: ConnectionOptions;

  constructor (options: ConnectionOptions) {
    this.options = options;
  }

  async create () {
    try {
      await createConnection(this.options);

      console.log('Connected on database');
    } catch (err) {
      console.log(`An occurred error on connect to database: ${err.message}`);
    }
  }

  async destroy () {
    try {
      await getConnection().close();
    } catch (err) {
      console.log(
        `An occurred error on disconnect to database: ${err.message}`
      );
    }
  }

  async clear () {
    const connection = getConnection();
    const entities = connection.entityMetadatas;

    entities.forEach(async (entity) => {
      const repository = connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  }
}
