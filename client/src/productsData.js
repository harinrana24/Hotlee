const products = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato sauce.",
    longDescription:
      "Savor the heartwarming delight of Butter Chicken, a classic from the heart of Indian cuisine. Tender pieces of chicken marinated in an exquisite blend of yogurt and spices, then cooked to perfection in a rich, creamy tomato sauce infused with butter and a secret blend of aromatic spices. This dish is a tribute to the culinary artistry of India, offering a taste that is both comforting and exotic.",
    price: "$350",
    image: "/mark2.webp",
    // image: "/chciken.jpg",
    nutritionIngredients:
      "Calories: 450 kcal, Protein: 25g, Fat: 30g, Carbohydrates: 10g. Ingredients: Chicken, Tomato sauce, Cream, Butter, Spices.",
  },
  {
    id: 2,
    name: "Palak Paneer",
    description: "Soft paneer cubes in a smooth spinach curry.",
    longDescription:
      "Palak Paneer, a splendid vegetarian dish, pairs the fresh, iron-rich flavor of spinach with the soft, milky texture of paneer. This dish is gently seasoned with a mix of aromatic spices and finished with a dash of cream for a silky-smooth curry that glides over your palate, offering a nutritious yet indulgent experience.",
    price: "$300",
    image: "/mark3.webp",

    // image: "/palak panner.jpg",
    nutritionIngredients:
      "Calories: 350 kcal, Protein: 18g, Fat: 25g, Carbohydrates: 15g. Ingredients: Spinach, Paneer, Cream, Spices.",
  },
  {
    id: 3,
    name: "Chole Bhature",
    description: "Spicy chickpeas curry served with puffed bread.",
    longDescription:
      "Embark on a flavorful journey with Chole Bhature, where spicy chickpeas meet the airy, light texture of freshly fried Bhature. This iconic dish from the Punjabi cuisine repertoire is a festive amalgamation of hearty chickpeas simmered in a vibrant, tangy sauce, perfectly complemented by the fluffy, golden Bhature that are a delight in every bite.",
    price: "$250",
    image: "/mark4.webp",

    // image: "/chiole.jpg",
    nutritionIngredients:
      "Calories: 500 kcal, Protein: 15g, Fat: 22g, Carbohydrates: 65g. Ingredients: Chickpeas, Flour, Spices, Oil.",
  },
  {
    id: 4,
    name: "Biryani",
    description: "Fragrant basmati rice dish with saffron & spices.",
    longDescription:
      "Biryani, the jewel of Indian culinary tradition, is a luxuriant dish where fragrant basmati rice is layered with marinated meat or vegetables, infused with saffron, and a medley of spices. Slow-cooked to perfection, each grain of rice tells a tale of craftsmanship and heritage, making it a feast for the senses.",
    price: "$400",
    image: "/mark5.webp",

    // image: "/bir.jpeg",
    nutritionIngredients:
      "Calories: 600 kcal, Protein: 25g, Fat: 20g, Carbohydrates: 80g. Ingredients: Basmati Rice, Chicken/Lamb, Saffron, Spices.",
  },
  {
    id: 5,
    name: "Masala Dosa",
    description: "Crispy crepes stuffed with spicy potato filling.",
    longDescription:
      "Masala Dosa, a staple of South Indian cuisine, features a crispy, golden crepe made from fermented rice and lentil batter, enveloping a spicy, savory filling of mashed potatoes and onions. This dish is a harmonious blend of textures and flavors, served with a side of coconut chutney and sambar for a complete, satisfying meal.",
    price: "$200",
    image: "/mark6.webp",

    // image: "/masal.jpg",
    nutritionIngredients:
      "Calories: 380 kcal, Protein: 8g, Fat: 11g, Carbohydrates: 60g. Ingredients: Rice Batter, Potatoes, Onions, Spices.",
  },
  {
    id: 6,
    name: "Rogan Josh",
    description: "Slow-cooked lamb curry with Kashmiri spices.",
    longDescription:
      "Rogan Josh, a centerpiece of Kashmiri cuisine, presents tender pieces of lamb slow-cooked to perfection in a gravy bursting with flavors of Kashmiri chilies, saffron, and a unique blend of spices. This dish, steeped in history and tradition, offers a rich, aromatic experience that warms the soul.",
    price: "$450",
    image: "/rog.png",
    nutritionIngredients:
      "Calories: 600 kcal, Protein: 40g, Fat: 35g, Carbohydrates: 20g. Ingredients: Lamb, Yogurt, Onions, Garlic, Spices.",
  },
  {
    id: 7,
    name: "Dal Makhani",
    description: "Creamy stew of lentils and beans.",
    longDescription:
      "Dal Makhani, the quintessential North Indian dish, is a velvety stew of black lentils and kidney beans, slow-cooked with butter, cream, and a harmonious blend of spices. This dish is a testament to the richness of Indian cuisine, offering a hearty, comforting meal that's both nutritious and delicious.",
    price: "$280",
    image: "/mark7.webp",

    // image: "/dal.jpg",
    nutritionIngredients:
      "Calories: 430 kcal, Protein: 18g, Fat: 20g, Carbohydrates: 50g. Ingredients: Lentils, Kidney Beans, Cream, Spices.",
  },
  {
    id: 8,
    name: "Pani Puri",
    description: "Hollow puri filled with a mixture of flavored water.",
    longDescription:
      "Pani Puri, India's beloved street food, is a thrilling bite-sized adventure. Crisp hollow puris are filled with a spicy tamarind water, chickpeas, and potatoes, creating an explosion of flavors and textures in every bite. This dish is a playful, interactive eating experience, celebrated across the country.",
    price: "$150",
    image: "/mark8.webp",

    // image: "/pani.webp",
    nutritionIngredients:
      "Calories: 100 kcal, Protein: 3g, Fat: 1g, Carbohydrates: 20g. Ingredients: Semolina, Tamarind, Chickpeas, Potatoes, Spices.",
  },
  {
    id: 9,
    name: "Soya Chap",
    description:
      "Juicy soya chunks marinated in spicy gravy, grilled to perfection.",
    longDescription:
      "Soya Chap offers a delightful vegetarian alternative, with juicy soya chunks marinated in a rich, spicy gravy, then grilled until golden. This dish is a marvel of textures and flavors, serving as a testament to the versatility and innovation of vegetarian cuisine.",
    price: "$320",
    image: "/mark9.webp",

    // image: "/soya.webp",
    nutritionIngredients:
      "Calories: 550 kcal, Protein: 52g, Fat: 30g, Carbohydrates: 15g. Ingredients: Soya, Yogurt, Spices, Herbs.",
  },
  {
    id: 10,
    name: "Butter Paneer",
    description:
      "Paneer cubes simmered in a creamy tomato sauce with butter and spices.",
    longDescription:
      "Butter Paneer is a luxurious dish that features soft, fresh paneer cubes simmered in a creamy, tomato-based sauce enriched with butter and a medley of aromatic spices. This dish is a vegetarian delight, offering a rich, comforting taste that's hard to resist.",
    price: "$310",
    image: "/mark10.webp",

    // image: "/but panner.webp",
    nutritionIngredients:
      "Calories: 450 kcal, Protein: 25g, Fat: 35g, Carbohydrates: 15g. Ingredients: Paneer, Tomato sauce, Cream, Butter, Spices.",
  },
  {
    id: 11,
    name: "Garlic Naan",
    description:
      "Soft bread infused with garlic butter, cooked in a clay oven.",
    longDescription:
      "Garlic Naan, a soft and fluffy bread with a golden crust, is cooked in a traditional clay oven and brushed with garlic-infused butter. This bread is the perfect accompaniment to any dish, ideal for scooping up rich gravies or enjoyed on its own for its fragrant, buttery goodness.",
    price: "$50",
    image: "/mark11.webp",

    // image: "/nana.jpg",
    nutritionIngredients:
      "Calories: 260 kcal, Protein: 6g, Fat: 9g, Carbohydrates: 40g. Ingredients: Flour, Garlic, Butter, Yogurt, Salt.",
  },
  {
    id: 12,
    name: "Plain Rice",
    description: "Steamed basmati rice, a perfect accompaniment to curries.",
    longDescription:
      "Plain Rice, steamed to fluffy perfection, is a staple of Indian cuisine. Made with aromatic basmati rice, it serves as the perfect canvas for a variety of dishes, from rich, spicy curries to more delicate, flavored gravies. This dish celebrates the simplicity and elegance of Indian cooking.",
    price: "$90",
    image: "/rice.jpg",
    nutritionIngredients:
      "Calories: 200 kcal, Protein: 4g, Fat: 0.5g, Carbohydrates: 45g. Ingredients: Basmati Rice, Water, Salt.",
  },
];

export default products;
