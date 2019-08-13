var express  = require('express')
var router = express.Router();

// Home page route

router.get('/', function(req,res){
    res.send('Pagina inicial de wiki');
});

router.get('/about', function(req,res){
    res.send('About page')
});

module.exports = router;