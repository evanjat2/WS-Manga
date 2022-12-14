import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import {
  Landing,
  LoginPage,
  SignUpPage,
  ProfilePage,
  WishlistDashboardPage,
  WishCreatePage,
  WishUpdatePage,
  WishReadPage,
  WishDeletePage,
  CartPage,
  ForgotPage,
  SellDashboardPage,
  SellCreatePage,
  SellUpdatePage,
  SellReadPage,
  SellDeletePage,
  NotFoundPage
} from "../src/pages";
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

          <Route path="/wishlist" element={<WishlistDashboardPage />}></Route>
          <Route path="/wishlist/create" element={<WishCreatePage />}></Route>
          <Route path="/wishlist/update" element={<WishUpdatePage />}></Route>
          <Route path="/wishlist/read" element={<WishReadPage />}></Route>
          <Route path="/wishlist/delete" element={<WishDeletePage />}></Route>

          <Route path="/sell" element={<SellDashboardPage />}></Route>
          <Route path="/sell/create" element={<SellCreatePage />}></Route>
          <Route path="/sell/update" element={<SellUpdatePage />}></Route>
          <Route path="/sell/read" element={<SellReadPage />}></Route>
          <Route path="/sell/delete" element={<SellDeletePage />}></Route>

          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/soldbook" element={<SoldBookPage />}></Route>
          <Route path="/forgot" element={<ForgotPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
