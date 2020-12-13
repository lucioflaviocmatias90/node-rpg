import mongoose, { Schema, Document } from 'mongoose';
import Hash from '../services/Hash'

export interface IUser extends Document {
  name: string,
  email: string,
  password: string,
  gender: string,
  birthday: Date,
}

const UserSchema: Schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
  birthday: Date,
});

UserSchema.pre('save', async function(this: IUser, next: Function) {
  this.password = await Hash.generate(this.password);
});

export default mongoose.model<IUser>('User', UserSchema);
