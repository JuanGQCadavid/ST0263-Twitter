console.log("Lets do it.")
const express = require('express')
const database = require('./database')
const app = express()

database.initializeMongo();

app.get('/', function(req,res){
    res.send('Hello World!')
})

app.listen(3000, function(){
    console.log('Server app listening on port 3000!')
})

app.get('/testFind', function(req,res){
    database.Tweet.find(function(err,tweets){
        if (err) return res.error(err);
        console.log(tweets);
        res.json(tweets);
    })
})