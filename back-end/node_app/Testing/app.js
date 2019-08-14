var express = require('express')

//routers
var wiki = require('./wiki')

//Loger
var logger = require('morgan')

var square = require('./square')

var app = express()

// my own middleware function
var a_middleware_function = function(req,res,next){
    // what ever i want to do
    res.send('because i got high')
    next(); // Call next() so Express will call the next middleware function in the chain.
}

// Add routers
app.use('/wiki',wiki)

// Add logger
app.use(logger('dev'))

//add img gestor

app.use('/media',express.static('media'))

app.get('/', function(req,res){
    res.send('Hola perras ' + square.area(4));
});


app.get('/b', a_middleware_function);


app.listen(3000, function(){
    console.log('Application listening over port 3000')
});