// Import express
const express = require("express");

// Create app
const app = express();

// Port number
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Homework API");
});

// Intro route
app.get("/intro", (req, res) => {
    res.send("Hi, I am a student learning Express APIs!");
});

// Name route
app.get("/name", (req, res) => {
    res.send("Your Name");
});

// Hobbies route
app.get("/hobbies", (req, res) => {
    res.json(["gaming", "coding", "music"]);
});

// Food route
app.get("/food", (req, res) => {
    res.json(["pizza", "burger", "fried rice"]);
});

// Bonus student route
app.get("/student", (req, res) => {
    res.json({
        name: "Arri",
        hobbies: ["gaming", "coding", "music"],
        intro: "Hi, I am learning how to build APIs using Express!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});