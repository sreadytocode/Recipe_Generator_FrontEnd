import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import About from "../components/navigation/pages/About";
import Contact from "../components/navigation/pages/Contact";
import GlutenFree from "../components/navigation/pages/GlutenFree";
import Home from "../components/navigation/pages/Home";
import Keto from "../components/navigation/pages/Keto";
import Login from "../components/navigation/pages/Login";
import Vegetarian from "../components/navigation/pages/Vegetarian";
import Vegan from "../components/navigation/pages/Vegan";
import Cuisine from "../components/navigation/pages/Cuisine";
import recipesData from "../dummyData/RecipesData";
import SearchBarTest from "../components/SearchTest/SearchBarTest";

const MainContainer = () => {
  //Store dummy data in state
  const [recipes, setRecipes] = useState(recipesData);

  return (
    <Router>
      <Navbar />
      <SearchBarTest />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="gluten-free" exact element={<GlutenFree />} />
        <Route path="keto" exact element={<Keto />} />
        <Route path="vegetarian" exact element={<Vegetarian />} />
        <Route path="vegan" exact element={<Vegan />} />
      </Routes>
    </Router>
  );
};

export default MainContainer;
