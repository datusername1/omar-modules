const Faker = require("Faker")
const axios = require("axios")
const seedRecords = 150;

const colorList = ["rad", "blue", "orange", "purple", "greeen", "yellow", "brown", "white", "black"]
const categoryList = ['originals', 'running', 'basketball', 'football', 'skateboaring', 'workout', 'essentials', 'sandles', 'hiking', 'golf', 'tennis', 'baseball']
const sizeList = "8 8.5 9 9.5 10 10.5 11 11.5 12"

const createSeedData = () => {
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
  axios
    .post("/api/product", data)
    .then(() => {
      console.log(posted)
    })
    .catch((err) => {
      console.log(err)
    })
}

const generateRandomNumber = (value) => {
  return Math.floor(Math.random() * value)
}

// const generate100Recotds = () => {
//   for(var i = 0; i < seedRecords; i++){
//     createSeedData()
//   }
// }

module.exports.createSeedData = createSeedData
// generate100Recotds()