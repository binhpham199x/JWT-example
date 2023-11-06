const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");

app.use(express.json());

const posts = [
    {
        username: "Kyle",
        title: "Post 1"
    },
    {
        username: "Jim",
        title: "Post 2"
    }
]

app.get("/posts", (req, res) => {
    res.json(posts)
})

app.post("/login", (req, res) => {
// Authentication User
})

app.listen(3000);