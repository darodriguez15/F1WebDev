var express = require('express');
var router = express.Router();
var mongo = require("mongodb");
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var url = 'mongodb://f1webdev:f10000@ds139844.mlab.com:39844/f1react';



function insertarVideo (fani) {

    MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            console.log("Connected succesfully to server");
            var fan = db.collection("fan");

            fan.insert(fani);
        }

    )
}






router.post('/', function(req, res){
    var name = req.body.name;
    var from = req.body.from;
    var url = req.body.url;



var fan = {
    name:name,
    video:url,
    from:from
    }

console.log(fan);

    res.redirect("/FanZone");
    insertarVideo(fan);




});
module.exports = router;
