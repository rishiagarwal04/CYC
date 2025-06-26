require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const questionRouter = require("./QandA.js");
const shortsRouter = require("./shorts.js");
const userRouter = require("./signup.js");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
console.log("Environment Variables:", process.env.MONGO_URL, process.env.PORT);
mongoose
  .connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/questions", questionRouter);
app.use("/shorts", shortsRouter);
app.use("/signup", userRouter);
// app.use('/fetchdoc',fetchRouter)

app.listen(process.env.PORT, () => {
  console.log("Server running on " + process.env.PORT);
});
