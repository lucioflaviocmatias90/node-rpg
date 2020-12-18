import "reflect-metadata";

import app from "./app";
import "./database/connection";

app.listen(3333, () => console.log("Running server on port 3333"));
