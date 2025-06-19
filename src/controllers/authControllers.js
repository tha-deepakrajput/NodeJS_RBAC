const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Password hashing : 
        const hashedPassword = await bcrypt.hash(password, 10);

        // New user : 
        const newUser = new User({
            username,
            password: hashedPassword,
            role,
        });
        await newUser.save()    // saving a new user to the database
        res.status(201).json({ message: `User registered with the username : ${username}` });
    } catch (err) {
        console.error("Error : ", err);
        res.status(500).json({ message: `Something went wrong` });
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            res.status(404).json({ message: `User with username : ${username} not found.` });
        }

        const isMatch = bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1hr" }
        );

        res.status(200).json({ token });
    } catch (err) {

    }
}

module.exports = {
    register,
    login,
}