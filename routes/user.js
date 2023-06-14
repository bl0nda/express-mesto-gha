const usersRouter = require('express').Router();

const { getUsers, getUsersById, createUser } = require('../controllers/user');

usersRouter.get('/users', getUsers);

usersRouter.get('/user/:userId', getUsersById);

usersRouter.post('/users', createUser);

module.exports = usersRouter;
