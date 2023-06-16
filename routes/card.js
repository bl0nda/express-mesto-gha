const cardsRouter = require('express').Router();

const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/card');

cardsRouter.get('/cards', getCards);

cardsRouter.delete('/cards/:cardId', deleteCard);

cardsRouter.post('/cards', createCard);

cardsRouter.put('/cards/:cardId/likes', likeCard);

cardsRouter.delete('/cards/:cardId/likes', dislikeCard);

module.exports = cardsRouter;
