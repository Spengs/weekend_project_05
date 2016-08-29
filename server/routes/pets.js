var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/Omicron';

router.post('/', function(req, res) {
    var pet = req.body;
    console.log(pet);
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            console.log("error");
            res.sendStatus(500);
        };
        client.query('INSERT INTO pets(name, description, image') +
            "VALUES($1, $2, $3)", [pet.name, pet.description, pet.photo],
            function(err, result) {
                done();
                if (err) {
                    console.log('broke');
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
            };
    });
});

// router.get('/', function(req, res){
//
// })









module.exports = router;
