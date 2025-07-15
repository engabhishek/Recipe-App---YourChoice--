import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipes from "../pages/Recipes";
import CreateRecipes from "../pages/CreateRecipes";
import SingleRecipe from "../pages/SingleRecipe";
import TreshRecipes from "../pages/TreshRecipes";
import FavRecipes from "../pages/FavRecipes";
import PageNotFound from "../pages/pageNotFound";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/createrecipes" element={<CreateRecipes />} />
      <Route path="/recipe/details/:id" element={<SingleRecipe />} />
      <Route path="/trash" element={<TreshRecipes />} />
      <Route path="/favRecipes" element={<FavRecipes />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Mainroutes;
