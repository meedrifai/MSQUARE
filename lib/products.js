export const products = [
  // Product 1: Empty Hoodie
  {
    id: 1,
    name: { fr: "Empty Hoodie", ar: "هودي بريميوم" },
    price: 149,
    image: "/images/Products/black_hodie_back.jpg", // default black
    imageWhite: "/images/Products/white_hodie_back.png", // default white
    designs: [],
  },

  // Product 2: Hoodie Oversize
  {
    id: 2,
    name: { fr: "Hoodie Oversize", ar: "هودي بريميوم" },
    price: 299,
    image: "/images/Products/black_hodie_back.jpg", // default black
    imageWhite: "/images/Products/white_hodie_back.png", // default white
    designs: [
      {
        id: 1,
        name: "NASA1",
        preview: "/images/designs/NASA1.jpg",
        imageBlack: "/images/Products/black_hoodie_NASA1.jpg",
        imageWhite: "/images/Products/white_hoodie_NASA1.jpg",
      },
      {
        id: 2,
        name: "Palestine1",
        preview: "/images/designs/palestine1.jpg",
        imageBlack: "/images/Products/black_hoodie_palestine1.jpg",
        imageWhite: "/images/Products/white_hoodie_palestine1.jpg",
      },
      {
        id: 3,
        name: "BMW",
        preview: "/images/designs/bmw.jpg",
        imageBlack: "/images/Products/black_hoodie_bmw.jpg",
        imageWhite: "/images/Products/white_hoodie_bmw.jpg",
      },
    ],
  },

  // Product 3: Hoodie Oversize (another)
  {
    id: 3,
    name: { fr: "Hoodie Oversize", ar: "هودي أوفرسايز" },
    price: 349,
    image: "/images/Products/black_hodie_back.jpg",
    imageWhite: "/images/Products/white_hodie_back.png",
    designs: [
      {
        id: 1,
        name: "NASA1",
        preview: "/images/designs/NASA1.jpg",
        imageBlack: "/images/Products/black_hoodie_NASA1.jpg",
        imageWhite: "/images/Products/white_hoodie_NASA1.jpg",
      },
      {
        id: 2,
        name: "Charger_Car",
        preview: "/images/designs/charger_car.jpg",
        imageBlack: "/images/Products/black_hoodie_charger.jpg",
        imageWhite: "/images/Products/white_hoodie_charger.jpg",
      },
      {
        id: 3,
        name: "One_Peace",
        preview: "/images/designs/one_peace.jpg",
        imageBlack: "/images/Products/black_hoodie_onepeace.jpg",
        imageWhite: "/images/Products/white_hoodie_onepeace.jpg",
      },
    ],
  },

  // Product 4: T-Shirt Premium
  {
    id: 4,
    name: { fr: "T-Shirt Premium", ar: "تي شيرت بريميوم" },
    price: 179,
    image: "/images/Products/black_hodie_back.jpg",
    imageWhite: "/images/Products/white_hodie_back.png",
    designs: [
      {
        id: 1,
        name: "NASA1",
        preview: "/images/designs/NASA1.jpg",
        imageBlack: "/images/Products/black_hoodie_NASA1.jpg",
        imageWhite: "/images/Products/white_hoodie_NASA1.jpg",
      },
      {
        id: 2,
        name: "Charger_Car",
        preview: "/images/designs/charger_car.jpg",
        imageBlack: "/images/Products/black_hoodie_charger.jpg",
        imageWhite: "/images/Products/white_hoodie_charger.jpg",
      },
      {
        id: 3,
        name: "One_Peace",
        preview: "/images/designs/one_peace.jpg",
        imageBlack: "/images/Products/black_hoodie_onepeace.jpg",
        imageWhite: "/images/Products/white_hoodie_onepeace.jpg",
      },
    ],
  },
];
