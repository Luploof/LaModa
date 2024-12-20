const colors = [
  "красный",
  "синий",
  "зелёный",
  "жёлтый",
  "фиолетовый",
  "чёрный",
  "коричневый",
  "тёмно-синий",
  "тёмно-коричневый",
  "серый",
  "белый",
];
const categories = [
  "Одежда",
  "Обувь",
  "Кеды",
  "Кроссовки",
  "Спорт",
  "Штаны",
  "Брюки",
  "Майки",
  "Туфли",
  "Украшения",
];
const products = [
  {
    id: "1",
    name: "Майка",
    description: "Удобная майка для летних дней.",
    category: "Одежда",
    price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
    rating: (Math.random() * 5).toFixed(1),
  },
  {
    id: "2",
    name: "Шорты",
    description: "Комфортные шорты для активного отдыха.",
    category: "Одежда",
    price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
    rating: (Math.random() * 5).toFixed(1),
  },
  {
    id: "3",
    name: "Кроссовки",
    description: "Легкие кроссовки для бега.",
    category: "Обувь",
    price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
    rating: (Math.random() * 5).toFixed(1),
  },
  {
    id: "4",
    name: "Сумка",
    description: "Стильная сумка для повседневного использования.",
    category: "Аксессуары",
    price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
    rating: (Math.random() * 5).toFixed(1),
  },
  {
    id: "5",
    name: "Платье",
    description: "Легкое летнее платье.",
    category: "Одежда",
    price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
    rating: (Math.random() * 5).toFixed(1),
  },
  {
    id: "6",
    name: "Куртка",
    description: "Теплая куртка для холодной погоды.",
    category: "Одежда",
    price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
    rating: (Math.random() * 5).toFixed(1),
  },
  {
    id: "7",
    name: "Часы",
    description: "Модные часы с ремешком из кожи.",
    category: "Аксессуары",
    price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
    rating: (Math.random() * 5).toFixed(1),
  },
  {
    id: "8",
    name: "Шарф",
    description: "Уютный шарф для зимы.",
    category: "Аксессуары",
    price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
    rating: (Math.random() * 5).toFixed(1),
  },
  {
    id: "9",
    name: "Ботинки",
    description: "Удобные ботинки для прогулок.",
    category: "Обувь",
    price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
    rating: (Math.random() * 5).toFixed(1),
  },
  {
    id: "10",
    name: "Рюкзак",
    description: "Практичный рюкзак для путешествий.",
    category: "Аксессуары",
    price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
    rating: (Math.random() * 5).toFixed(1),
  },
  {
    id: "11",
    name: "Футболка",
    description: "Комфортная футболка на каждый день.",
    category: "Одежда",
    price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
    rating: (Math.random() * 5).toFixed(1),
  },
  {
    id: "12",
    name: "Спортивные брюки",
    description: "Удобные брюки для занятий спортом.",
    category: "Одежда",
    price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
    rating: (Math.random() * 5).toFixed(1),
  },
  {
    id: "13",
    name: "Кеды",
    description: "Легкие кеды для летних прогулок.",
    category: "Обувь",
    price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
    rating: (Math.random() * 5).toFixed(1),
  },
  {
    id: "14",
    name: "Перчатки",
    description: "Теплые перчатки для зимы.",
    category: "Аксессуары",
    price: Math.floor(Math.random() * (9999 - 10 + 1)) + 10,
    rating: (Math.random() * 5).toFixed(1),
  },
];

const imageUrls = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image9.jpg",
  "/images/image10.jpg",
  "/images/image11.jpg",
  "/images/image12.jpg",
  "/images/image13.jpg",
  "/images/image14.jpg",
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomCategory() {
  return categories[Math.floor(Math.random() * categories.length)];
}

function assignRandomColorsAndImages(products, imageUrls) {
  return products.map((product) => {
    const randomColor = getRandomColor();
    const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    const randomCategory = getRandomCategory();
    return { ...product, color: randomColor, imageUrl: randomImage, category: randomCategory };
  });
}
const productsWithColorsAndImages = assignRandomColorsAndImages(
  products,
  imageUrls
);

export default productsWithColorsAndImages;
