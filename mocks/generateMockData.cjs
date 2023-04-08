/* eslint-disable import/no-extraneous-dependencies */
const { faker } = require("@faker-js/faker");
const fs = require("fs");

function generateMockData(length) {
  const array = new Array(length).fill({});
  const products = array.map(() => ({
    id: faker.datatype.uuid(),
    category: faker.commerce.department(),
    description: faker.commerce.productDescription(),
    image: faker.image.city(100, 150),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    tags: faker.helpers.uniqueArray(faker.color.human, 3),
  }));
  return { products };
}

fs.writeFileSync("mocks/mock-data.json", JSON.stringify(generateMockData(20)));
