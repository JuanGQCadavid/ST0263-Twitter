console.log("Lets do it.")
const express = require('express')
const database = require('./database')
//const cors = require('cors');
const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
}) 

database.initializeMongo();

//app.use(cors());

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

app.get('/deleteA', function(req,res){
    
    database.removeTweets();
    res.send("<h2> The job was done </h2>");
})

app.get('/addR', function(req,res){
    database.addRandomTweet();
    res.send("<h2> The job was done </h2>");

})