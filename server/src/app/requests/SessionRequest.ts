import { body } from 'express-validator';

export const store = [
  body('email').isEmail(),
  body('password').notEmpty().isString().isLength({ min: 6, max: 6 })
];
