const ProductFixtures = {};

ProductFixtures.simpleProduct = { price: 200, quantity: 10 };

ProductFixtures.productWithOneHundredQuantity = { price: 200, quantity: 100 };

ProductFixtures.productWithoutPrice = { value: 1234, quantity: 12 };

ProductFixtures.productWithOneHundredPriceAndFiveQuantity = { price: 100, quantity: 5 };

module.exports = ProductFixtures;
