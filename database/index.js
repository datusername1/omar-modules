require('dotenv').config();
const Sequelize = require('sequelize');

const connectionPostgres = new Sequelize(
  'addidas',
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

connectionPostgres
  .authenticate()
  .then(() => {
    console.log('postgres connected');
  })
  .catch(err => {
    console.log('error with server');
    console.log(err);
  });

module.exports.postgres = connectionPostgres;
