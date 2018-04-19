var mongoose = require('mongoose');

//Users Schema
var usersSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type:String,
        required: true
    },
    create_date:{ 
        type: Date
    }
});

var Users = module.export = mongoose.model('Users', usersSchema);

//Get users
module.exports.getUsers = function(callback, limit) { 
    Users.find(callback).limit(limit);
}