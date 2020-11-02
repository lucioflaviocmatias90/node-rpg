import mongoose from 'mongoose'
import databaseConfig from '../config/database'

mongoose.connect(
  `mongodb://${databaseConfig.host}/${databaseConfig.database}`, 
  { useNewUrlParser: true, useUnifiedTopology: true }, 
  () => console.log('Connected to Database')
)

export default mongoose;