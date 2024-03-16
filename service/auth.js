const jwt = require("jsonwebtoken");
const secret = "jhdfgshdfsghfgsfsssgf";

const setUser = (user) => {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
    }, secret)
}

const getUser = (token) => {
    if (!token) return null
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        console.error("Error verifying token:", error.message);
        return null;
    }
}


module.exports = {
    setUser,
    getUser
}
