import bcrypt from 'bcrypt';

class Hash {
  static async generate(password: string) {
    return await bcrypt.hash(password, 12);
  }

  static async compare(password: string, passwordHashed: string) {
    return await bcrypt.compare(password, passwordHashed);
  }
}

export default Hash;
