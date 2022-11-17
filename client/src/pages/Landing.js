import { useEffect } from "react";
import { Navbar } from "../component/Layout";
import Cover from "../component/Landing/Cover";
const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[60px]"><Cover/></div>
    </>
  );
};
export default Landing;
