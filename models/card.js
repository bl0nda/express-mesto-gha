const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: URL,
    required: true,
  },
  owner: {

    required: true,
  },

});

module.exports = mongoose.model('card', cardSchema);
