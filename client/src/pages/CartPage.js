import { Navbar } from "../component/Layout";
import Cart from "../component/Cart/Cart.js";
const CartPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen pt-[60px] px-[40px] h-screen">
        <Cart/>
      </div>
    </>
  );
};
export default CartPage;
