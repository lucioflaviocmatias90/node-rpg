import mongoose, { Schema, Document } from "mongoose";

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

export default mongoose.model<IUser>('User', UserSchema);
