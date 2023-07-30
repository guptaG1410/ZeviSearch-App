import { faker } from "@faker-js/faker";

const tempData = [];

const productDataGenerator = () => {
  const brands = ["mango", "hm", "superdry"];

  function generateRandomBrand() {
    const randomIndex = Math.floor(Math.random() * brands.length);
    return brands[randomIndex];
  }

  function generateRandomRating() {
    const rating = Math.floor(Math.random() * 50) + 1;
    return rating / 10;
  }

  for (let i = 0; i < 50; i++) {
    const id =
      Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    const name = faker.commerce.productName();
    const sellingPrice = parseInt(faker.commerce.price({ min: 0, max: 100 }));
    const originalPrice = sellingPrice + sellingPrice * 0.2;
    const brand = generateRandomBrand();
    const rating = generateRandomRating();
    const reviews = Math.floor(Math.random() * 900) + 100;
    const img = faker.image.urlLoremFlickr({
      width: 480,
      height: 600,
      category: "abstract",
      randomize: true,
    });

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