import { IKContext, IKImage } from "imagekitio-react";
import { useEffect } from "react";

import Alert from "../Alert";
import { useAppContext } from "../../context/appContext";
const SellRead = () => {
  const {
    choosedBook,
    urlEndpoint,
    user,
    createCart,
    checkCart,
    checkedCart,
    deleteCart,
    createWish,
    showAlert,
  } = useAppContext();
  const productID = choosedBook._id;
  const buyerID = user._id;
  const judul = choosedBook.judul;
  const volume = choosedBook.volume;
  const pengarang = choosedBook.pengarang;
  const detail = choosedBook.detail;
  const harga = choosedBook.harga;
  const urlGambar = choosedBook.urlGambar;
  const owner = choosedBook.owner;

  const addToCart = () => {
    createCart({ productID, buyerID });
    checkCart({ productID, buyerID });
  };

  const addToWishlist = () => {
    createWish({ judul, pengarang, detail, volume, urlGambar, owner });
  };
  const removeFromCart = () => {
    deleteCart({ productID, buyerID });
  };

  useEffect(() => {
    checkCart({ productID, buyerID });
  }, [checkedCart]);
  return (
    <>
      {showAlert && <Alert />}
      <div className="min-h-center py-16 md:flex grid font-inter ">
        <div className="w-[40%] pl-30 mx-20 grid place-items-center">
          <IKContext urlEndpoint={urlEndpoint}>
            <IKImage
              path={choosedBook?.urlGambar}
              transformation={[
                {
                  height: 200,
                  width: 150,
                },
              ]}
            />
          </IKContext>
          <div className="mt-5 text-reemkufiink text-black font-bold">
            Rating
          </div>
          <div className="flex items-center mt-5">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              4.95 out of 5
            </p>
          </div>
        </div>
        <div className="grid text-[#848484] w-full gap-4">
          <div className="bg-[#EFEFEF] p-4 font-medium rounded-lg">
            {choosedBook?.judul}
          </div>
          <div className="bg-[#EFEFEF] p-4 font-medium rounded-lg">
            {choosedBook?.volume}
          </div>
          <div className="bg-[#EFEFEF] p-4 font-medium rounded-lg">
            {choosedBook?.pengarang}
          </div>
          <div className="bg-[#EFEFEF] p-4 font-medium rounded-lg">
            Rp{choosedBook?.harga}
          </div>
          <div className="bg-[#EFEFEF] p-4 font-medium rounded-lg">
            {choosedBook?.detail}
          </div>
        </div>
      </div>
      {choosedBook.owner !== user._id && (
        <div className="text-white flex justify-center gap-12 text-center">
          <div
            className={`cursor-pointer rounded-md min-w-[140px] py-1 hover:scale-110 transition duration-300 ${
              checkedCart ? " bg-red-400 " : " bg-blue "
            }`}
            onClick={checkedCart ? () => removeFromCart() : () => addToCart()}
          >
            {checkedCart ? "Remove from Cart" : "Add to Cart"}
          </div>
          <div
            className="bg-blue cursor-pointer rounded-md min-w-[140px] py-1 hover:scale-110 transition duration-300"
            onClick={() => addToWishlist()}
          >
            Add to wishlist
          </div>
        </div>
      )}

      {choosedBook.owner == user._id && (
        <div className="text-center text-blue"> You sell this book</div>
      )}
    </>
  );
};
export default SellRead;
