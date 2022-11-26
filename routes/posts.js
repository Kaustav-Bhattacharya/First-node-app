const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//get all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (err) {
    res.status(404).send({ message: err });
  }
});

//get specific post
router.get("/:postId", async (req, res) => {
  try {
    const reqPost = await Post.findById(req.params.postId);
    res.status(200).send(reqPost);
  } catch (err) {
    res.status(404).send({ message: err });
  }
});

//save a post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedData = await post.save();
    res.status(201).send(savedData);
  } catch (err) {
    res.status(405).send({ message: err });
  }
});

//update a post


//to update the title 
router.patch('/:postId', async(req,res)=>{
  try{
  let updatedPost = await Post.updateOne({ _id: req.params.postId },{ $set:{title:req.body.title}});
  res.status(200).send(updatedPost);
  }catch(err){
    res.status(406).send({message:err})
  }
})

//to update the description 
router.patch('/:postId', async(req,res)=>{
  try{
  let updatedPost = await Post.updateOne({ _id: req.params.postId },{ $set:{description:req.body.description}});
  res.status(200).send(updatedPost);
  }catch(err){
    res.status(406).send({message:err})
  }
})

//delete post
router.delete("/:postId", async (req, res) => {
    try{
         const deletedPost = await Post.remove({ _id: req.params.postId });
         res.status(200).send({success:true,message:"post deleted"})
    }
    catch(err){
        res.status(406).send({message:err})
    }
});

module.exports = router;
