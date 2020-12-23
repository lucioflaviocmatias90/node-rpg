import express from 'express';

import rooms from './rooms';
import sessions from './sessions';
import users from './users';

import auth from '../app/middlewares/Auth';

const app = express();

app.use('/rooms', auth);
app.use('/rooms', rooms);
app.use('/sessions', sessions);
app.use('/users', users);

export default app;
