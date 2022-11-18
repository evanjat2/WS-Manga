import { IKContext, IKUpload, IKImage } from "imagekitio-react";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import axios from "axios";

const DaftarPenjualan = () => {
  const [list, setList] = useState(null);
  const { clearAlert } = useAppContext();
  const getAllSell = async () => {
    let data = null;
    try {
      data = await axios.get("/api/v1/sell/all");
    } catch (error) {
      console.log("Error");
    }
    const { book } = data.data;
    setList(book.slice(-5));
    clearAlert();
  };
  useEffect(() => {
    getAllSell();
    console.log(list);
  }, []);
  return (
    <>
      <div className="mt-12 px-[40px]">
        <div className="flex justify-between font-inter text-blue font-bold ">
          <p className="cursor-pointer">Daftar Penjualan</p>
          <p className="cursor-pointer">Show All</p>
        </div>
        <div className="flex gap-4 justify-center mt-4">
          {list?.map((l) => (
            <IKContext
              className="block"
              publicKey="public_cxe4KroklYkjkJ7Mtp3RYC/mFro="
              urlEndpoint="https://ik.imagekit.io/evanaj"
              transformationPosition="path"
              authenticationEndpoint="http://www.yourserver.com/auth"
            >
              <IKImage
                className="block"
                path="/1.png"
                transformation={[
                  {
                    height: "327",
                    width: "216",
                  },
                ]}
              />
            </IKContext>
          ))}
        </div>
      </div>

      <div className="mt-12 px-[40px]">
        <div className="flex justify-between font-inter text-blue font-bold ">
          <p className="cursor-pointer">Daftar Wishlist</p>
          <p className="cursor-pointer">Show All</p>
        </div>
        <div className="flex gap-4 justify-center mt-4">
          {list?.map((l) => (
            <IKContext
              className="block"
              publicKey="public_cxe4KroklYkjkJ7Mtp3RYC/mFro="
              urlEndpoint="https://ik.imagekit.io/evanaj"
              transformationPosition="path"
              authenticationEndpoint="http://www.yourserver.com/auth"
            >
              <IKImage
                className="block"
                path="/1.png"
                transformation={[
                  {
                    height: "327",
                    width: "216",
                  },
                ]}
              />
            </IKContext>
          ))}
        </div>
      </div>

      <div className="mt-12 px-[40px]">
        <div className="flex justify-between font-inter text-blue font-bold ">
          <p className="cursor-pointer">My Cartpage</p>
          <p className="cursor-pointer">Show All</p>
        </div>
        <div className="flex gap-4 justify-center mt-4">
          {list?.map((l) => (
            <IKContext
              className="block"
              publicKey="public_cxe4KroklYkjkJ7Mtp3RYC/mFro="
              urlEndpoint="https://ik.imagekit.io/evanaj"
              transformationPosition="path"
              authenticationEndpoint="http://www.yourserver.com/auth"
            >
              <IKImage
                className="block"
                path="/1.png"
                transformation={[
                  {
                    height: "327",
                    width: "216",
                  },
                ]}
              />
            </IKContext>
          ))}
        </div>
      </div>
    </>
  );
};
export default DaftarPenjualan;
