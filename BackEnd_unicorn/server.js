require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const questionRouter=require("./routes/QandA.js")
const shortsRouter=require("./routes/shorts.js")
const userRouter=require("./routes/signup.js")


const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://priyagawshinde0005:276JcJIHrmDaLdAr@cluster0.0sets.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/career_unicorn")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use('/questions',questionRouter)
app.use('/shorts',shortsRouter)
app.use('/signup',userRouter)
// app.use('/fetchdoc',fetchRouter)

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
