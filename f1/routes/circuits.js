var express = require('express');
var router = express.Router();
var mongo = require("mongodb");
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var url = 'mongodb://192.168.0.7:27017/test';

function getCircuits (callback) {

// Connection URL

// Use connect method to connect to the server
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected succesfully to server");
        var circuits = db.collection("circuitss2017");

        circuits.find({}).toArray((err2, circuits)=>{
            if (err2) throw  err2;
            callback(circuits);
        })
    });
}



/* GET users listing. */
router.get('/', function(req, res) {
    getDrivers((circuits)=>{
        res.json(circuits);

    })
});

module.exports = router;