const products = require("./database/models/products")
const Faker = require("Faker")
const utils = require("./utils/utils")


const colorList = ["rad", "blue", "orange", "purple", "greeen", "yellow", "brown", "white", "black"]
const categoryList = ['originals', 'running', 'basketball', 'football', 'skateboaring', 'workout', 'essentials', 'sandles', 'hiking', 'golf', 'tennis', 'baseball']
const sizeList = "8 8.5 9 9.5 10 10.5 11 11.5 12"
const featured = 'https://loremflickr.com/800/800?random=1'
const options = "https://loremflickr.com/70/70?random=2,https://loremflickr.com/70/70?random=3"
const imagesList = "https://loremflickr.com/100/100?random=4,https://loremflickr.com/100/100?random=5,https://loremflickr.com/100/100?random=6,https://loremflickr.com/100/100?random=7,https://loremflickr.com/100/100?random=8,https://loremflickr.com/100/100?random=9,https://loremflickr.com/100/100?random=10,https://loremflickr.com/100/100?random=11,https://loremflickr.com/100/100?random=12"

const generateData = () => {
  return data = {
    name:Faker.Name.lastName() + "_" + Faker.Address.zipCode(),
    price:utils.generateRandomNumber(501),
    featured:featured,
    options:options,
    images:imagesList,
    colors:colorList[utils.generateRandomNumber(colorList.length)] + " / " + colorList[utils.generateRandomNumber(colorList.length)] + " / " + colorList[utils.generateRandomNumber(colorList.length)],
    sizes:sizeList,
    quantity:utils.generateRandomNumber(101),
    intventory:1,
    status:utils.generateRandomNumber(4),
    favorite:utils.generateRandomNumber(2),
    shipping:utils.generateRandomNumber(3),
    category:categoryList[utils.generateRandomNumber(categoryList.length)],
    review_count:utils.generateRandomNumber(1001),
    stars:5
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
  for(var i = 0; i < 101; i++){
    var data = generateData()
    createProduct(data)
  }
}

generateAllData()