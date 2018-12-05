const faker = require('faker');
const { teamNames } = require('./data/sports-teams');
const products = require('../database/models/products');

const basketballAccessories = require('./data/basketball-accessories');
const basketBallApparel = require('./data/basketball-apparel');
const basketballShoes = require('./data/basketball-shoes');
const footballCleats = require('./data/football-cleats');
const runningAccessories = require('./data/running-accessories');
const runningShoes = require('./data/running-shoes');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const generateImageUrl = (imgId, imgFileName, height) => 'http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/'
  + `v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${imgId}/zoom/${imgFileName}?sh=${height}`;

const hoodiePantsBackpackHatDecorator = (() => {
  const hoodies = [];
  const pants = [];
  const hats = [];

  basketBallApparel.forEach((item) => {
    if (item.title.match('Hoodie')) {
      hoodies.push(item);
    }
    if (item.title.match('Pants')) {
      pants.push(item);
    }
  });

  basketballAccessories.forEach((accessory) => {
    if (accessory.title.match('Hat')) {
      hats.push(accessory);
    }
  });

  runningAccessories.forEach((accessory) => {
    if (accessory.title.match('Hat')) {
      hats.push(accessory);
    }
  });

  return (product) => {
    const decoratedProduct = product;
    decoratedProduct.sport = null;
    decoratedProduct.team = null;
    let shoeApiData;

    if (decoratedProduct.category === 'Hoodie') {
      shoeApiData = hoodies[getRandomInt(0, hoodies.length)];
      decoratedProduct.featured = generateImageUrl(
        shoeApiData.images[0].id, shoeApiData.images[0].fileName, 1024,
      );
    } else if (decoratedProduct.category === 'Pants') {
      shoeApiData = pants[getRandomInt(0, pants.length)];
      decoratedProduct.featured = generateImageUrl(
        shoeApiData.images[0].id, shoeApiData.images[0].fileName, 1024,
      );
    } else if (decoratedProduct.category === 'Backpack') {
      decoratedProduct.featured = `https://loremflickr.com/320/240/${decoratedProduct.category}/all`;
    } else if (decoratedProduct.category === 'Hat') {
      shoeApiData = hats[getRandomInt(0, hats.length)];
      decoratedProduct.featured = generateImageUrl(
        shoeApiData.images[0].id, shoeApiData.images[0].fileName, 1024,
      );
    } else if (decoratedProduct.category === 'Sandle') {
      decoratedProduct.featured = `https://loremflickr.com/320/240/${decoratedProduct.category}/all`;
    }

    decoratedProduct.name = `${faker.fake('{{address.city}}')} ${decoratedProduct.category}`;
    return decoratedProduct;
  };
})();

const shoeDecorator = (() => {
  const nfl = teamNames.filter(team => team.league === 'nfl');
  const mls = teamNames.filter(team => team.league === 'mls');
  const nba = teamNames.filter(team => team.league === 'nba');
  const sportsForMock = ['Basketball', 'Football', null, 'Soccer', 'Running'];

  return (product) => {
    const shoe = product;
    let shoeApiData;
    if (shoe.category === 'Shoe') {
      shoe.sport = sportsForMock[getRandomInt(0, sportsForMock.length)];
    }
    if (shoe.sport === 'Football') {
      shoe.team = nfl[getRandomInt(0, nfl.length)].name;
      shoeApiData = footballCleats[getRandomInt(0, footballCleats.length)];
    } else if (shoe.sport === 'Soccer') {
      shoe.team = mls[getRandomInt(0, mls.length)].name;
      shoeApiData = footballCleats[getRandomInt(0, footballCleats.length)];
    } else if (shoe.sport === 'Basketball') {
      shoe.team = nba[getRandomInt(0, nba.length)].name;
      shoeApiData = basketballShoes[getRandomInt(0, basketballShoes.length)];
    } else {
      shoe.team = null;
      shoeApiData = runningShoes[getRandomInt(0, runningShoes.length)];
    }
    const imgId = shoeApiData.images[0].id;
    const imgFileName = shoeApiData.images[0].fileName;
    const all64HeightImageUrls = shoeApiData.images.map(
      image => generateImageUrl(image.id, image.fileName, 64),
    );

    shoe.images = all64HeightImageUrls.join(',');
    shoe.options = [1, 2].map(() => all64HeightImageUrls[getRandomInt(0, all64HeightImageUrls.length)]).join(',');
    shoe.featured = generateImageUrl(imgId, imgFileName, 1024);

    // TODO DRY!
    if (shoe.sport === 'Football' && shoe.team) {
      shoe.name = ` ${
        shoe.team
      } ${
        shoe.sport
      } ${
        'Cleat'}`;
    } else if (shoe.team) {
      shoe.name = ` ${
        shoe.team
      } ${
        shoe.sport
      } ${
        shoe.category}`;
    } else {
      shoe.name = `${faker.fake('{{name.firstName}}')
      } ${
        faker.fake('{{address.countryCode}}')
      } ${
        shoe.category}`;
    }
    return shoe;
  };
})();

const generateProduct = (() => {
  const gendersForMock = ['Men', 'Women', 'Children'];
  const colorsForMock = ['Black', 'white', 'red', 'green', 'yellow', 'blue', 'pink', 'gray', 'brown', 'orange', 'purple'];
  const validProductPriceRange = { min: 50, max: 300 };
  const sizeList = '8 8.5 9 9.5 10 10.5 11 11.5 12';

  return (category) => {
    let product = {};
    product.category = category;
    product.price = getRandomInt(
      validProductPriceRange.min,
      validProductPriceRange.max,
    );

    // Add a sale price based on actual price 1/3 of the time
    if (getRandomInt(0, 10) <= 3) {
      product.salePrice = getRandomInt(
        validProductPriceRange.min,
        product.price,
      );
    } else {
      product.salePrice = null;
    }

    product.colors = `${colorsForMock[getRandomInt(0, colorsForMock.length)]}/
      ${colorsForMock[getRandomInt(0, colorsForMock.length)]}/
      ${colorsForMock[getRandomInt(0, colorsForMock.length)]}`;
    // the random int generator is exclusive of the max (which is why we make max 6 here)
    // TODO - ratings should have non-integer values
    // TODO - come up with a distribution of ratings so there are more 4 and 5
    product.stars = getRandomInt(0, 6);
    product.review_count = getRandomInt(10, 500);
    product.gender = gendersForMock[getRandomInt(0, gendersForMock.length)];
    product.favorite = getRandomInt(0, 1);
    product.shipping = getRandomInt(1, 5);
    product.status = getRandomInt(0, 4);
    product.intventory = getRandomInt(0, 5);
    product.quantity = getRandomInt(0, 101);
    product.sizes = sizeList;
    if (product.category === 'Shoe' || product.category === 'Sandle') {
      product = shoeDecorator(product);
    } else if (product.category === 'Hoodie' || product.category === 'Pants' || product.category === 'Backpack' || product.category === 'Hat') {
      product = hoodiePantsBackpackHatDecorator(product);
    }

    return product;
  };
})();

const createProduct = (data) => {
  products.create(data)
    .then(() => {
      console.log('posted');
    })
    .catch((err) => {
      console.log(err);
    });
};

const categoriesForMock = [
  { name: 'Shoe', numItemsToGenerate: 100 },
  { name: 'Sandle', numItemsToGenerate: 0 },
  { name: 'Hoodie', numItemsToGenerate: 100 },
  { name: 'Pants', numItemsToGenerate: 100 },
  { name: 'Backpack', numItemsToGenerate: 0 },
  { name: 'Hat', numItemsToGenerate: 100 },
];

const generateAllData = () => {
  products.sync({ force: true }).then(() => {
    categoriesForMock.forEach((category) => {
      for (let i = 0; i < category.numItemsToGenerate; i += 1) {
        console.log(generateProduct(category.name));
        createProduct(generateProduct(category.name));
      }
    });
  });
};

generateAllData();

module.exports.generateProduct = generateProduct;
