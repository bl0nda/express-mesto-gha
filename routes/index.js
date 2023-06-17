const router = require('express').Router();

const userRouter = require('./user');
const cardsRouter = require('./card');

router.use(userRouter);
router.use(cardsRouter);
router.use((req, res) => {
  res.status(404).send({ message: 'Данные не найдены' });
});

module.exports = router;
