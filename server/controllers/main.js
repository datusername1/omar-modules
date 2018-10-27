const products = require("../../database/models/products")
const images = require("../../database/models/images")
const data = require("../../seed/seedData.json")

const controller = {
  get:(req, res) => {
    console.log("something")
  },
  post:(req, res) => {
    products.create({
      
    })
    console.log("something")
  },
  put:(req, res) => {
    console.log("something")
  },
  delete:(req, res) => {
    console.log("something")
  },
}

module.exports = controller;