import { body } from 'express-validator';

export const store = [
  body('name').isLength({ min: 5 }).withMessage('O campo name é obrigatório')
];
