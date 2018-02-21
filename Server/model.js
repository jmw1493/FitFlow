const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/mongodb');

const postSchema = new Schema({
  // define schema here
  id: String,
  date: Date,
  img: {
    type: String,
    required: true
  },
  likes: Number,
  details: String,
  // comments: [{ body: String, date: Date }],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;