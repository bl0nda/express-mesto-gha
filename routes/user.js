/* eslint-disable no-useless-escape */
const userRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getUsers, getUserById, getCurrentUser, updateUser, updateAvatar,
} = require('../controllers/user');

userRouter.get('/users', getUsers);

userRouter.get('/users/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().length(24).hex(),
  }),
}), getUserById);

userRouter.get('users/me', getCurrentUser);

userRouter.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateUser);

userRouter.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().pattern(/^https?:\/\/(www\.)?[a-z0-9\-._~:\/?#[\]@!$&'()*+,;=]+\.[a-z0-9\-._~:\/?#[\]@!$&'()*+,;=]+#?/),
  }),
}), updateAvatar);

module.exports = userRouter;
