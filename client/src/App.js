import "./App.css";
import Navbar from "./components/Navbar";
import Start from "./components/Start";

import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ItemDetails from "./components/ItemDetails";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ItemCards from "./components/ItemCards";
import UserDetails from "./components/UserDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/shop" element={<ItemCards />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop/:id" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
