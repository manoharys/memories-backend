const express = require("express");
const route = express.Router();
const {getPosts, createPosts, updatePost, deletePost}  = require("../controller/controller");

route.get('/', getPosts);
route.post('/', createPosts);
route.put('/:id', updatePost);
route.delete('/:id', deletePost);

module.exports = route