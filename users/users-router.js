const router = require("express").Router()

const Users = require("./users-model")

const { validateUserId } = require("./users-middleware")

// GET All Users /api/users

router.get("/", (req, res, next) => {
  Users.getUsers()
    .then((users) => {
      res.status(200).json(users)
    })
    .catch(next)
})

// GET User by id

router.get("/:id", validateUserId, (req, res) => {
  res.json(req.user)
})

module.exports = router
