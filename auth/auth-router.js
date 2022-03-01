const router = require("express").Router()
const bcrypt = require("bcryptjs")
const generateToken = require("./tokenBuilder")
const { validateUserContent } = require("./auth-middleware")

const Users = require("../users/users-model")

router.post("/register", validateUserContent, (req, res) => {
  const { username, password } = req.body
  const credentials = { username, password }

  if (credentials) {
    credentials.password = bcrypt.hashSync(credentials.password, 8)

    Users.addUser(credentials)
      .then((user) => {
        res.status(201).json({ data: user })
      })
      .catch((error) => {
        console.log({ error })
        res.status(500).json({ message: error.message })
      })
  } else {
    res.status(400).json({
      message: "Please provide username and password",
    })
  }
})
router.post("/login", validateUserContent, (req, res) => {
  const { username, password } = req.body

  Users.findBy({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)
        res.status(200).json({
          user,
          token,
        })
      } else {
        res.status(401).json({ message: "Invalid Username or Password" })
      }
    })
    .catch((error) => {
      res.status(500).json(error)
    })
})

module.exports = router
