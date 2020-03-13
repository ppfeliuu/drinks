import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesProvider = props => {
  const [recipes, setRecipes] = useState([]);
  const [searchRecipes, setSearchRecipes] = useState({
    name: "",
    category: ""
  });

  const [query, setQuery] = useState(false);

  useEffect(() => {
    if (query) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchRecipes.name}&c=${searchRecipes.category}`;

        const res = await axios.get(url);

        setRecipes(res.data.drinks);
      };

      getRecipes();
    }
  }, [searchRecipes]);

  return (
    <RecipesContext.Provider value={{ recipes, setSearchRecipes, setQuery }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
