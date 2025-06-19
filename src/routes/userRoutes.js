const express = require("express");

const router = express.Router();

// For Admin: 
router.get("/admin", (req, res) => {
    res.status(200).json({message: "Welcome Admin"});
});

// For Manager: 
router.get("/manager", (req, res) => {
    res.status(200).json({message: "Welcome Manager"});
});

// For User: 
router.get("/user", (req, res) => {
    res.status(200).json({message: "Welcome User"});
});

module.exports = router;