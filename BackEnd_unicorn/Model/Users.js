const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 30,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    birthday: {
        month: {
            type: String,
            required: true,
        },
        day: {
            type: Number,
            required: true,
            min: 1,
            max: 31,
        },
        year: {
            type: Number,
            required: true,
        },
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        default: "Other",
    },
    contact: {
        type: String,
        required: true,
        match: [/^\d{10}$/, "Please enter a valid contact number"],
    },
    qualification: {
        type: String,
        enum: ["High School", "Diploma", "Undergraduate", "Postgraduate", "Doctorate"],
        required: true,
    },
    hobbies: {
        type: [String],
        default: [],
    },
    skillset: {
        type: String, // Changed from an array to a single string
        default: "",
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
