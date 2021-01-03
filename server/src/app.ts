import express, { Application } from 'express';
import routes from './routes';
import Connection from './database/connection';
import options from './config/database';

class App {
  public app: Application;

  public constructor () {
    this.app = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  private middlewares () {
    this.app.use(express.json());
  }

  private routes () {
    this.app.use(routes);
  }

  private async database () {
    await new Connection(options).create();
  }
}

export default new App().app;
