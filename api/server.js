const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/", (req, res) => {
  res.send("African Marketplace Backend")
})

module.exports = server
