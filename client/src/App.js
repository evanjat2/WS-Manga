import "./App.css";
import {
  Dashboard,
  Landing,
  LoginPage,
  SignUpPage,
  ProfilePage,
  WishlistPage,
  PenjualCreatePage,
  PenjualReadPage,
  PenjualUpdatePage,
  Cart,
  PenjualDeletePage,
  ProductPage,
} from "../src/pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/penjualcreate" element={<PenjualCreatePage />}></Route>
          <Route path="/wishlist" element={<WishlistPage />}></Route>
          <Route path="/penjualread" element={<PenjualReadPage />}></Route>
          <Route path="/penjualupdate" element={<PenjualUpdatePage />}></Route>
          <Route path="/penjualdelete" element={<PenjualDeletePage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/productpage" element={<ProductPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
