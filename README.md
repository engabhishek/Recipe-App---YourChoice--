# 🍽️ YourChoice - Recipe Manager App

Welcome to **YourChoice**, a modern and responsive recipe manager built with **React**, **Tailwind CSS**, and **React Router**. This app helps users create, manage, favorite, and trash vegetarian recipes easily — all stored locally with beautiful UI transitions.

---

## 🚀 Features

- ✅ Add, edit, and delete custom recipes
- 🧾 View full recipe details including ingredients and instructions
- ❤️ Mark recipes as favorite
- 🗑️ Trash recipes and restore them anytime
- 🔎 Filter and browse recipes easily
- 💾 LocalStorage integration (data persists even after refresh)
- 📱 Fully responsive (mobile, tablet, desktop)

---

## 📸 Screenshots

> Add screenshots or demo GIFs here

---

## 🛠️ Tech Stack

| Tech          | Usage                        |
|---------------|------------------------------|
| React         | Frontend UI                  |
| React Router  | Page navigation              |
| Tailwind CSS  | Styling                      |
| React Toastify| Notification system          |
| LocalStorage  | Persistent client-side data  |

---

## 📂 Folder Structure

yourchoice-recipe-app/
├── public/
│   └── index.html
│
├── src/
│   ├── assets/               # Images, icons, and static assets
│   │   └── logo.png
│
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── RecipeCard.jsx
│   │   └── Footer.jsx
│
│   ├── context/              # Global context for recipe state
│   │   └── RecipeContext.jsx
│
│   ├── pages/                # Route pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Recipes.jsx
│   │   ├── CreateRecipes.jsx
│   │   ├── SingleRecipe.jsx
│   │   ├── FavRecipes.jsx
│   │   ├── TreshRecipes.jsx
│   │   └── PageNotFound.jsx
│
│   ├── routes/               # Route configuration
│   │   └── MainRoutes.jsx
│
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React app entry point
│   └── index.css             # Tailwind and global styles
│
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md



