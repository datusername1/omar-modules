const products = require("./database/models/products")
const images = require("./database/models/images")
const Faker = require("Faker")
const utils = require("./utils/utils")


const colorList = ["rad", "blue", "orange", "purple", "greeen", "yellow", "brown", "white", "black"]
const categoryList = ['originals', 'running', 'basketball', 'football', 'skateboaring', 'workout', 'essentials', 'sandles', 'hiking', 'golf', 'tennis', 'baseball']
const sizeList = "8 8.5 9 9.5 10 10.5 11 11.5 12"

const generateData = () => {
  return data = {
    name:Faker.Name.lastName() + "_" + Faker.Address.zipCode(),
    price:utils.generateRandomNumber(501),
    icon:Faker.Image.imageUrl(),
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

const generateImage = () => {
  return image = {
    imageUrl:Faker.Image.imageUrl()
  }
}

const createProduct = (image) => {
  products.create(image)
      .then(() => {
        console.log("posted")
      })
      .catch((err) => {
        console.log(err)
      })
}

const createImage = (data) => {
  images.create(image)
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
    var image = generateImage()
    createProduct(data)
    createImage(image)
  }
}

generateAllData()