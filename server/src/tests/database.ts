import Database from '../database/connection';

export default new Database({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'docker',
  password: 'docker',
  database: 'node-rpg-test',
  entities: ['./src/app/models/*.ts']
});
