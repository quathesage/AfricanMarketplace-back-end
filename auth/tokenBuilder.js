const jwt = require("jsonwebtoken")

function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
  }
  const options = {
    expiresIn: "1d",
  }
  return jwt.sign(payload, process.env.SECRET || "testing token", options)
}

module.exports = {
  generateToken,
}
