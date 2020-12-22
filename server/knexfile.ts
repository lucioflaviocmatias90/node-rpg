// Update with your config settings.

export default {

  // development: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: "./dev.sqlite3"
  //   }
  // },

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },

  development: {
    client: "postgresql",
    connection: {
      database: "node-rpg",
      user: "docker",
      password: "docker"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations_table',
      extension: 'ts',
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds'
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "node-rpg",
      user: "docker",
      password: "docker"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "node-rpg",
      user: "docker",
      password: "docker"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
