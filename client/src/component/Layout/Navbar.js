import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import wsmanga from "../../assets/images/layout/ws-manga.png";
import { useAppContext } from "../../context/appContext";
const Navbar = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate(`/login`);
    }
  });
  return (
    <div className="z-10 h-[60px] bg-cream fixed w-screen top-0 grid content-center px-[40px] text-inter drop-shadow-lg">
      <div className="flex justify-between">
        <a href="/"><img src={wsmanga} className="h-[30px]"></img></a>
        <div className="flex justify-between gap-8 font-bold text-blue">
          <a href="/sell">
            <p className="hover:text-orange transition duration-150 cursor-pointer">Penjualan</p>
          </a>
          <a href="/profile">
            <p className="hover:text-orange transition duration-150 cursor-pointer">Profil</p>
          </a>
          <a href="/cart">
          <p className="hover:text-orange transition duration-150 cursor-pointer">My Cart</p></a>
          <a href="/">
            <p className="hover:text-orange transition duration-150 cursor-pointer">Home</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
