const products = require("../../database/models/products")
const images = require("../../database/models/images")
const data = require("../../seed/seedData.json")

const controller = {
  get:(req, res) => {
    products.findAll({})
      .then((response) => {
        res.status(200).send(response)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  post:(req, res) => {
    products.create({
      name:"NMD R1 SHOES ",
      price:185.00,
      icon:"http://placekitten.com/g/200/300",
      colors:"RED/BLUE/GREEN",
      sizes:"9/9.5/10/10.5/11",
      quantity:100,
      inventory:1,
      status:1,
      favorite:0,
      shipping:1,
      category:"ORIGINALS",
      review_count:185,
      stars:4.5
    })
    .then(() => {
      res.status(200).send("posted")
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