import './utils/env';
import 'reflect-metadata';
import app from './app';
import Connection from './database/connection';
import options from './config/database';

const PORT = process.env.PORT || 3333;

new Connection(options).create();

app.listen(PORT, () => console.log(`Running server on port ${PORT}`));
