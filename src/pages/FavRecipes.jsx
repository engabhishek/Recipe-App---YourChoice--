import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../Components/RecipeCard";

const FavRecipes = () => {
  const favroite = JSON.parse(localStorage.getItem("fav")) || [];

  const renderrecipes = favroite.map((recipe, index) => (
    <RecipeCard key={recipe.id} recipe={recipe} index={index} />
  ));

  return (
    <div className="text-white flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold mb-4">Favourite Recipes</h1>
      {favroite.length > 0 ? renderrecipes : <p>No recipes in trash.</p>}
    </div>
  );
};

export default FavRecipes;
