const products = require("../database/models/products");
const Faker = require("Faker");
const utils = require("../utils/utils");
const { teamNames } = require("./staticDataForMock.js");
const basketballAccessories = require('./data/basketball-accessories');
const basketBallApparel = require('./data/basketball-apparel');
const basketballShoes = require('./data/basketball-shoes');
const footballCleats = require('./data/football-cleats');
const runningAccessories = require('./data/running-accessories');
const runningShoes = require('./data/running-shoes');


const colorList = ["rad", "blue", "orange", "purple", "greeen", "yellow", "brown", "white", "black"]
const categoryList = ['originals', 'running', 'basketball', 'football', 'skateboaring', 'workout', 'essentials', 'sandles', 'hiking', 'golf', 'tennis', 'baseball']
const sizeList = "8 8.5 9 9.5 10 10.5 11 11.5 12"


const featured = 'https://loremflickr.com/800/800?random=1'
const options = "https://loremflickr.com/70/70?random=2,https://loremflickr.com/70/70?random=3"
const imagesList = "https://loremflickr.com/100/100?random=4,https://loremflickr.com/100/100?random=5,https://loremflickr.com/100/100?random=6,https://loremflickr.com/100/100?random=7,https://loremflickr.com/100/100?random=8,https://loremflickr.com/100/100?random=9,https://loremflickr.com/100/100?random=10,https://loremflickr.com/100/100?random=11,https://loremflickr.com/100/100?random=12"

const generateImageUrl = (imgId, imgFileName) => `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${imgId}/zoom/${imgFileName}?sh=${64}`

const generateData = () => {
  return data = {
    featured: featured,
    options: options,
    images: imagesList,
  }
}

const createProduct = (data) => {
  products.create(data)
    .then(() => {
      console.log("posted")
    })
    .catch((err) => {
      console.log(err)
    })
}

const generateAllData = () => {
  for (var i = 0; i < 1; i++) {
    var data = generateData()
    createProduct(data)
  }
}

generateAllData()