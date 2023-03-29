import "./App.css";
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
import ItemForm from "./components/ItemForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/shop" element={<ItemCards />} />
        <Route path="/shop/:id" element={<ItemDetails />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        // ADMIN ROUTES
        {/* <Route path="/admin/items" element={<ItemList />} /> */}
        <Route path="/admin/items/new" element={<ItemForm />} />
        <Route path="/admin/items/:id" element={<ItemForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
