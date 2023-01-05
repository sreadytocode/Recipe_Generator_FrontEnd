import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navigation/pages/dropdown/Navbar";
import About from "../components/navigation/pages/About";
import Contact from "../components/navigation/pages/Contact";
import GlutenFree from "../components/recipes/dietary/GlutenFree";
import None from "../components/recipes/dietary/None";
import Home from "../components/navigation/pages/Home";
import Keto from "../components/recipes/dietary/Keto";
import Vegetarian from "../components/recipes/dietary/Vegetarian";
import Vegan from "../components/recipes/dietary/Vegan";
import RecipePage from "../components/navigation/pages/RecipePage";

import Footer from "./Footer";
import French from "../components/recipes/cuisines/French";
import Pakistani from "../components/recipes/cuisines/Pakistani";
import Japanese from "../components/recipes/cuisines/Japanese";
import American from "../components/recipes/cuisines/American";
import { Profile, FavouriteRecipes, Welcome } from "../components/login/loginComponents";
import { ShoppingList, Calendar, Pantry } from "../components/login/loginpages";

const MainContainer = () => {
  // const [recipes, setRecipes] = useState(recipesData);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/recipes")
      .then((res) => res.json())
      .then((recipeData) => setRecipes(recipeData));
  }, []);

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/ingredients")
      .then((res) => res.json())
      .then((ingredientsData) => setIngredients(ingredientsData));
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <main className="border-solid border-red min-h-screen">
          <Routes>
            <Route path="/" exact element={<Home recipes={recipes} />} />
            <Route
              path="/recipe/:id"
              element={
                <RecipePage recipes={recipes} ingredients={ingredients} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Welcome />} />
            <Route path="gluten-free" exact element={<GlutenFree />} />
            <Route path="keto" exact element={<Keto />} />
            <Route path="vegetarian" exact element={<Vegetarian />} />
            <Route path="vegan" exact element={<Vegan />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shopping list" element={<ShoppingList />} />
            <Route path="/meal planner" element={<Calendar />} />
            <Route path="/favourite recipes" element={<FavouriteRecipes />} />
            <Route path="/pantry" element={<Pantry />} />
            <Route path="/French" element={<French/>}/>
            <Route path="/Pakistani" element={<Pakistani/>}/>
            <Route path="/Japanese" element={<Japanese/>}/>
            <Route path="/American" element={<American/>}/>
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
};

export default MainContainer;
