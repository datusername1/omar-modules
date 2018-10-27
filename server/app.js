const server = require("./bin/www/index.js")
const express = require("express")
const normalize = require("normalize-port")
const databases = require("../database/index.js")

const listenPort = 5588

server.listen(listenPort, () => {console.log("connected to server")})

module.exports = server;