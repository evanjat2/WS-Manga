import { Navbar } from "../component/Layout";
import WishRead from "../component/Wishlist/WishRead";

const WishReadPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-[60px] px-[40px]">
        <WishRead />
      </div>
    </div>
  );
};
export default WishReadPage;