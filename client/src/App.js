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
} from "../src/pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
