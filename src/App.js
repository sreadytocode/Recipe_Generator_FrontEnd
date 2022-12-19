import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import About from "./components/navigation/pages/About";
import Contact from "./components/navigation/pages/Contact";
import GlutenFree from "./components/navigation/pages/GlutenFree";
import Home from "./components/navigation/pages/Home";
import Keto from "./components/navigation/pages/Keto";
import Login from "./components/navigation/pages/Login";
import Vegetarian from "./components/navigation/pages/Vegetarian";
import Vegan from "./components/navigation/pages/Vegan";

//exact matche the excat path of the url

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gluten-free" element={<GlutenFree />} />
        <Route path="/keto" element={<Keto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vegetarian" element={<Vegetarian />} />
        <Route path="/vegan" element={<Vegan />} />
      </Routes>
    </Router>
  );
}

export default App;
