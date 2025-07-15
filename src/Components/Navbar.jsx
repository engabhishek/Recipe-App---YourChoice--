import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (isActive, isPill = false) =>
    `${isPill ? "bg-slate-900 px-4 py-2 rounded-lg" : ""} 
     ${isActive ? "text-red-400" : "text-white hover:text-red-300"}
     block`;

  return (
    <header className="relative">
      <div className="flex items-center justify-between flex-wrap bg-gradient-to-t from-slate-900 to-slate-800 px-6 py-4 rounded-2xl">
        <span className="text-white font-bold text-xl">YourChoice</span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-white text-3xl leading-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) => linkClass(isActive)}
          >
            Recipes
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => linkClass(isActive)}
          >
            About
          </NavLink>
          <NavLink
            to="/createrecipes"
            className={({ isActive }) => linkClass(isActive, true)}
          >
            CreateRecipes
          </NavLink>
          <NavLink
            to="/trash"
            className={({ isActive }) => linkClass(isActive, true)}
          >
            Trashed
          </NavLink>
          <NavLink
            to="/favRecipes"
            className={({ isActive }) => linkClass(isActive, true)}
          >
            Favorite
          </NavLink>
        </nav>
      </div>

      {/* mobile overlay  */}

      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`absolute left-0 right-0 origin-top mx-4 mt-2 rounded-2xl bg-slate-800 shadow-xl transition-transform duration-300 ${
          isOpen ? "scale-y-100" : "scale-y-0"
        } md:hidden`}
      >
        <div className="divide-y divide-slate-700 p-6">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => linkClass(isActive)}
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => linkClass(isActive)}
          >
            Recipes
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => linkClass(isActive)}
          >
            About
          </NavLink>
          <NavLink
            to="/createrecipes"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => linkClass(isActive, true)}
          >
            CreateRecipes
          </NavLink>
          <NavLink
            to="/trash"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => linkClass(isActive, true)}
          >
            Trashed
          </NavLink>
          <NavLink
            to="/favRecipes"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => linkClass(isActive, true)}
          >
            Favorite
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
