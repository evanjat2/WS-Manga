import { Navbar } from "../component/Layout";
import Wishlist from "../component/Wishlist";
const WishlistPage = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[200vh] mt-[60px] px-[40px]">
        <Wishlist/>
      </div>
    </div>
  );
};
export default WishlistPage;
