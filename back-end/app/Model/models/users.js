let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    username:{
        type: String,
        lowercase: true,
        unique: true
    },
    password: String,
    firstName: String,
    lastName: String,
    token: {
        type: String,
        default: 'None'
    }
})

module.exports = mongoose.model('User',UserSchema);