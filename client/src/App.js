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
import Member from "./components/MemberRoute";
import FilterSidebar from "./components/FilterSidebar";
import Contact from "./components/Contact";
import UserDetails from "./components/UserDetails";
import SubscrPlan from "./components/SubscrPlan";

// ADMIN COMPONENTS IMPORTS
import ItemForm from "./components/admin/ItemForm";
import Admin from "./components/admin/AdminRoute";
import AdminDashboard from "./components/admin/AdminDashboard";
import ItemList from "./components/admin/ItemList";
import UserList from "./components/admin/UserList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/shop" element={<FilterSidebar />} />
        <Route path="/shop/:id" element={<ItemDetails />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/subscription" element={<SubscrPlan />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Member />}></Route>
        <Route path="/admin/" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="items" element={<ItemList />} />
          <Route path="items/new" element={<ItemForm />} />
          <Route path="items/:id" element={<ItemForm />} />
          <Route path="users" element={<UserList />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
