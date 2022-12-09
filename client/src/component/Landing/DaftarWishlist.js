import { IKContext, IKImage } from "imagekitio-react";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import axios from "axios";

const DaftarWishlist = () => {
  const { clearAlert, chooseWish, getOwnWishes, ownWishes } = useAppContext();
  const list = ownWishes;
  useEffect(() => {
    getOwnWishes();
  }, []);
  return (
    <>
      <div className="mt-12 px-[80px] font-Inter">
        <div className="flex justify-between  text-blue font-bold ">
          <p className="cursor-pointer">Daftar Wishlist</p>
        </div>
        {list.length > 0 && (
          <div className="grid justify-items-between grid-cols-7 h-[400px] mt-4 overflow-auto">
            {list?.map((l) => (
              <a href="/wishlist/read">
                <div
                  className="overflow-hidden cursor-pointer hover:scale-105 transition duration-300"
                  onClick={() => chooseWish(l)}
                >
                  <IKContext
                    publicKey="public_cxe4KroklYkjkJ7Mtp3RYC/mFro="
                    urlEndpoint="https://ik.imagekit.io/evanaj"
                    transformationPosition="path"
                    authenticationEndpoint="http://www.yourserver.com/auth"
                  >
                    <IKImage
                      path={l.urlGambar}
                      transformation={[
                        {
                          height: "180",
                          width: "120",
                        },
                      ]}
                    />
                  </IKContext>
                  <div className="w-full overflow-auto scrollbar-hide h-6 font-medium text-blue">
                    {l.judul}
                  </div>
                  <div className="w-full overflow-hidden h-6 text-xs text-blue">
                    {l.pengarang}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
        {list.length == 0 && <div className="text-blue text-xs pb-8">Anda belum punya wishlist</div>}
      </div>
    </>
  );
};
export default DaftarWishlist;
