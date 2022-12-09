import { useEffect } from "react";

import { useAppContext } from "../../context/appContext";
import CardList from "./CardList";
import SmallList from "./SmallList";
const Cart = () => {
  const { getOwnedCart, ownedCart } = useAppContext();
  useEffect(() => {
    getOwnedCart();
  }, []);
  return (
    <div className="flex py-12 px-[40px] w-full h-full font-Inter">
      {ownedCart.length > 0 && (
        <div className="grid gap-8 w-[75%] h-full overflow-auto scrollbar-hide">
          {ownedCart.map((list) => (
            <>
              <CardList productID={list.productID} buyerID={list.buyerID} />
            </>
          ))}
        </div>
      )}
      {ownedCart.length > 0 && (
        <div className="w-[25%]">
          <table className="table-auto w-full text-blue font-medium">
            <thead className="w-full table-auto">
              <tr>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody className="w-full">
              {ownedCart.map((list) => (
                <>
                  <SmallList
                    productID={list.productID}
                    buyerID={list.buyerID}
                  />
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {ownedCart.length == 0 && (
        <div className="grid content-center text-center w-full text-blue font-medium">Anda belum memasukkan buku ke keranjang</div>
      )}
    </div>
  );
};
export default Cart;
