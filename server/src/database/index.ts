import mongoose from 'mongoose';
import databaseConfig from '../config/database';

const url: string = `mongodb://${databaseConfig.host}:${databaseConfig.port}/${databaseConfig.database}`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auth: { authSource: 'admin' },
  user: databaseConfig.user,
  pass: databaseConfig.password,
};

mongoose.connect(url, options, () => console.log('Connected to Database'));

mongoose.connection.on('error', (err) => {
  console.log('err', err);
});

export default mongoose;
