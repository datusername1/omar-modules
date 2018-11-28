const products = require('../../database/models/products');
const utils = require('../../utils/utils');

const controller = {
  get: (req, res) => {
    var recordId = utils.generateRandomNumber(101);
    products
      .findById(recordId)
      .then(response => {
        console.log(response.dataValues);
        res.status(200).send(response.dataValues);
      })
      .catch(err => {
        console.log(err);
      });
  },
  delete: (req, res) => {
    console.log('something');
  },
};

module.exports = controller;
