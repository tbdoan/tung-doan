const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GETS ALL POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

//GET SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err })
    }
})

//SUBMITS POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.status(500).json({ message: err });
    }

});

//likely won't be used
//DELETES POST BY ID
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: error });
    }
});

//likely won't be used
//UPDATES POST BY ID
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: error });
    }
})

module.exports = router;