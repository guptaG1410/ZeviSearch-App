import { faker } from "@faker-js/faker";

//product data generator
const tempData = [];

const productDataGenerator = () => {
  const brands = ["adidas", "nike", "nb", "puma", "yonex"];

  function generateRandomBrand() {
    const randomIndex = Math.floor(Math.random() * brands.length);
    return brands[randomIndex];
  }

  function generateRandomRating() {
    const rating = Math.floor(Math.random() * 50) + 1;
    return rating / 10;
  }

  for (let i = 0; i < 100; i++) {
    const id =
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    const name = faker.commerce.productName();
    const sellingPrice = parseInt(faker.commerce.price(0, 100));
    const originalPrice = sellingPrice + sellingPrice * 0.2;
    const brand = generateRandomBrand();
    const rating = generateRandomRating();
    const reviews = Math.floor(Math.random() * 900) + 100;
    const img = faker.image.abstract(480, 600, true);
    tempData.push({
      id,
      name,
      originalPrice,
      sellingPrice,
      brand,
      rating,
      reviews,
      img,
    });
  }
  return tempData;
};

export { productDataGenerator };