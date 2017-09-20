var express = require('express');
var router = express.Router();
var mongo = require("mongodb");
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var url = 'mongodb://f1webdev:f10000@ds139844.mlab.com:39844/f1react';


function a () {
    MongoClient.connect('mongodb://192.168.0.7:27017/test', function(err, db) {
        if (err) {
            throw err;
        }
        db.collection('stats2017').find().toArray(function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    });
}

function getDrivers (callback) {

// Connection URL

// Use connect method to connect to the server
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected succesfully to server");
        var drivers = db.collection("fan");

        drivers.find({}).toArray((err2, drivers)=>{
            if (err2) throw  err2;
            callback(drivers);
        })
    });
}



/* GET users listing. */
router.get('/', function(req, res) {
    getDrivers((drivers)=>{
        res.json(drivers);

    })
});

router.post('/video', function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    // Validation
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();

    if(errors){
        res.render('register',{
            errors:errors
        });
    } else {
        var newUser = new User({
            name: name,
            email:email,
            username: username,
            password: password
        });

        

        req.flash('success_msg', 'You are registered and can now login');

        res.redirect('/users/login');
    }
});
module.exports = router;
