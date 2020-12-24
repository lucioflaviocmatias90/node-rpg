import express, { Application } from 'express';
import routes from './routes';
import Connection from './database/connection';

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
    await new Connection().create();
  }
}

export default new App().app;
