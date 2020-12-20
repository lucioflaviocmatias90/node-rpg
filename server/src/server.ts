import * as dotenv from "dotenv";
dotenv.config();

import "reflect-metadata";

import app from "./app";

app.listen(3333, () => console.log("Running server on port 3333"));
