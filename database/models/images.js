const { postgres } = require("../index")
const seq = require("sequelize")
const { ProductPostgres }= require("./products")

const ImagesPostgres = postgres.define(
  "images",
  {
    _id:{type:seq.INTEGER, autoIncrement:true, primaryKey:true, allowNull:false},
    imageUrl:{type:seq.STRING, allowNull:false},
  },
  {
    timestamps:false
  },
  postgres.sync()
    .then(() => {
      console.log("image model set for postgres")
    })
    .catch((err) => {
      console.log(err)
    })
)

module.exports = ImagesPostgres;