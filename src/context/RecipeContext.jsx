import React, { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

export const RecipeContext = ({ children }) => {
  const [data, setdata] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("recipes"));
      if (Array.isArray(stored) && stored.length) return stored;
    } catch {}
    return [];
  });

  const [trashData, setTrashData] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("trashData"));
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("trashData", JSON.stringify(trashData));
  }, [trashData]);

  return (
    <recipecontext.Provider value={{ data, setdata, trashData, setTrashData }}>
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
