const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const users = require("./routes/users");
const PORT = 5000;

const app = express();
dotenv.config();

app.use(users);
async function connectToMongoDB() {
    try {
      await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (err) {
      console.error(err);
    }
  }
  
  // Call the function to connect
  connectToMongoDB();

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
