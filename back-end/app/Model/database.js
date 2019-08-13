let mongoose = require('mongoose')

//Load models
let UserModel = require('./models/users')
let TweetModel = require('./models/tweets')

//Database config
const server = 'mongo'
const database = 'test'

class Database {
    constructor(){
        this._connect()
    }
    _connect(){
        mongoose.connect(`mongodb://${server}/${database}`)
            .then(() =>{
                console.log('Database connection successful');
            })
            .catch(err =>{
                console.error('Database connection error');
            })
    }

    user_register(username, password, firstName, lastName){
        let newUser = new UserModel({
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        })

        newUser.save()
            .then(doc =>{
                console.log(doc)
            })
            .catch(err => {
                console.error(err)
            })
    }

    user_find(username,password,callback){
        UserModel.find({
            username: username,
            password: password
        })
        .lean()
        .exec(function (err, docs) {

            // If there is an error, return the error and no results
            if(err) return callback(err, null)

            // No error, return the docs
            callback(null, docs)
        });
    }

}

module.exports = new Database()

// exports.authenticate = function(){    
// }

// exports.removeTweets = function() {

//     Tweet.deleteMany({}, function(err) {
//             if (err) {
//                 return console.error(err)
//             } else {
//                 console.log("ALL REGISTER DELETE!")
//             }
//         }
//     );
// };

// exports.addRandomTweet = function(){
//     var newTweet = new Tweet({
//         title: 'Tweet test',
//         authorId: 'Back-end',
//         body: 'Testing body',
//         tags: ['#Test', '#anOtherTest'],
//         date: '04/08/2019'
//     });
//     //         tags: [{tag: '#Test'}, {tag: '#AnOtherTest'}]
//     newTweet.save(function (err,fluffy){
//         if (err) return console.error(err);
//         console.log("There is a new test Tweet.");
//     });
// }