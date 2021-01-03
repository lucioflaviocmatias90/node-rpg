export default {

  development: {
    client: 'postgresql',
    connection: {
      database: 'node-rpg',
      user: 'docker',
      password: 'docker'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations_table',
      extension: 'ts',
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  },

  testing: {
    client: 'postgresql',
    connection: {
      database: 'node-rpg-test',
      user: 'docker',
      password: 'docker',
      port: 5433
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations_table',
      extension: 'ts',
      directory: './src/database/migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'node-rpg',
      user: 'docker',
      password: 'docker'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations_table'
    }
  }

};
