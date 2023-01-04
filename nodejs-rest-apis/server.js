'use strict';

const express = require('express');
const morgan = require('morgan');

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints

  .get('/clients', handleClients)
  .get('/client/:id', handleEachClient)
  .post('/clients', handleAddClient)
  .delete('/client/:id', handleDeleteClient)
  .get('/hangman/word/:id', handleTest)
  .get('/hangman/word', handleWord)
  .get('/hangman/guess/:id/:letter', handleGuess)

  .listen(8000, () => console.log(`Listening on port 8000`));
