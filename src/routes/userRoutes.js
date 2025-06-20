const express = require("express");

const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const router = express.Router();

// For Admin: 
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.status(200).json({message: "Welcome Admin"});
});

// For Manager: 
router.get("/manager", verifyToken, authorizeRoles("admin", "manager"), (req, res) => {
    res.status(200).json({message: "Welcome Manager"});
});

// For User: 
router.get("/user", verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) => {
    res.status(200).json({message: "Welcome User"});
});

module.exports = router;