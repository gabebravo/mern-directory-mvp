// BASE SETUP
// =============================================================================

// import dependencies
const {MORGAN} = require('./config');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// import mongoose for the DB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// instantiate middleware instances
const app = express();
app.use(morgan(MORGAN, {}));
app.use(bodyParser.json());

// tell Node/Express to serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// ROUTES FOR OUR API
// =============================================================================

// routes specific to User schema
  const officeRouter = require('./server/routes/office');
  app.use('/office', officeRouter);

// START THE SERVER
// =============================================================================
let server = function IIFE() {

  let server;

  return {

    runServer: function (db, port){

      mongoose.connect(db, function(err) {
        if(err){
          mongoose.disconnect();
        }

        server = app.listen(port, function() {
          console.log(`listenting on port ${port}`);
        });

      });
    }

  }

}();

// EXPORT THE SERVER
// =============================================================================
module.exports = server;
