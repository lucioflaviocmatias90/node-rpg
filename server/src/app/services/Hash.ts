import bcrypt from 'bcrypt';

class Hash {
  static async generate(password: string) {
    const passwordHashed = await bcrypt.hash(password, 12);

    return passwordHashed;
  }

  static async compare(password: string, passwordHashed: string) {
    const result = await bcrypt.compare(password, passwordHashed);

    return result;
  }
}

export default Hash;