export default {
  database: process.env.DB_DATABASE as string,
  host: process.env.DB_HOST as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSW as string,
  port: process.env.DB_PORT as string,
};
