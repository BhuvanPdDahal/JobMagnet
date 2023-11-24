const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const dotenv = require('dotenv');

const User = require('../models/User');
const JobPost = require('../models/JobPost');

dotenv.config();

const signup = async (req, res) => {
    try {
        const { firstName, lastName, skills, email, password, status } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User with this email already exists" });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({ firstName, lastName, skills, email, password: hashedPassword, status });
        const token = jwt.sign({ email, id: newUser._id }, process.env.SECRET_KEY);
        res.status(200).json({ user: newUser, token });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Something went wrong" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password, status } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });
        if (user.status !== status) return res.status(400).json({ message: "Status is not matching" });
        const passwordIsMatching = await bcrypt.compare(password, user.password);
        if (!passwordIsMatching) return res.status(400).json({ message: "Password is not matching" });
        const token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY);
        res.status(200).json({ user, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const searchUser = async (req, res) => {
    try {
        const { tag, name, email } = req.query;
        const searchFor = (tag && "tags") || (name && "name") || (email && "email");
        let searchValue = tag || name || email;
        const value = new RegExp(searchValue, 'i');
        let users = [];

        if (searchFor === "tags") {
            users = await User.find({ status: "freelancer", skills: { $in: [value] } });
        }
        else if (searchFor === "name") {
            users = await User.find({
                status: "freelancer",
                $or: [
                    { firstName: value },
                    { lastName: value }
                ]
            });
        }
        else if (searchFor === "email") {
            const user = await User.findOne({ status: "freelancer", email: searchValue });
            if(user) users.push(user);
            console.log(users);
        }

        res.status(200).json({ users });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const limit = 10;
        const users = await User.find({ status: "freelancer" }).limit(limit);
        res.status(200).json({ users });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!ObjectId.isValid(id)) return res.status(404).json({ message: "User not found" });
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { signup, login, searchUser, getAllUsers, getUserById };