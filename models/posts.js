var mongoose = require('mongoose');

//Posts Schema
var postsSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    st_address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zip:{
        type: Number,
        required: true
    },
    description:{
        type: String
    },
    create_date:{ 
        type: Date,
        default: Date.now
    }
});

var Posts = module.export = mongoose.model('Posts', postsSchema);

//Get posts
module.exports.getPosts = function(callback, limit) { 
    Posts
    .find(callback)
    .limit(limit);
}

//Get post for given user
module.exports.getPostsByEmail = function(email, callback, limit) { 
    Posts
    .find(callback)
    .where('email').equals(email)
    .limit(limit);
}