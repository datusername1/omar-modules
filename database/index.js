const postgres = require("pg")
const mysql = require("mysql")
const seq = require("sequelize")
require('dotenv').config();

const connectionPostgres = new seq("addidas", "omarjandali", "hackreactor25", {
  "host":"db",
  "dialect":"postgres",
})

connectionPostgres
  .authenticate()
  .then(() => {
    console.log("postgres connected")
  })
  .catch((err) => {
    console.log(
      "error with server"
    )
    console.log(err)
  })

module.exports.postgres = connectionPostgres;