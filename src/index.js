const express = require("express");
const dotenv = require("dotenv").config();

const connectDB = require("./config/connectDB");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

connectDB();

const app = express();

// Middlewares : This middleware will help it to get the JSON data : 
app.use(express.json());

// Routes : 
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//Start the Server : 
const PORT = process.env.PORT || 7002;

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));