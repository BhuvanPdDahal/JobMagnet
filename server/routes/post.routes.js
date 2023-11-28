const express = require('express');
const auth = require('../middleware/authentication');
const { createPost, searchPost, getAllPosts, getPostById, updatePost, deletePost, applyForJob } = require('../controllers/posts.controller');

const router = express.Router();

router.post('/', auth, createPost);
router.get('/search', searchPost);
router.get('/', auth, getAllPosts);
router.get('/:id', auth, getPostById);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.post('/:id', auth, applyForJob);

module.exports = router;