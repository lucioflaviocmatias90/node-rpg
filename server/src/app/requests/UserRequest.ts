import { body } from 'express-validator';

export const store = [
  body('name').isString().isLength({ min: 5 }),
  body('email').isEmail(),
  body('password').notEmpty().isString().isLength({ min: 6, max: 6 }),
  body('gender').isString().isIn(['masculino', 'feminino']),
  body('birthday').isString().isLength({ min: 5 })
];
