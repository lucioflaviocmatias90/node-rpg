import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import routes from './routes';

class App {
  public app: Application;

  public constructor () {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  private middlewares () {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
  }

  private routes () {
    const options = {
      swaggerOptions: {
        authAction: {
          JWT: {
            name: 'JWT',
            schema: {
              type: 'apiKey',
              in: 'header',
              name: 'Authorization',
              description: ''
            },
            value: 'Bearer <JWT>'
          }
        }
      }
    };

    this.app.use(routes);
    this.app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument, options)
    );
  }
}

export default new App().app;
