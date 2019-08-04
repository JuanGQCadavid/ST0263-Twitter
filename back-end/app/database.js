const mongoose = require('mongoose');

const DATABASE_CONECTION = 'mongodb://mongo/test';

var TweetSchema = mongoose.Schema({
    tile: String,
    authorId: String,
    body: String,
    tags: [String],
    date: String
})
//      
//    
Tweet = exports.Tweet = mongoose.model('Tweet',TweetSchema);

exports.initializeMongo = function(){
    mongoose.connect(DATABASE_CONECTION);

    console.log('Trying to connect to ' + DATABASE_CONECTION);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error: We might not be as connected as I tgought'));
    db.once('open', function(){
        console.log('We are connected! You and I!!');
        addRandomTweet();
    });
}

var addRandomTweet = function(){
    var newTweet = new Tweet({
        title: 'Tweet test',
        authorId: 'Back-end',
        body: 'Testing body',
        tags: ['#Test', '#anOtherTest'],
        date: '04/08/2019'
    });
    //         tags: [{tag: '#Test'}, {tag: '#AnOtherTest'}]
    newTweet.save(function (err,fluffy){
        if (err) return console.error(err);
        console.log("There is a new test Tweet.");
    });
}