const express = require("express")
const path = require("path")
const morgan = require("morgan")
const parser = require("body-parser")
const request = require("request")
const app = require("../../app.js")
const router = require("../../routers/main.js")

const server = express()

server.use(morgan("dev"))
server.use(parser.json())
server.use(parser.urlencoded({extended:true}))
server.use(express.static(path.join(__dirname, "./")))
server.use("/api", router)

module.exports = server;