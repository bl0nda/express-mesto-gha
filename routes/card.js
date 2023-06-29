/* eslint-disable no-useless-escape */
const cardsRouter = require('express').Router();

const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/card');

const { cardIdValidation, createCardValidation } = require('../middlewares/validate');

cardsRouter.get('/cards', getCards);

cardsRouter.delete('/cards/:cardId', cardIdValidation, deleteCard);

cardsRouter.post('/cards', createCardValidation, createCard);

cardsRouter.put('/cards/:cardId/likes', cardIdValidation, likeCard);

cardsRouter.delete('/cards/:cardId/likes', cardIdValidation, dislikeCard);

module.exports = cardsRouter;
