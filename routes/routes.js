const express = require("express");
const route = express.Router();
const PostMessages = require('../modal/schema')

route.get('/', async (req, res)=>{
   try {
       const posts = await PostMessages.find();
       res.status(200).json(posts)
   } catch (error) {
       res.status(404).json({message: error});
   }

})



module.exports = route