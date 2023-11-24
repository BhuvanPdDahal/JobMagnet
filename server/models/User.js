const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    jobPosts: {
        type: [{
            id: { type: mongoose.Schema.Types.ObjectId, ref: 'JobPosts', required: true },
            title: { type: String, required: true },
            tags: { type: [String], required: true }
        }],
        default: []
    },
    jobRequests: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;