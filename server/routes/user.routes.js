const express = require('express');
const { signup, login, searchUser, getAllUsers, getUserById } = require('../controllers/users.controller');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/search', searchUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);

module.exports = router;