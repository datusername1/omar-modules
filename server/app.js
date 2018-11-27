const express = require('express');
const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser');
const cors = require('cors');
const router = require('./routers/main.js');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

module.exports = app;
