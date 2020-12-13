import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt';

class Auth {
  public config;

  public constructor() {
    this.config = jwtConfig;
  }

  public sign(payload: object) {
    const token = jwt.sign({
      data: payload,
    }, this.config.key, { expiresIn: this.config.expiresIn });

    return token;
  }

  public verify(token: string) {
    try {
      const decoded = jwt.verify(token, this.config.key);

      return decoded;
    } catch (err) {
      return {
        error: true,
        message: err.message,
      };
    }
  }
}

export default Auth;
