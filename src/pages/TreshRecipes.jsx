import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import RecipeCard from "../Components/RecipeCard";

const TreshRecipes = () => {
  const { data, setdata, trashData, setTrashData } = useContext(recipecontext);

  const restoreRecipe = (id) => {
    const recipeToRestore = trashData.find((item) => item.id === id);
    if (!recipeToRestore) return;

    setdata([...data, recipeToRestore]);
    setTrashData(trashData.filter((item) => item.id !== id));
    toast.success("Recipe restored");
  };

  const deleteForever = (id) => {
    setTrashData(trashData.filter((item) => item.id !== id));
    toast.error("Recipe permanently deleted");
  };
  const AllClearTrashData = ()=>{
    setTrashData([])
    toast.success("All Clear")
  }

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold mb-4">Trashed Recipes</h1>
        <button
          onClick={AllClearTrashData}
          className="border  rounded px-3 mr-2 text-green-400"
        >
          All Clear Trash
        </button>
      </div>
      {trashData.length === 0 ? (
        <p>No recipes in trash.</p>
      ) : (
        trashData.map((recipe, index) => (
          <div
            key={recipe.id}
            className="w-[80%] h-auto border my-10 p-8 hover:scale-105 flex flex-col items-center justify-center"
          >
            <div className="w-full flex  justify-between text-end">
              <h1 className="text-xl text-gray-200 ">{index + 1}.</h1>
              <div className="flex flex-col md:flex-row gap-3">
                <button
                  onClick={() => restoreRecipe(recipe.id)}
                  className=" border rounded px-4 text-green-400"
                >
                  <span className="text-[10px] md:text-[15px]">🔄 Restore</span>
                </button>
                <button
                  onClick={() => deleteForever(recipe.id)}
                  className=" border rounded px-4 text-red-400"
                >
                  <span className="text-[10px] md:text-[15px]">❌ Delete</span>
                </button>
              </div>
            </div>
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
                <h2 className="text-xl text-blue-300 my-8 ">Ingredients:</h2>
                <ul className="list-disc list-inside text-gray-400 px-4">
                  {(Array.isArray(recipe.ingredients)
                    ? recipe.ingredients
                    : typeof recipe.ingredients === "string"
                    ? recipe.ingredients.split(",").map((i) => i.trim())
                    : []
                  ).map((item, i) => (
                    <li key={i}>{item}</li>
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
          </div>
        ))
      )}
    </div>
  );
};

export default TreshRecipes;
