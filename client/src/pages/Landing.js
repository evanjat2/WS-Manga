import { useEffect } from "react";

import { Navbar } from "../component/Layout";
import Cover from "../component/Landing/Cover";
import DaftarPenjualan from "../component/Landing/DaftarPenjualan";
const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[60px] bg-cream w-screen">
        <Cover />
        <DaftarPenjualan />
      </div>
    </>
  );
};
export default Landing;
