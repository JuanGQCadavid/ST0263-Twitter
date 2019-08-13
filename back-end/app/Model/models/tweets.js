let mongoose = require('mongoose')

let TweetSchema = mongoose.Schema({
    title: String,
    username: {
        type: String,
        unique: true
    },
    body: String,
    tags:{
        type: [String],
        lowercase: true
    },
    date: String,
    comments: [{ 
        username: String, 
        body: String, 
        date: String 
    }]
})

module.exports = mongoose.model('Tweet',TweetSchema)