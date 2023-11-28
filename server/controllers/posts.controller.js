const User = require('../models/User');
const JobPost = require('../models/JobPost');
const { ObjectId } = require('mongodb');

const createPost = async (req, res) => {
    try {
        const { userId } = req;
        const { title, description, tags } = req.body;
        const user = await User.findById(userId);
        if(!user) await res.status(404).json({ message: "User not found" });
        const newPost = await JobPost.create({ title, description, tags, creator: { name: `${user.firstName} ${user.lastName}`, id: user._id } });
        user.jobPosts.push({ id: newPost._id, title, tags });
        await user.save();
        res.status(200).json(newPost);

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const searchPost = async (req, res) => {
    try {
        const { title, tag } = req.query;
        const searchFor = (title && "title") || (tag && "tags");
        let searchValue = title || tag;
        const value = new RegExp(searchValue, 'i');
        let posts = [];

        if (searchFor === "title") {
            posts = await JobPost.find({ title: value });
        }
        else if (searchFor === "tags") {
            posts = await JobPost.find({ tags: { $in: [value] } });;
        }

        res.status(200).json({ posts });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await JobPost.find().limit(10);
        res.status(200).json({ posts });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const getPostById = async (req, res) => {
    try {
        const { userId } = req;
        const { id } = req.params;
        if(!ObjectId.isValid(id)) return res.status(404).json({ message: "Post not found" });
        const post = await JobPost.findById(id);
        if(!post) return res.status(404).json({ message: "Post not found" });
        const alreadyViewed = post.views.find((view) => view.toString() === userId);
        if(!alreadyViewed) {
            post.views.push(userId);
            await post.save();
        }
        res.status(200).json(post);

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const updatePost = async (req, res) => {
    try {
        const { userId } = req;
        const { id: postId } = req.params;
        const { title, description, tags } = req.body;
        const post = await JobPost.findById(postId);
        if(!post) await res.status(404).json({ message: "Post not found" });
        if(post.creator.id.toString() !== userId) await res.status(403).json({ message: "Not allowed" });
        const update = { title, description, tags };
        const updatedPost = await JobPost.findByIdAndUpdate(postId, update, { new: true });
        res.status(200).json(updatedPost);
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const deletePost = async (req, res) => {
    try {
        const { userId } = req;
        const { id: postId } = req.params;
        const post = await JobPost.findById(postId);
        if(!post) return res.status(404).json({ message: "Post not found" });
        if(post.creator.id.toString() !== userId) return res.status(403).json({ message: "Not allowed" });
        await JobPost.findByIdAndDelete(postId);
        res.status(200).json({ message: "Post deleted successfully" });
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const applyForJob = async (req, res) => {
    try {
        const { userId } = req;
        const { id: postId } = req.params;
        const { heading, description } = req.body;
        const post = await JobPost.findById(postId);
        if(!post) return res.status(404).json({ message: "Post not found" });
        if(post.creator.id.toString() === userId) return res.status(403).json({ message: "Not allowed" });
        const user = await User.findById(userId);
        if(!user) return res.status(404).json({ message: "User not found" });
        const newSubmission = { id: user._id, name: `${user.firstName} ${user.lastName}`, heading, description };
        post.submissions.push(newSubmission);
        await post.save();
        res.status(200).json({ message: "Mail sent successfully" });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { createPost, searchPost, getAllPosts, getPostById, updatePost, deletePost, applyForJob };