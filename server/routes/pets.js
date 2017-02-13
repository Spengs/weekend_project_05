var express = require('express');
var router = express.Router();
var pg = require('pg');
var connection = 'postgres://localhost:5432/Omicron';

router.get('/count', function(req, res) {
  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
    }
    client.query('SELECT COUNT(id) as count FROM pets',
      function(err, result) {
        done();

        if(err) {
          console.log('query error:', err);
          res.sendStatus(500);
        } else {
          res.send(result.rows[0]);
        }
    });
  });
});

// save favorite
router.post('/', function(req, res) {
  var favorite = req.body;
  console.log('fav:', favorite);
  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
    }
    client.query('INSERT INTO pets ' +
    ' (id, name, description, image)' +
    ' VALUES($1, $2, $3, $4)',
    [favorite.petID, favorite.petName, favorite.description, favorite.image],
    function(err, result) {
      done();

      if(err) {
        console.log('query error:', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  });
});

// get all favorite data
router.get('/', function(req, res) {
  pg.connect(connection, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
    }
    client.query('SELECT * FROM pets',
      function(err, result) {
        done();

        if(err) {
          console.log('query error:', err);
          res.sendStatus(500);
        } else {
          res.send(result.rows);
        }
    });
  });
});









module.exports = router;
