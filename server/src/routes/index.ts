import express from 'express';

import sessions from './sessions';
import users from './users';

const app = express();

app.use('/sessions', sessions);
app.use('/users', users);

export default app;
