const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contacts", contactRoutes);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/contactsDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// test route
app.get("/", (req, res) => {
  res.send("Contacts API Running");
});

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
