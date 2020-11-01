import mongoose from 'mongoose'

mongoose.connect(
  'mongodb://localhost/node-rpg', 
  { useNewUrlParser: true }, 
  () => console.log('Connected to Database')
)

export default mongoose;