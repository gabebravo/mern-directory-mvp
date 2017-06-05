const mongoose = require('mongoose');

const officeSchema = new mongoose.Schema({

  img: {
    type : String
  },

  floor: {
    type  : String
  },

  list: { type : Array , "default" : [] }

});

module.exports = officeSchema;
