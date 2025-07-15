import React, { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

// Paste your default 20 recipes here
const defaultRecipes = [
  {
    id: "1",
    title: "Paneer Butter Masala",
    description:
      "A rich and creamy North Indian curry made with paneer, butter, tomatoes, and aromatic spices.",
    ingredients: [
      "200g paneer",
      "2 tomatoes",
      "1 onion",
      "Butter",
      "Cream",
      "Spices (kasuri methi, garam masala, etc.)",
    ],
    instructions:
      "Sauté onion-tomato paste. Add cream and spices. Add paneer cubes. Simmer and serve.",
    url: "https://media.istockphoto.com/id/1475319205/photo/paneer-lababdar.jpg?s=612x612&w=0&k=20&c=WENiutw7tWPPRlia9oCn7uk5DQjv-mDYKzSTftYNwXU=",
    cookTime: "30 min",
    category: "Dinner",
    difficulty: "Medium",
    rating: 4.7,
    servings: 3,
    author: "Tarla Dalal",
    chef: "Chef Anjali Sharma",
    datePublished: "2021-08-20",
  },
  {
    id: "2",
    title: "Veg Pulao",
    description:
      "A simple one-pot rice dish loaded with colorful vegetables and flavored with whole spices.",
    ingredients: [
      "1 cup basmati rice",
      "Mixed vegetables",
      "Whole spices (cloves, cardamom)",
      "Onion",
      "Ghee or oil",
    ],
    instructions:
      "Fry spices and vegetables. Add rice and water. Cook until done.",
    url: "https://media.istockphoto.com/id/1094359908/photo/chinese-fried-rice-with-chicken.jpg?s=612x612&w=0&k=20&c=k0Ku15KUvAGmIqOwEif3-bP3NSZ9L9ImIIUX68wgo3I=",
    cookTime: "25 min",
    category: "Lunch",
    difficulty: "Easy",
    rating: 4.4,
    servings: 2,
    author: "Nisha Madhulika",
    chef: "Chef Vikas Khanna",
    datePublished: "2023-01-10",
  },
  {
    id: "3",
    title: "Aloo Paratha",
    description:
      "A popular Indian flatbread stuffed with spicy mashed potatoes and pan-fried with ghee.",
    ingredients: [
      "2 cups wheat flour",
      "3 potatoes",
      "Green chilies",
      "Coriander",
      "Spices (amchur, cumin)",
    ],
    instructions:
      "Mash potatoes with spices. Stuff into dough. Roll and cook on tawa with ghee.",
    url: "https://media.istockphoto.com/id/1418692758/photo/north-indian-famous-food-aloo-paratha-with-mango-pickle-and-butter.jpg?s=612x612&w=0&k=20&c=JDbBS-5EcSOKUeossLW2NufdKE0Mg7zFZV5ZBLdbpUE=",
    cookTime: "35 min",
    category: "Breakfast",
    difficulty: "Easy",
    rating: 4.5,
    servings: 3,
    author: "Manali Singh",
    chef: "Chef Ranveer Brar",
    datePublished: "2022-04-18",
  },
  {
    id: "4",
    title: "Masala Dosa",
    description:
      "A crispy South Indian dosa filled with a spicy potato masala, served with chutney and sambar.",
    ingredients: [
      "Dosa batter",
      "Potatoes",
      "Onions",
      "Curry leaves",
      "Mustard seeds",
    ],
    instructions:
      "Make potato filling. Spread dosa on tawa. Add filling, fold and serve with chutney.",
    url: "https://media.istockphoto.com/id/2216057377/photo/crispy-masala-dosa-is-a-popular-south-indian-food-served-with-tomato-chutney-coconut-chutney.jpg?s=612x612&w=0&k=20&c=Se1KulBRt7dPIutF90y0mkBvfUDSWT-OrgCBrlYPNrU=",
    cookTime: "40 min",
    category: "Breakfast",
    difficulty: "Medium",
    rating: 4.6,
    servings: 4,
    author: "Hebbars Kitchen",
    chef: "Chef Saransh Goila",
    datePublished: "2023-06-12",
  },
  {
    id: "5",
    title: "Chole (Chickpea Curry)",
    description:
      "A hearty North Indian curry made with chickpeas and a flavorful blend of spices.",
    ingredients: [
      "1 cup chickpeas",
      "2 onions",
      "2 tomatoes",
      "Ginger-garlic paste",
      "Spices (chole masala, cumin, turmeric)",
    ],
    instructions:
      "Cook chickpeas. Make masala with onions, tomatoes, and spices. Add chickpeas and simmer.",
    url: "https://media.istockphoto.com/id/955392768/photo/traditional-spicy-rice-with-chicken.jpg?s=612x612&w=0&k=20&c=Ev29hMg7GLXuOTtUoPWTSwjrVPwVXFZKFCMSCHq9fH4=",
    cookTime: "45 min",
    category: "Lunch",
    difficulty: "Medium",
    rating: 4.8,
    servings: 4,
    author: "Ranveer Brar",
    chef: "Chef Kunal Kapur",
    datePublished: "2023-02-14",
  },
  {
    id: "6",
    title: "Vegetable Sandwich",
    description:
      "A quick and healthy sandwich packed with fresh vegetables and green chutney.",
    ingredients: [
      "Bread slices",
      "Boiled potatoes",
      "Cucumber",
      "Tomatoes",
      "Green chutney",
      "Butter",
    ],
    instructions:
      "Spread chutney and butter. Layer veggies. Toast or serve plain.",
    url: "https://media.istockphoto.com/id/516957550/photo/sprouts-avocado-tomato-spinach-chickpeas-burger-rye-sandwich.jpg?s=612x612&w=0&k=20&c=aTv5VagLwEb8niNP_DyTsJlrTPnd71IgdTxmTWIXTuE=",
    cookTime: "15 min",
    category: "Snack",
    difficulty: "Easy",
    rating: 4.2,
    servings: 2,
    author: "Richa Gupta",
    chef: "Chef Harpal Singh Sokhi",
    datePublished: "2022-09-05",
  },
  {
    id: "7",
    title: "Chocolate Mug Cake",
    description:
      "A soft and gooey single-serve chocolate cake that cooks in just 2 minutes in a mug.",
    ingredients: [
      "4 tbsp flour",
      "3 tbsp sugar",
      "2 tbsp cocoa powder",
      "3 tbsp milk",
      "2 tbsp oil",
      "Baking powder",
    ],
    instructions: "Mix all in a mug. Microwave for 1-2 minutes. Serve warm.",
    url: "https://media.istockphoto.com/id/2224507852/photo/sweet-puff-pastry-cookies-end-coffee-cup-for-break.jpg?s=612x612&w=0&k=20&c=w2QlYPZBkwz6a_ziB37tKz2J2xXsetubGDm1o0gDpuQ=",
    cookTime: "5 min",
    category: "Dessert",
    difficulty: "Easy",
    rating: 4.3,
    servings: 1,
    author: "Gemma Stafford",
    chef: "Chef Rachel Allen",
    datePublished: "2021-09-30",
  },
  {
    id: "8",
    title: "Rajma Chawal",
    description: "Kidney beans in tomato gravy, served with steamed rice.",
    ingredients: [
      "1 cup rajma",
      "Onions",
      "Tomatoes",
      "Ginger‑garlic paste",
      "Rajma masala",
    ],
    instructions:
      "Soak & cook beans, make masala, combine & simmer. Serve with rice.",
    url: "https://media.istockphoto.com/id/2174376395/photo/traditional-indian-dish-chaawal-rajma-masala-chawal-with-spicy-curry-gravy-and-tomato-slice.jpg?s=612x612&w=0&k=20&c=d1kGFU6NzsYEYv2BqVPFHVzk_2O443hNPxLofBMOas0=",
    cookTime: "60 min",
    category: "Lunch",
    difficulty: "Medium",
    rating: 4.6,
    servings: 3,
    author: "Sanjeev Kapoor",
    chef: "Chef Harpal Singh",
    datePublished: "2022-08-12",
  },
  {
    id: "9",
    title: "Stuffed Capsicum",
    description: "Bell peppers stuffed with spiced potato filling.",
    ingredients: ["4 capsicums", "3 potatoes", "Onion", "Spices", "Oil"],
    instructions: "Prepare potato mix, stuff peppers, bake or pan‑cook.",
    url: "https://media.istockphoto.com/id/1289890443/photo/preparing-stuffed-bell-peppers-with-ground-meat-in-tomato-sauce.jpg?s=612x612&w=0&k=20&c=pJWbG1YYkHGwBFxozTI8oKwK6mG9XDd3ozSp0FGldyg=",
    cookTime: "30 min",
    category: "Dinner",
    difficulty: "Medium",
    rating: 4.3,
    servings: 2,
    author: "Kunal Kapur",
    chef: "Chef Ranveer Brar",
    datePublished: "2023-02-19",
  },
  {
    id: "10",
    title: "Moong Dal Chilla",
    description: "Healthy savory pancakes from ground moong dal.",
    ingredients: [
      "1 cup moong dal",
      "Ginger",
      "Green chilies",
      "Coriander",
      "Spices",
    ],
    instructions: "Soak & grind dal, add spices, cook on tawa like pancakes.",
    url: "https://media.istockphoto.com/id/1465606833/photo/indian-food-moong-dal-chilla-is-ready-to-eat.jpg?s=612x612&w=0&k=20&c=cmJt5uLPAte3JKjAW4qe1-YhtqhlMmD-rGkMO3StKEc=",
    cookTime: "20 min",
    category: "Breakfast",
    difficulty: "Easy",
    rating: 4.5,
    servings: 2,
    author: "Nisha Madhulika",
    chef: "Chef Ruchi Bharani",
    datePublished: "2022-03-11",
  },
  {
    id: "11",
    title: "Matar Paneer",
    description: "Paneer & peas in tomato‑onion gravy.",
    ingredients: ["200 g paneer", "1 cup peas", "Tomatoes", "Onion", "Spices"],
    instructions: "Cook masala, add peas & paneer, simmer.",
    url: "https://media.istockphoto.com/id/1077980738/photo/green-peas-or-matar-paneer-curry-recipe-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=SShuhVPIWBpUaJXqvdWqjPrh0AqsR6VR68GInZlyw6Y=",
    cookTime: "30 min",
    category: "Lunch",
    difficulty: "Medium",
    rating: 4.7,
    servings: 3,
    author: "Tarla Dalal",
    chef: "Chef Ajay Chopra",
    datePublished: "2022-10-04",
  },
  {
    id: "12",
    title: "Poha",
    description:
      "Flattened rice tempered with mustard seeds, onions & turmeric.",
    ingredients: [
      "1 cup poha",
      "Onions",
      "Green chilies",
      "Mustard seeds",
      "Turmeric",
    ],
    instructions: "Rinse poha, sauté tempering, add poha & cook briefly.",
    url: "https://media.istockphoto.com/id/2166057734/photo/sev-khamani.jpg?s=612x612&w=0&k=20&c=nlLvAy7HGbyT-qYuX11obkG0UdPaQJI_gX5Yu-iQuM8=",
    cookTime: "15 min",
    category: "Breakfast",
    difficulty: "Easy",
    rating: 4.2,
    servings: 2,
    author: "Hebbars Kitchen",
    chef: "Chef Shipra Khanna",
    datePublished: "2021-07-23",
  },
  {
    id: "13",
    title: "Dhokla",
    description: "Steamed Gujarati snack made from gram flour batter.",
    ingredients: [
      "1 cup besan",
      "Yogurt",
      "Eno",
      "Mustard seeds",
      "Curry leaves",
    ],
    instructions: "Steam batter 15 min, temper with mustard & curry leaves.",
    url: "https://media.istockphoto.com/id/2154971502/photo/famous-gujrati-snack-dhokla-made-with-gram-flour-and-sugar-syrup-decorated-with-mint-and.jpg?s=612x612&w=0&k=20&c=vrNcAV5VeAMAB_eyOf3YFITADJM4WR4GTi0x2dC_LsM=",
    cookTime: "25 min",
    category: "Snack",
    difficulty: "Medium",
    rating: 4.4,
    servings: 4,
    author: "Chef Harpal Singh",
    chef: "Chef Vicky Ratnani",
    datePublished: "2023-05-10",
  },
  {
    id: "14",
    title: "Seviyan Kheer",
    description: "Vermicelli pudding with milk & dry fruits.",
    ingredients: [
      "1 cup seviyan",
      "Milk",
      "Sugar",
      "Cashews",
      "Raisins",
      "Cardamom",
    ],
    instructions:
      "Roast seviyan, add milk, cook till thick, sweeten, add nuts.",
    url: "https://media.istockphoto.com/id/1310777869/photo/semiya-payasam-a-quick-sweet-treat-with-milk-sugar-vermicelli-and-ghee-garnished-with-ghee.jpg?s=612x612&w=0&k=20&c=MxQQam2adh86cDWS2zRZdJzOBUgECYCoanpIqmCdHoo=",
    cookTime: "30 min",
    category: "Dessert",
    difficulty: "Easy",
    rating: 4.6,
    servings: 4,
    author: "Madhura Recipes",
    chef: "Chef Nita Mehta",
    datePublished: "2021-11-02",
  },
  {
    id: "15",
    title: "Palak Paneer",
    description: "Soft paneer cubes in vibrant spinach gravy.",
    ingredients: [
      "200 g paneer",
      "250 g spinach",
      "Onion",
      "Tomato",
      "Spices",
      "Cream",
    ],
    instructions: "Blanch spinach, purée, cook with masala, add paneer.",
    url: "https://media.istockphoto.com/id/1146291429/photo/palak-paneer-or-spinach-and-cottage-cheese-curry-on-a-dark-background-traditional-indian-food.jpg?s=612x612&w=0&k=20&c=LuY5cNs9p9EonSEqRE8t7xgvCPjLfT2iPYhsg5ZRNkw=",
    cookTime: "30 min",
    category: "Dinner",
    difficulty: "Medium",
    rating: 4.7,
    servings: 3,
    author: "Sanjeev Kapoor",
    chef: "Chef Anahita Dhondy",
    datePublished: "2023-03-22",
  },
  {
    id: "16",
    title: "Idli with Sambar",
    description: "Steamed rice‑lentil cakes served with lentil‑vegetable stew.",
    ingredients: [
      "Idli batter",
      "Toor dal",
      "Mixed vegetables",
      "Tamarind",
      "Sambar powder",
    ],
    instructions: "Steam idlis, cook sambar, serve hot.",
    url: "https://media.istockphoto.com/id/1306083224/photo/idly-or-idli.jpg?s=612x612&w=0&k=20&c=cVpLEs4L3je0_zEFQ38BeZRjBLYQ1YGr9oTIdjhAbTY=",
    cookTime: "45 min",
    category: "Breakfast",
    difficulty: "Medium",
    rating: 4.5,
    servings: 4,
    author: "Hebbars Kitchen",
    chef: "Chef Vikas Seth",
    datePublished: "2022-12-01",
  },
  {
    id: "17",
    title: "Veg Hakka Noodles",
    description: "Stir‑fried noodles with mixed veggies & soy sauce.",
    ingredients: [
      "200 g noodles",
      "Bell pepper",
      "Carrot",
      "Cabbage",
      "Soy sauce",
      "Garlic",
    ],
    instructions: "Boil noodles, stir‑fry veggies, toss with sauces & noodles.",
    url: "https://media.istockphoto.com/id/1086580336/photo/schezwan-veg-noodles-is-a-spicy-and-tasty-stir-fried-flat-hakka-noodles-with-sauce-and.jpg?s=612x612&w=0&k=20&c=qkGYOfQwxLyPRzP4SMKF3KbjrQ_xGTsDaUsD3--2LCE=",
    cookTime: "20 min",
    category: "Snack",
    difficulty: "Easy",
    rating: 4.4,
    servings: 2,
    author: "Nisha Madhulika",
    chef: "Chef Kunal Kapur",
    datePublished: "2023-06-05",
  },
  {
    id: "18",
    title: "Baingan Bharta",
    description:
      "Smoky roasted eggplant mashed with onions, tomatoes & spices.",
    ingredients: [
      "1 large eggplant",
      "Onions",
      "Tomatoes",
      "Garlic",
      "Spices",
      "Coriander",
    ],
    instructions: "Roast eggplant on flame, peel, mash, sauté with masala.",
    url: "https://media.istockphoto.com/id/1336531760/photo/a-fire-roasted-brinjal-dish-with-onions-tomatoes-and-spices-commonly-known-in-indian-as.jpg?s=612x612&w=0&k=20&c=EB1P_UJM3QIWTgk3ztzitfiMu9PcCOzUXm9zu1CRE_o=",
    cookTime: "35 min",
    category: "Dinner",
    difficulty: "Medium",
    rating: 4.3,
    servings: 3,
    author: "Chef Ajay Chopra",
    chef: "Chef Saransh Goila",
    datePublished: "2023-04-14",
  },
  {
    id: "19",
    title: "Cheese Corn Momos",
    description: "Steamed dumplings stuffed with sweet corn & cheese.",
    ingredients: ["Momo wrappers", "Sweet corn", "Cheese", "Onion", "Spices"],
    instructions: "Prepare filling, stuff wrappers, steam 10 min.",
    url: "https://static.wixstatic.com/media/542bbb_0ebee99453784c1da5436e5dfc7d94aa~mv2.jpeg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/542bbb_0ebee99453784c1da5436e5dfc7d94aa~mv2.jpeg",
    cookTime: "30 min",
    category: "Snack",
    difficulty: "Medium",
    rating: 4.4,
    servings: 3,
    author: "Chef Ranveer Brar",
    chef: "Chef Ashish Singh",
    datePublished: "2022-11-18",
  },
  {
    id: "20",
    title: "Gajar Halwa",
    description:
      "Traditional Indian dessert of grated carrots slow‑cooked in milk, sugar & ghee.",
    ingredients: [
      "500 g carrots",
      "Milk",
      "Sugar",
      "Ghee",
      "Cashews",
      "Cardamom",
    ],
    instructions:
      "Cook carrots in milk, add sugar & ghee, simmer till thick, garnish nuts.",
    url: "https://media.istockphoto.com/id/1447192225/photo/homemade-carrot-pudding-gajar-halwa-indian-dessert.jpg?s=612x612&w=0&k=20&c=tvz-7g7B445thtUaLvc4uiwe8NVDJB-kgCBSXx7OW30=",
    cookTime: "45 min",
    category: "Dessert",
    difficulty: "Medium",
    rating: 4.8,
    servings: 4,
    author: "Chef Sanjeev Kapoor",
    chef: "Chef Pankaj Bhadouria",
    datePublished: "2023-01-26",
  },
];

export const RecipeContext = ({ children }) => {
  const [data, setdata] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("recipes"));
      if (Array.isArray(stored) && stored.length > 0) return stored;
    } catch {}

    localStorage.setItem("recipes", JSON.stringify(defaultRecipes));
    return defaultRecipes;
  });

  const [trashData, setTrashData] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("trashData"));
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("trashData", JSON.stringify(trashData));
  }, [trashData]);

  return (
    <recipecontext.Provider value={{ data, setdata, trashData, setTrashData }}>
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
