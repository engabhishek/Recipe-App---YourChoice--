import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../Components/RecipeCard";

const Recipes = () => {
  const { data, setdata } = useContext(recipecontext);

  const renderrecipes = data.map((recipe, index) => (
    <RecipeCard key={recipe.id} recipe={recipe} index = {index} />
  ));

  return <div className="text-white flex flex-col justify-center items-center">{renderrecipes}</div>;
};

export default Recipes;
