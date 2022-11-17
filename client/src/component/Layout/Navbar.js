import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import wsmanga from "../../assets/images/layout/ws-manga.png";
import { useAppContext } from "../../context/appContext";
const Navbar = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      setTimeout(() => {
        navigate(`/login`);
      }, 3000);
    }
  });
  return (
    <div className="z-10 h-[60px] bg-cream fixed w-screen top-0 grid content-center px-[40px] text-inter drop-shadow-lg">
      <div className="flex justify-between">
        <img src={wsmanga} className="h-[30px]"></img>
        <div className="flex justify-between gap-8 font-bold text-blue">
          <a href="/wishlist">
            <p className="hover:text-orange cursor-pointer">Wishlist</p>
          </a>
          <p className="hover:text-orange cursor-pointer">My Cart</p>
          <p className="hover:text-orange cursor-pointer">Home</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
