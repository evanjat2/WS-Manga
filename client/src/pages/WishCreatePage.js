import { Navbar } from "../component/Layout";
import WishCreate from "../component/Wishlist/WishCreate";
const WishCreatePage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-[60px] px-[40px]">
        <WishCreate />
      </div>
    </div>
  );
};
export default WishCreatePage;