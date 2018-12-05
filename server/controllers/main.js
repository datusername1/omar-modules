const Sequelize = require('sequelize');
const products = require('../../database/models/products');
const utils = require('../../utils/utils');

const controller = {
  get: async (req, res) => {
    if (Object.keys(req.query).length > 0) {
      const { limit } = req.query;
      let { categories } = req.query;
      categories = categories.split(',');
      console.log('here is the categories length!!!!', categories.length);
      const responses = [];

      for (let i = 0; i < categories.length; i += 1) {
        responses.push(
          products.findAll({
            order: Sequelize.fn('RANDOM'),
            where: {
              category: categories[i],
            },
            limit,
          })
        );
      }
      Promise.all(responses).then(response => {
        const parsedResponse = [];
        Object.keys(response).forEach(key => {
          parsedResponse.push(response[key][0].get({ plain: true }));
        });
        res.send(parsedResponse);
      });
    } else {
      const recordId = utils.generateRandomNumber(101);
      products
        .findById(recordId)
        .then(response => {
          res.status(200).send(response.dataValues);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  delete: () => {
    console.log('something');
  },
};

module.exports = controller;
