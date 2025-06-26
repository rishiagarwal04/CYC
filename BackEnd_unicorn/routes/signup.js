const express = require("express");
const User = require("../Model/Users.js");
const bcrypt = require("bcryptjs");
const router = express.Router();
const Skill = require("../Model/Forms.js");
// Signup Endpoint
router.post("/", async (req, res) => {
  try {
    console.log("Received signup request:", req.body);
    const {
      birthday,
      username,
      password,
      contact,
      qualification,
      gender,
      // hobbies,
      // skillset,
    } = req.body;

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash password
    // const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword = password;
    console.log("Birthday:", birthday);
    console.log("Username:", username);
    console.log("Contact:", contact);
    console.log("Qualification:", qualification);
    console.log("gender ", gender);
    console.log("password:", hashedPassword);
    // Create new user
    const newUser = new User({
      birthday,
      username,
      password: hashedPassword,
      contact,
      qualification,
      gender,
      // hobbies,
      // skillset,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser._id });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Internal server error " + error });
  }
});

// Personalize Form Endpoint
router.post("/personalize/:id", async (req, res) => {
  const userId = req.params.id;
  const { interest, courses_done, current_skillset, your_future_goal } =
    req.body;

  try {
    // Validate the input
    // if (!Array.isArray(hobbies) || typeof skillset !== "string") {
    //     return res.status(400).json({ error: "Invalid input data" });
    // }

    // Find the user by ID and update the data
    console.log("User ID:", userId);
    console.log("Interest:", interest);
    console.log("Courses Done:", courses_done);
    console.log("Current Skillset:", current_skillset);
    console.log("Your Future Goal:", your_future_goal);
    const newSkill = await Skill.create({
      user_id: userId,
      interest: interest,
      courses_done: courses_done,
      current_skillset: current_skillset,
      your_future_goal: your_future_goal || "Other",
    });

    newSkill.save();

    res.status(200).json({
      message: "Personalization data updated successfully",
      // hobbies: hobbies,
    });
  } catch (error) {
    console.error("Error updating personalization data:", error);
    res.status(500).json({
      error: "An error occurred while updating the data",
    });
  }
});

// Signin Endpoint
router.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    console.log("User signed in successfully:");
    res.status(200).json({
      message: "Signin successful",
      userId: user._id,
    });
    res.send("hello");
  } catch (error) {
    console.error("Error in signin:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select(
      "username birthday gender qualification contact"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User Data:", user);
    res.status(200).json({
      message: "User data retrieved successfully",
      user: {
        username: user.username,
        birthday: user.birthday,
        gender: user.gender || "",
        qualification: user.qualification || "",
        contact: user.contact || "",
      },
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/skills/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("Fetching skills for user ID:", userId);
    const skill = await Skill.findOne({ user_id: userId });
    console.log("Skill Data:", skill);
    res.status(200).json({
      message: "skill data retrieved successfully",
      skill: {
        interest: skill.interest,
        courses_done: skill.courses_done,
        current_skillset: skill.current_skillset || "",
        your_future_goal: skill.your_future_goal || "",
      },
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/skills/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { interest, courses_done, current_skillset, your_future_goal } =
      req.body;

    // Validate the input
    if (
      !Array.isArray(interest) ||
      !Array.isArray(courses_done) ||
      !Array.isArray(current_skillset)
    ) {
      return res.status(400).json({ error: "Invalid input data" });
    }

    // Find the user by ID and update the data
    console.log("User ID:", userId);
    console.log("Interest:", interest);
    console.log("Courses Done:", courses_done);
    console.log("Current Skillset:", current_skillset);
    console.log("Your Future Goal:", your_future_goal);

    const updatedSkill = await Skill.findOneAndUpdate(
      { user_id: userId },
      {
        $set: {
          interest: interest,
          courses_done: courses_done,
          current_skillset: current_skillset,
          your_future_goal: your_future_goal || "Other",
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedSkill) {
      return res
        .status(404)
        .json({ message: "Skills not found for this user" });
    }

    res.status(200).json({
      message: "Personalization data updated successfully",
      skill: updatedSkill,
    });
  } catch (error) {
    console.error("Error updating personalization data:", error);
    res.status(500).json({
      error: "An error occurred while updating the data",
    });
  }
});

router.put("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, gender, qualification, contact } = req.body;
    console.log("username:", username);
    console.log("gender : ", gender);
    console.log("qualification:", qualification);
    console.log("contact:", contact);
    // Validate input
    if (!username || !contact || !qualification || !gender) {
      return res.status(400).json({ message: "Required fields are missing" });
    }
    // if (!Array.isArray(interests) || typeof skillset !== "string") {
    //     return res.status(400).json({ message: "Invalid input data" });
    // }
    birthday = req.body.birthday;
    // Combine birthday into string format for storage
    // const birthdayString = `${birthday.month}-${birthday.day}-${birthday.year}`;
    // console.log("Birthday String:", birthdayString);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          username,
          gender,
          qualification,
          contact,
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Parse birthday for response
    // const [year, month, day] = updatedUser.birthday.split("-");
    res.status(200).json({
      message: "User data updated successfully",
      user: {
        username: updatedUser.username,
        // birthday: updatedUser.birthday,
        gender: updatedUser.gender,
        qualification: updatedUser.qualification,
        contact: updatedUser.contact,
      },
    });
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
