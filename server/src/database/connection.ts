import { createConnection, Connection } from "typeorm";
import config from "../config/database";

createConnection(config)
  .then(() => console.log("Connected on database"))
  .catch((err) =>
    console.log(`An occurred error at connect on database: ${err.message}`)
  );
