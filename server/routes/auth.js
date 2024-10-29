const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const USERS_FILE = path.join(__dirname, "../data/users.json");

const readUsersFromFile = () => {
    try {
        const data = fs.readFileSync(USERS_FILE, "utf8");
        return JSON.parse(data);
    } catch (error) {
        return []; 
    }
};

const writeUsersToFile = (users) => {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf8");
};

// Register
router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const users = readUsersFromFile();

    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: uuidv4(), username, password: hashedPassword, role: "user" };

    users.push(newUser);
    writeUsersToFile(users); 

    res.status(201).json({ message: "User registered successfully", id: newUser.id });
});

// Login
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const users = readUsersFromFile();

    const user = users.find((u) => u.username === username);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token, id: user.id });
});

module.exports = router;
