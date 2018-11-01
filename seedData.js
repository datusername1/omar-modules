const products = require("./database/models/products")
const images = require("./database/models/images")
const Faker = require("Faker")

const colorList = ["rad", "blue", "orange", "purple", "greeen", "yellow", "brown", "white", "black"]
const categoryList = ['originals', 'running', 'basketball', 'football', 'skateboaring', 'workout', 'essentials', 'sandles', 'hiking', 'golf', 'tennis', 'baseball']
const sizeList = "8 8.5 9 9.5 10 10.5 11 11.5 12"

const generateRandomNumber = (value) => {
  return Math.floor(Math.random() * value)
}

var data = {
  name:Faker.Name.lastName() + "_" + Faker.Address.zipCode(),
  price:generateRandomNumber(501),
  icon:Faker.Image.imageUrl(),
  colors:colorList[generateRandomNumber(colorList.length)] + " / " + colorList[generateRandomNumber(colorList.length)] + " / " + colorList[generateRandomNumber(colorList.length)],
  sizes:sizeList,
  quantity:generateRandomNumber(101),
  intventory:1,
  status:generateRandomNumber(4),
  favorite:generateRandomNumber(2),
  shipping:generateRandomNumber(3),
  category:categoryList[generateRandomNumber(categoryList.length)],
  review_count:generateRandomNumber(1001),
  stars:5
}

var image = {
  imageUrl:Faker.Image.imageUrl()
}

const generateAllData = () => {
  for(var i = 0; i < 101; i++){
    products.create(data)
      .then(() => {
        console.log("posted")
      })
      .catch((err) => {
        console.log(err)
      })
    images.create(image)
      .then(() => {
        console.log('posted image')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

generateAllData()