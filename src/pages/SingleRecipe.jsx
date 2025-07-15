import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata, trashData, setTrashData } = useContext(recipecontext);
  // const { Trash, setTrash } = useContext(recipecontext);

  const navigate = useNavigate();
  const parms = useParams();

  const recipe = data.find((recipe) => parms.id == recipe.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: recipe?.title,
      url: recipe?.url,
      chef: recipe?.chef,
      category: recipe?.category,
      ingredients: recipe?.ingredients,
    },
  });

  const SumbitHandeler = (formData) => {
    const index = data.findIndex((r) => parms.id == r.id);
    const copydata = [...data];

    const updatedRecipe = {
      ...copydata[index],
      ...formData,
      ingredients: Array.isArray(formData.ingredients)
        ? formData.ingredients.map((item) => item.trim())
        : typeof formData.ingredients === "string"
        ? formData.ingredients.split(",").map((item) => item.trim())
        : [],
    };

    copydata[index] = updatedRecipe;
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe updated successfully");
  };

  const deletRecipe = (id) => {
    const recipeToDelete = data.find((item) => item.id === id);
    if (!recipeToDelete) return;
    setTrashData([...trashData, recipeToDelete]);
    const updatedData = data.filter((item) => item.id !== id);
    setdata(updatedData);
    toast.error("recipe move to  trash ....");
    navigate("/recipes");
  };

  const [favroite, setfavroite] = useState(() => {
    try {
      const storedFav = JSON.parse(localStorage.getItem("fav"));
      return Array.isArray(storedFav) ? storedFav : [];
    } catch (e) {
      return [];
    }
  });

  const FavHandeler = () => {
    let copyfav = [...favroite];
    copyfav.push(recipe);
    setfavroite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  const unFavHandeler = () => {
    const filterfav = favroite.filter((f) => f.id != recipe.id);
    setfavroite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return recipe ? (
    <div className="border-t mt-8 p-4 md:p-8">
      <div className="w-full flex justify-between items-center">
        {Array.isArray(favroite) && favroite.find((f) => f.id == recipe?.id) ? (
          <button
            onClick={unFavHandeler}
            className="bg-red-500 hover:bg-red-600 text-white rounded py-1 px-2 md:py-2 md:px-3 text-[9px] md:text-sm font-bold active:scale-90 "
          >
            Remove from favroite
          </button>
        ) : (
          <button
            onClick={FavHandeler}
            className="bg-transparent border-2 border-red-600 text-white rounded py-1 px-2 md:py-2 md:px-3 text-[9px] md:text-sm font-bold active:scale-90 "
          >
            Add to favroite
          </button>
        )}

        <h2 className="text-red-500 font-mono font-bold text-[9px] sm:text-base md:text-sm">
          <span className="text-blue-400">Chef name :</span> {recipe.chef}
        </h2>
      </div>

      <div className="flex flex-col items-center text-white mt-4">
        <img
          className="w-full max-w-md h-auto object-cover rounded-md shadow-lg"
          src={recipe.url ? recipe.url : null}
          alt=""
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono text-amber-400 mt-8 border-b pb-2 text-center">
          {recipe?.title}
        </h1>
      </div>

      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto flex flex-col justify-center mt-8">
        <h2 className="text-lg sm:text-xl text-blue-300 mb-4">Ingredients:</h2>
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

      <div className="w-full mt-8">
        <h2 className="text-lg sm:text-xl text-blue-300 mb-2">Instructions:</h2>
        <p className="text-gray-300 leading-relaxed">{recipe.instructions}</p>
      </div>

      {/* Cook Time & Rating */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
        <p className="text-red-300 font-mono">
          <span className="text-xl text-gray-500">Cook Time : </span>
          {recipe.cookTime}
        </p>
        <div>
          <p className="text-red-300 font-mono">
            <span className="text-xl text-gray-500">Rating : </span>
            {recipe.rating}
          </p>
          <p>⭐⭐⭐⭐</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(SumbitHandeler)}
        className="flex flex-col gap-6 mt-10"
      >
        <div className="flex flex-col md:flex-row gap-4 px-2 md:px-8">
          <input
            className="flex-1 font-mono bg-transparent border-b outline-none p-2"
            {...register("title")}
            type="text"
            placeholder="Recipe Title"
          />
          <input
            className="flex-1 font-mono bg-transparent border-b outline-none p-2"
            {...register("url")}
            type="url"
            placeholder="Enter Image URL..."
          />
        </div>

        <textarea
          className="w-full h-[100px] font-mono bg-transparent border outline-none px-4 py-2"
          {...register("description")}
          placeholder="Enter the recipe description here..."
        ></textarea>

        <textarea
          className="w-full h-[100px] font-mono bg-transparent border outline-none px-4 py-2"
          {...register("ingredients")}
          placeholder="Write ingredients separated by commas (',')..."
        ></textarea>

        <textarea
          className="w-full h-[100px] font-mono bg-transparent border outline-none px-4 py-2"
          {...register("instructions")}
          placeholder="Write instructions on how to make it..."
        ></textarea>

        <div className="flex flex-col md:flex-row gap-4 px-2 md:px-8">
          <select
            className="flex-1 text-white bg-slate-800 font-mono rounded-md outline-none border-b px-4 py-2"
            {...register("category")}
          >
            <option value={recipe.category}>{recipe.category} recipes</option>
            <option value="Breakfast">Breakfast recipes</option>
            <option value="Lunch">Lunch recipes</option>
            <option value="Dinner">Dinner recipes</option>
            <option value="Appetizer">Appetizer recipes</option>
            <option value="Salad">Salad recipes</option>
            <option value="Main-course">Main-course recipes</option>
            <option value="Side-dish">Side-dish recipes</option>
            <option value="Baked-goods">Baked-goods recipes</option>
          </select>
          <input
            className="flex-1 font-mono bg-transparent border-b outline-none p-2"
            {...register("chef", {
              required: "Enter chef name",
            })}
            type="text"
            placeholder="Enter Chef Name..."
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-6 mx-auto">
          Update Recipe
        </button>
      </form>

      <button
        onClick={() => {
          deletRecipe(recipe.id);
        }}
        className="bg-red-500 hover:bg-red-600 text-white rounded py-2 px-6 mx-auto block mt-4"
      >
        Delete Recipe
      </button>
    </div>
  ) : (
    "Loading...."
  );
};

export default SingleRecipe;
