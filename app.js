const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;

const app = express();

const helmet = require('helmet');

const router = require('./routes/index');

mongoose.connect('mongodb://127.0.0.1:27017/mestodb')
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('connected success');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.use((req, res, next) => {
  req.user = {
    _id: '648e25ba442daf0ba1c57115', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});

app.use(router);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running on port ${PORT}`);
});
