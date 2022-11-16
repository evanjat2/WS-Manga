import "./App.css";
import {
  Dashboard,
  Landing,
  LoginPage,
  SignUpPage,
  ProfilePage,
  WishlistPage,
} from "../src/pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PenjualCreate from "./pages/PenjualCreatePage";


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
          <Route path="/PenjualCreate" element={<PenjualCreate />}></Route>


          <Route path="/wishlist" element={<WishlistPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
