import { Navbar } from "../component/Layout";
import WishDelete from "../component/Wishlist/WishDelete";

const WishDeletePage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-[60px] px-[40px]">
        <WishDelete />
      </div>
    </div>
  );
};
export default WishDeletePage;