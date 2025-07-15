import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-auto flex flex-col text-white px-6 py-16 my-8 bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen  items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-orange-600 mb-6">
          Welcome to YourChoice 😋
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed font-mono">
          Discover, create, and manage your favorite vegetarian recipes all in
          one place. Whether you're planning meals for the week or experimenting
          with something new, YourChoice helps you stay organized and inspired
          in the kitchen.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            to="/recipes"
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            View Recipes
          </Link>
          <Link
            to="/createrecipes"
            className="border border-orange-500 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
          >
            Add New Recipe
          </Link>
        </div>

        <div className=" grid md:grid-cols-3 gap-8 text-left mt-16">
          <div className="bg-gradient-to-b from bg-black p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              🧑‍🍳 Easy to Use
            </h3>
            <p className="text-gray-600">
              Simple and clean interface to create, view, and manage your
              recipes without distractions.
            </p>
          </div>

          <div className="bg-gradient-to-t from bg-black p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              📁 Organize Smartly
            </h3>
            <p className="text-gray-600">
              Favorite, delete, or restore recipes anytime — stay in control of
              your culinary creativity.
            </p>
          </div>

          <div className="bg-gradient-to-b from bg-black p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              🔒 Data Saved
            </h3>
            <p className="text-gray-600">
              Your recipes are safely stored in localStorage so they stay with
              you — even after refreshing.
            </p>
          </div>
        </div>

        <footer className="mt-16 text-center text-sm text-gray-400 bg-gradient-to-b from-slate-900 to-slate-950 p-4">
          © {new Date().getFullYear()} YourChoice by{" "}
          <span className="text-amber-400 text-lg px-1"> Abhishek Sharma</span>
        </footer>
      </div>
    </div>
  );
};

export default Home;
