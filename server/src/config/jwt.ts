export default {
  key: process.env.JWT_KEY as string,
  expiresIn: 60 * 60,
};
