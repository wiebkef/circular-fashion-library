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
import Items from "./components/Items";
import UserDetails from "./components/UserDetails";
import ItemForm from "./components/ItemForm";
import Admin from "./components/AdminRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/shop" element={<Items />} />
        <Route path="/shop/:id" element={<ItemDetails />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/" element={<Admin />}>
          {/* <Route path="/admin/items" element={<ItemList />} /> */}
          <Route path="items/new" element={<ItemForm />} />
          <Route path="items/:id" element={<ItemForm />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
