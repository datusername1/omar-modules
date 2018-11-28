const { postgres } = require('../index.js');
const seq = require('sequelize');

const ProductPostgres = postgres.define(
  'newproducts',
  {
    _id: {
      type: seq.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: { type: seq.STRING },
    price: { type: seq.FLOAT },
    team: { type: seq.STRING },
    sport: { type: seq.STRING },
    featured: { type: seq.STRING },
    options: { type: seq.TEXT },
    images: { type: seq.TEXT },
    colors: { type: seq.STRING },
    sizes: { type: seq.STRING },
    quantity: { type: seq.INTEGER },
    inventory: { type: seq.BOOLEAN },
    status: { type: seq.SMALLINT },
    favorite: { type: seq.BOOLEAN },
    shipping: { type: seq.SMALLINT },
    category: { type: seq.STRING },
    review_count: { type: seq.INTEGER },
    stars: { type: seq.INTEGER },
    gender: { type: seq.STRING },
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

module.exports = ProductPostgres;
