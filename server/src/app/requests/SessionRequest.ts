import { body } from 'express-validator';

export const store = [
  body('email').isEmail().withMessage('Email inválido'),

  body('password')
    .notEmpty()
    .withMessage('O campo email é obrigatório')
    .isLength({ min: 6, max: 6 })
    .withMessage(
      'O campo password deve ter no mínimo 6 caracteres e máximo 6 caractereces'
    )
];
