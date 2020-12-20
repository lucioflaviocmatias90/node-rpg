import { createConnection, Connection } from "typeorm";
import options from "../config/database";

export default class Database {
  public connection!: Connection;

  async create() {
    try {
      this.connection = await createConnection(options);

      console.log("Connected on database");
    } catch (err) {
      console.log(`An occurred error on connect to database: ${err.message}`)
    }
  }

  async destroy() {
    try {
      await this.connection.close();
    } catch (err) {
      console.log(`An occurred error on disconnect to database: ${err.message}`)
    }
  }
}
