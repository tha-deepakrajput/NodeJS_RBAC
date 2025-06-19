const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token; 
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({message: "No token, Authorization Denied"});
        }

        
    }
}