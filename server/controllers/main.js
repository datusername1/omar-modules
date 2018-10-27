const products = require("../../database/models/products")
const images = require("../../database/models/images")
const data = require("../../seed/seedData.json")

const controller = {
  get:(req, res) => {
    console.log("something")
  },
  post:(req, res) => {
    products.create({
      name:"N_M_D Originals",
      price:185.00,
      icon:"http://placekitten.com/g/200/300",
      colors:"RED/BLUE/GREEN",
      size:"9/9.5/10/10.5/11",
      quantity:100,
      inventory:1,
      status:1,
      favorite:0,
      shipping:1,
      category:"Running Shoes",
      review_count:185,
      stars:4.5
    })
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((err) => {
      console.log(err)
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