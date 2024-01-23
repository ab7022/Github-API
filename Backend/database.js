const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

// Connect to MongoDB
mongoose.connect("mongodb+srv://abdul:91oFy8etusfqQ3a5@cluster0.argigth.mongodb.net/github", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a model for the Users collection
const User = mongoose.model("Github", {
  githubId: String,
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.post("/", async (req, res) => {
  const githubId = req.body.id;
  console.log("Received GitHub ID:", githubId);

  try {
    const existingUser = await User.findOne({ githubId });

    if (existingUser !== null) {
      return res.status(400).send("GitHub ID already exists");
    }

    const user = new User({ githubId });
    await user.save();

    res.status(200).send("GitHub ID saved successfully");
  } catch (error) {
    console.error('Error saving GitHub ID:', error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
