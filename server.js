const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Retrieve Data Models
Users = require('./models/users');
Posts = require('./models/posts');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/sparkit');
var db = mongoose.connection;

app.get('/', (req, res) => {
  res.send('Please use /api/users or /api/posts');
});

app.get('/api/users', (req, res) => {
  Users.getUsers(function(err, users){
    if (err) { 
      throw err;
    }
    res.json(users);
  });
});

app.get('/api/posts', (req, res) => {
  Posts.getPosts(function(err, posts){
    if (err) { 
      throw err;
    }
    res.json(posts);
  });
}); 

app.get('/api/posts/:email', (req, res) => {
  Posts.getPostsByEmail(req.params.email, function(err, posts){
    if (err) { 
      throw err;
    }
    res.json(posts);
  });
}); 

const port = 8080;

app.listen(port, () => `Server running on port ${port}`);