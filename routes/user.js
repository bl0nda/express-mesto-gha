/* eslint-disable no-useless-escape */
const userRouter = require('express').Router();

const {
  getUsers, getUserById, getCurrentUser, updateUser, updateAvatar,
} = require('../controllers/user');

const { getUserByIdValidation, updateUserValidation, updateAvatarValidation } = require('../middlewares/validate');

userRouter.get('/users', getUsers);

userRouter.get('/users/:userId', getUserByIdValidation, getUserById);

userRouter.get('users/me', getCurrentUser);

userRouter.patch('/users/me', updateUserValidation, updateUser);

userRouter.patch('/users/me/avatar', updateAvatarValidation, updateAvatar);

module.exports = userRouter;
