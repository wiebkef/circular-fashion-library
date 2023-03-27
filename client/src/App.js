import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Start from "./components/Start";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ItemDetails from "./components/ItemDetails";
import Footer from "./components/Footer";
import ItemCards from "./components/ItemCards";
import UserDetails from "./components/UserDetails";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/shop" element={<ItemCards />} />
        <Route path="/shop/:id" element={<ItemDetails />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route
          path="/login"
          element={<LoginForm setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<SignUpForm setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
