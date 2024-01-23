const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.set("view engine", "ejs"); // Set EJS as the view engine
app.set("views", __dirname + "/views"); // Set the views directory
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://abdul:91oFy8etusfqQ3a5@cluster0.argigth.mongodb.net/"
);

const User = mongoose.model("Users", {
  githubId: String,
});

app.post("/", async function (req, res) {
  const name = req.body.id;

  const existingUser = await User.insertOne({ email: username });
  if (existingUser) {
    return res.status(400).send("Username already exists");
  }
  const user = new User({
    github: name,
    email: username,
    password: password,
  });
  user.save();
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});