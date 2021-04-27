const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 35
    },
    desc: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 140
    },
    tags: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 512
  },
    body: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 4096
    },
    category: {
      type: String
    },
    date: { type: Date, default: Date.now }
  }
)

module.exports = mongoose.model("Post", postSchema);