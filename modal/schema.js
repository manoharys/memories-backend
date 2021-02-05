const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  creater: String,
  description: String,
  tags: [String],
  selectedFile: String,
  like: {
    default: 0,
    type: String,
  },
  date: {
    type: String,
    default: new Date(),
  },
});

module.exports = mongoose.model("PostMessage", schema);

