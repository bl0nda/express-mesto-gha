const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card
    .find({})
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка на сервере' }));
};

module.exports.deleteCard = (req, res) => {
  Card
    .findByIdAndRemove(req.params.id)
    .then((card) => {
      if (!card) {
        res.status(404).sens({ message: 'Данные не найдены' });
        return;
      }
      res.send({ data: card });
    })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка на сервере' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card
    .create({ name, link })
    .then((card) => res.send({ data: card }))
    // eslint-disable-next-line no-console
    .then(() => console.log(req.user._id))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Введены некорректные данные' });
        return;
      }
      res.status(500).send({ message: 'Произошла ошибка на сервере' });
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then((card) => {
      if (!card) {
        res.status(404).sens({ message: 'Данные не найдены' });
        return;
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Введены некорректные данные' });
        return;
      }
      res.status(500).send({ message: 'Произошла ошибка на сервере' });
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .then((card) => {
      if (!card) {
        res.status(404).sens({ message: 'Данные не найдены' });
        return;
      }
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Введены некорректные данные' });
        return;
      }
      res.status(500).send({ message: 'Произошла ошибка на сервере' });
    });
};
