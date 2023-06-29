const router = require('express').Router();

const userRouter = require('./user');
const cardsRouter = require('./card');
const NotFoundError = require('../errors/not-found-err');

router.use(userRouter);
router.use(cardsRouter);
router.use((req, res, next) => {
  next(new NotFoundError('Данные не найдены'));
});

module.exports = router;
