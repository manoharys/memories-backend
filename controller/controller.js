const PostMessages = require("../modal/schema");
const objectId = require("mongoose").Types.ObjectId;

const getPosts = async (req, res) => {
  try {
    const posts = await PostMessages.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const createPosts = async (req, res) => {
  try {
    const postData = req.body;
    console.log("postdata", postData);
    const newPost = PostMessages(postData);
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//Update
const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    if (!objectId.isValid(id)) {
      res.status(404).json({ message: "not Found" });
      return;
    }
    const updatedPosts = req.body;
   console.log(updatedPosts)
    const update = await PostMessages.findByIdAndUpdate(id, {
      $set: updatedPosts,
    });
    res.status(200).json(update);
  } catch (error) {
    res.json(error);
  }
};

//delete
const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);
    if (!objectId.isValid(id)) {
      res.status(404).json({ message: "not Found" });
      return;
    }

    const update = await PostMessages.findByIdAndRemove(id);
    res.status(200).json({delete: "deleted"})
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getPosts, createPosts, updatePost, deletePost };
