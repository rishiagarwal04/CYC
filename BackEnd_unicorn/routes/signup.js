const express = require("express");
const User = require("../Model/Users.js");
const bcrypt = require('bcrypt');
const router=express.Router();

// Signup Endpoint
router.post('/', async (req, res) => {
    try {
        const {
            username,
            password,
            birthday,
            gender,
            contact,
            qualification,
            hobbies,
            skillset,
        } = req.body;

        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            password: hashedPassword,
            birthday,
            gender,
            contact,
            qualification,
            hobbies,
            skillset,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser._id });
    } catch (error) {
        console.error('Error in signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Personalize Form Endpoint
router.put("/personalize/:id", async (req, res) => {
    const userId = req.params.id;
    const { hobbies, skillset } = req.body;
    
    try {
        // Validate the input
        if (!Array.isArray(hobbies) || typeof skillset !== "string") {
            return res.status(400).json({ error: "Invalid input data" });
        }

        // Find the user by ID and update the data
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: { hobbies, skillset } },
            { new: true, runValidators: true } // Options to return updated document and validate input
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            message: "Personalization data updated successfully",
            hobbies: hobbies,
        });
    } catch (error) {
        console.error("Error updating personalization data:", error);
        res.status(500).json({
            error: "An error occurred while updating the data",
        });
    }
});

module.exports=router;