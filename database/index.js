const postgres = require("pg")
const mysql = require("mysql")
const seq = require("sequelize")

const connectionPostgres = new seq("addidas", "omarjandali", "hackreactor25", {
  "host":"localhost",
  "dialect":"postgres",
})

connectionPostgres
  .authenticate()
  .then(() => {
    console.log("postgres connected")
  })
  .catch((err) => {
    console.log(err)
  })

module.exports.postgres = connection