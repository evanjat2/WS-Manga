import Cart from "../component/Cart/Cart.js";
import { Navbar } from "../component/Layout";

const CartPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen py-[30px] px-[40px] h-screen">
        <Cart/>
      </div>
    </>
  );
};
export default CartPage;
