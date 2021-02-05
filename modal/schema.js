const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String
  },
  creator:{
    type: String
  },
  description:{
    type: String
  },
  tags: [String],
  selectedFile: {
    type: String
  },
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

