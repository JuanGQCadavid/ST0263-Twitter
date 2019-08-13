
var express = require('express')
var database = require('../Model/database')
var router = express.Router();


// Users api interface.

router.get('/login', function(req,res){
    var username = req.query.username;
    var password = req.query.password;

    database.user_find(username,password, function(err,docs){
        if (err) return res.send('No papi, error' + err)
        console.log(docs)
        return res.send(docs)
    })
});

router.post('/register', function(req,res){
    var username = req.query.username;
    var password = req.query.password;
    var firstName = req.query.firstName;
    var lastName = req.query.lastName;

    database.user_register(username,password,firstName,lastName)

    res.send('Registering with: ' + username +  ' ' + 
              password +  ' ' + firstName +  ' '  + lastName );

});

// Get info of user :id
router.get('/:username', function(req,res){
    var username = req.params.username;

    res.send('Info of ' + username)
})


module.exports = router;