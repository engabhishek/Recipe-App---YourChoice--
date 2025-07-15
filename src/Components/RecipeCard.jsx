import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";

const RecipeCard = (props) => {
  const { data, setdata } = useContext(recipecontext);
  const recipe = props.recipe;
  const index = props.index;


  return (
    <div className="w-[80%] h-auto border my-10 p-8 hover:scale-105">
      <div className="flex w-full justify-between text-end">
        <h1 className="text-xl text-gray-200 ">{index + 1}.</h1>
      </div>
      <Link to={`/recipe/details/${recipe.id}`}>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[55%] flex flex-col items-center">
            <img
              className="w-[300px] rounded-[50%] p-8"
              src={recipe.url}
              alt={recipe.title}
            />
            <h1 className="text-2xl text-yellow-50 border-b p-4 ">
              {recipe.title}
            </h1>
          </div>
          <div className="w-full md:w-[45%] flex flex-col justify-center">
            <h2 className="text-xl text-blue-300 my-8 ">Ingredents:</h2>
            <ul className="list-disc list-inside text-gray-400 px-4">
              {(Array.isArray(recipe.ingredients)
                ? recipe.ingredients
                : typeof recipe.ingredients === "string"
                ? recipe.ingredients.split(",").map((i) => i.trim())
                : []
              ).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full h-auto my-8 md:m-8">
          <h2 className="text-xl text-blue-300">Instructions:</h2>
          <p>{recipe.instructions}</p>
        </div>
        <div className="text-end mt-8 text-amber-400">
          <h2>
            <span className="text-blue-400">Chef name :</span> {recipe.chef}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
