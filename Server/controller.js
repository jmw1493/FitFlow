const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongodb');
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB ORM - mongodb-orm');
});

const Post = require('./model.js');

// from '/events'
// query all events from the database and return as array of objects
// if query return parameters of query


const controller = {

  //new photo posted
  postPhoto(req, res) {
    let post = new Post({
      id: req.body.id,
      date: Date.now(),
      img: req.body.img,
      likes: 0,
      details: '',
      // comments: [],
    });
    post.save(function (err, post) {
      if (err) return console.error(err);
      return res.send(post);
    });
  },

  //arrow button clicked
  changePhotos(req, res) {
    Post.findOne({id: req.body.id}, (err, post) => {
      if (err) return res.sendStatus(400);
      return res.send(post);
    });
  },
  
  //like button clicked
  updateLikes(req, res) {
    Post.findOneAndUpdate({id: req.body.id}, {likeCount: req.body.likeCount}, {new:true}, (err, post) => {
      if (err) return res.sendStatus(400);
      return res.send(post);
    });
  }
}

module.exports = controller;