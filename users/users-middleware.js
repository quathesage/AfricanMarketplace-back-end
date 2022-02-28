const Users = require("./users-model")

function validateUserId(req, res, next) {
  const id = req.params.id

  Users.getUserById(id)
    .then((resp) => {
      if (resp) {
        req.user = resp
        next()
      } else {
        res.status(404).json({ message: "User Not Found." })
      }
    })
    .catch((err) => {
      res.status(500).json({ err })
    })
}

module.exports = {
  validateUserId,
}
