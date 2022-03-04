const router = require("express").Router()
const Locations = require("./locations-model")
const validate = require("../auth/restricted-middleware")

router.get("/", validate, (req, res, next) => {
  Locations.find()
    .then((location) => {
      res.json(location)
    })
    .catch(next)
})

router.get("/:id", validate, (req, res, next) => {
  const { id } = req.params

  Locations.findById(id)
    .then((location) => {
      if (location) {
        res.status(200).json(location)
      } else {
        res
          .status(404)
          .json({ message: `Could not find location with id ${id}.` })
      }
    })
    .catch(next)
})

router.post("/", validate, (req, res, next) => {
  const location = req.body
  Locations.add(location)
    .then((location) => {
      res.status(200).json(location)
    })
    .catch(next)
})

router.put("/:id", validate, (req, res, next) => {
  const changes = req.body
  const { id } = req.params

  Locations.update(id, changes)
    .then((location) => {
      if (location) {
        Locations.findById(req.params.id)
          .then((updatedLocation) => {
            res.status(200).json({
              updatedLocation,
              message: "location was updated successfully!",
            })
          })
          .catch(next)
      } else {
        res
          .status(404)
          .json({ message: "Could not find location with given id" })
      }
    })
    .catch(next)
})

router.delete("/:id", validate, (req, res, next) => {
  const { id } = req.params
  Locations.remove(id)
    .then((deletedLocation) => {
      if (deletedLocation) {
        res.json({
          message: `${deletedLocation} was successfully removed`,
        })
      } else {
        res.status(404).json({
          error: "location could not be deleted!",
        })
      }
    })
    .catch(next)
})

module.exports = router
