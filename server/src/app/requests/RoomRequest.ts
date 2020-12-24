import { body } from 'express-validator';

export const store = [
  body('name').isLength({ min: 5 })
];
