import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateRecipes = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const SumbitHandeler = (newRecipe) => {
    newRecipe.id = nanoid();

    const copydata = [...data];
    copydata.push(newRecipe);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    // setdata([...data, newRecipe]);

    toast.success("recipe added scussfully..");

    reset();

    navigate("/recipes");
  };

  return (
    <form
      onSubmit={handleSubmit(SumbitHandeler)}
      className="flex flex-col items-center gap-8 my-10"
    >
      <div className="w-full flex flex-col md:flex-row justify-between md:items-center mt-10">
        <div className="">
          <input
            className="font-mono bg-transparent border-b outline-none block p-2"
            {...register("title", {
              // required: "* Enter the title",
            })}
            type="text"
            placeholder="Recipe Title"
          />
          {/* <small className="text-red-400">{errors?.title?.message}</small> */}
        </div>
        <div className="">
          <input
            className="font-mono bg-transparent border-b outline-none block p-2"
            {...register("url")}
            type="url"
            placeholder="Enter url URL...."
          />
        </div>
      </div>
      <textarea
        className="w-full h-[100px] font-mono bg-transparent border outline-none block px-4 py-2"
        {...register("description")}
        placeholder="enter the recipe description here...."
      ></textarea>

      <textarea
        className="w-full h-[100px] font-mono bg-transparent border outline-none block px-4 py-2"
        {...register("ingredients")}
        placeholder="Write ingredients seprated by commas (')...."
      ></textarea>
      <textarea
        className="w-full h-[100px] font-mono bg-transparent border outline-none block px-4 py-2"
        {...register("instructions")}
        placeholder="Write instructions how to make it...."
      ></textarea>
      <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
        <select
          className="w-1/2 text-white bg-slate-800 h-auto font-mono rounded-md outline-none border-b block px-4 py-2"
          {...register("categries")}
        >
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
          className="font-mono bg-transparent border-b outline-none block p-2 my-6 "
          {...register("chef", {
            required: "enter chef name",
          })}
          type="text"
          placeholder="Enter Chef Name...."
        />
      </div>
      <div className="w-full flex flex-col md:flex-row md:justify-between ">
        <input
          className="w-[25%] font-mono bg-transparent border-b outline-none block p-2 my-6 "
          {...register("cookTime", {
            required: "Cook Time in minute",
          })}
          type="text"
          placeholder="Cook Time...."
        />
        <input
          className="w-[25%] font-mono bg-transparent border-b outline-none block p-2 my-6 "
          {...register("rating", {
            required: "Rating..",
          })}
          type="text"
          placeholder="Rating.."
        />
      </div>
      <button className=" bg-blue-400 rounded py-2 px-8 mb-8 block">
        Add Recipe
      </button>
    </form>
  );
};

export default CreateRecipes;
