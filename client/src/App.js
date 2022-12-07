import "./App.css";
import {
  Landing,
  LoginPage,
  SignUpPage,
  ProfilePage,
  WishlistPage,
  Cart,
  ForgotPage,
  SellDashboardPage,
  SellCreatePage,
  SellUpdatePage,
  SellReadPage,
  SellDeletePage,
} from "../src/pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import SoldBookPage from "./pages/SoldBookPage";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/wishlist" element={<WishlistPage />}></Route>

          <Route path="/sell" element={<SellDashboardPage />}></Route>
          <Route path="/sell/create" element={<SellCreatePage />}></Route>
          <Route path="/sell/update" element={<SellUpdatePage />}></Route>
          <Route path="/sell/read" element={<SellReadPage />}></Route>
          <Route path="/sell/delete" element={<SellDeletePage />}></Route>

          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/soldbook" element={<SoldBookPage />}></Route>
          <Route path="/forgot" element={<ForgotPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
