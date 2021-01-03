import './utils/env';
import 'reflect-metadata';
import app from './app';

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Running server on port ${PORT}`));
