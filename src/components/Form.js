import React, { useContext, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {
  const [search, setSearch] = useState({
    name: "",
    category: ""
  });
  const { categories } = useContext(CategoryContext);
  const { setSearchRecipes, setQuery } = useContext(RecipesContext);

  const getDataRecipe = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={e => {
        e.preventDefault();
        setSearchRecipes(search);
        setQuery(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Search drinks</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Search by ingrdient"
            onChange={e => getDataRecipe(e)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            onChange={e => getDataRecipe(e)}
          >
            <option value="">--Select Category--</option>
            {categories.map(category => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
