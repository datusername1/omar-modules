const products = require("../../database/models/products")
const images = require("../../database/models/images")

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
    products.create(req.body)
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