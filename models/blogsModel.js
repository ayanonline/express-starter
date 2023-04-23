const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A blog must have a name'],
    unique: true,
    trim: ture,
  },
});

//  Creating Model
const Blog = new mongoose.model('Blog', blogSchema);

module.exports = Blog;
