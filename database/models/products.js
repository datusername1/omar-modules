const Sequelize = require('sequelize');
const { postgres } = require('../index.js');

const products = postgres.define(
  'newproducts',
  {
    _id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: { type: Sequelize.STRING },
    price: { type: Sequelize.FLOAT },
    team: { type: Sequelize.STRING },
    sport: { type: Sequelize.STRING },
    featured: { type: Sequelize.STRING },
    options: { type: Sequelize.TEXT },
    images: { type: Sequelize.TEXT },
    colors: { type: Sequelize.STRING },
    sizes: { type: Sequelize.STRING },
    quantity: { type: Sequelize.INTEGER },
    inventory: { type: Sequelize.BOOLEAN },
    status: { type: Sequelize.SMALLINT },
    favorite: { type: Sequelize.BOOLEAN },
    shipping: { type: Sequelize.SMALLINT },
    category: { type: Sequelize.STRING },
    review_count: { type: Sequelize.INTEGER },
    stars: { type: Sequelize.INTEGER },
    gender: { type: Sequelize.STRING },
  },
  {
    timestamps: false,
  },
  postgres
    .sync()
    .then(() => {
      console.log('product model set for postgres');
    })
    .catch(err => {
      console.log(err);
    })
);

module.exports = products;
