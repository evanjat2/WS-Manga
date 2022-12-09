import { Navbar } from "../component/Layout";
import WishUpdate from "../component/Wishlist/WishUpdate";

const WishUpdatePage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-[60px] px-[40px]">
        <WishUpdate />
      </div>
    </div>
  );
};
export default WishUpdatePage;