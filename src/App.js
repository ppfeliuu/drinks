import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CategoryProvider from "./context/CategoryContext";
import RecipesProvider from "./context/RecipesContext";
import ListRecipes from "./components/ListRecipes";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoryProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>

            <ListRecipes />
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoryProvider>
  );
}

export default App;
