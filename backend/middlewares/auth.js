const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET); // { userId, role }
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
}

function requireRole(role) {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    };
}

module.exports = { auth, requireRole };