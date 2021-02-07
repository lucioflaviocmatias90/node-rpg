import { body } from 'express-validator';
import { MessageRequestValidator as Message } from './MessageRequestValidator';

export const store = [
  body('name')
    .isString()
    .withMessage(Message.isString('name'))
    .notEmpty()
    .withMessage(Message.notEmpty('name')),

  body('email').isEmail().withMessage(Message.isEmail('email')),

  body('password')
    .notEmpty()
    .withMessage(Message.notEmpty('password'))
    .isString()
    .withMessage(Message.isString('password'))
    .isLength({ min: 6, max: 6 })
    .withMessage(Message.isLength('password', 6, 6)),

  body('gender')
    .isString()
    .withMessage(Message.isString('gender'))
    .isIn(['masculino', 'feminino'])
    .withMessage('O campo gender deve ser masculino ou feminino'),

  body('birthday').isString().withMessage(Message.isString('birthday'))
];
