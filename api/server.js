const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const authRouter = require("../auth/auth-router")
const usersRouter = require("../users/users-router")
const itemsRouter = require("../items/items-router")
const locationRouter = require("../locations/location-router")

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/auth", authRouter)
server.use("/api/users", usersRouter)
server.use("/api/items", itemsRouter)
server.use("api/locations", locationRouter)

server.use("/", (req, res) => {
  res.send("African Marketplace API")
})

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server
