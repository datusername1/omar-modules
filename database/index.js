const postgres = require("pg")
const mysql = require("mysql")
const seq = require("sequelize")

const connectionPostgres = new seq("addidas", "omarjandali", "hackreactor25", {
  "host":"127.0.0.1",
  "dialect":"postgres"
})

const connectionSQL = new seq("addidas", "root", "hackreactor25", {
  "host":"127.0.0.1",
  "dialect":"mysql"
})

connectionPostgres
  .authenticate()
  .then(() => {
    console.log("postgres connected")
  })
  .catch((err) => {
    console.log(err)
  })

connectionSQL
  .authenticate()
  .then(() => {
    console.log("mysql connected")
  })
  .catch((err) => {
    console.log("connection err = " + err)
  })

module.exports.sql = connectionSQL
module.exports.postgres = connectionPostgres;