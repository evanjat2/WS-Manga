import { useEffect } from "react";

import { Navbar } from "../component/Layout";
import Cover from "../component/Landing/Cover";
import DaftarPenjualan from "../component/Landing/DaftarPenjualan";
import DaftarWishlist from "../component/Landing/DaftarWishlist";
const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[60px] bg-cream w-screen">
        <Cover />
        <DaftarPenjualan />
        <DaftarWishlist />
      </div>
    </>
  );
};
export default Landing;
