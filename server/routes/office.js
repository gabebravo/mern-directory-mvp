const express = require('express');
const router  =  express.Router();
const mongoose = require('mongoose');

const officeSchema = require('../schemas/office');
const Office = mongoose.model('offices', officeSchema);

function getDirectory(req, res) {
  Office.find((err, offices) => {
    if (err) {
      console.log('err');
      res.status(500).send(err);
    }
    if (!offices) {
      console.log('no offices');
      res.sendStatus(404);
    }
    res.status(200).json(offices);
  });
}

// controllers
router.get('/', getDirectory);

//export Directory
module.exports = router;
