import { IKContext, IKUpload, IKImage } from "imagekitio-react";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import axios from "axios";

const DaftarPenjualan = () => {
  const [list, setList] = useState(null);
  const { clearAlert, chooseBook } = useAppContext();
  const getAllSell = async () => {
    let data = null;
    try {
      data = await axios.get("/api/v1/sell/all");
    } catch (error) {
      console.log("Error");
    }
    const { book } = data.data;
    setList(book);
    clearAlert();
  };
  useEffect(() => {
    getAllSell();
    console.log(list);
  }, []);
  return (
    <>
      <div className="mt-12 px-[80px] font-Inter">
        <div className="flex justify-between  text-blue font-bold ">
          <p className="cursor-pointer">Daftar Penjualan</p>
        </div>
        <div className="grid justify-items-between grid-cols-7 h-[400px] mt-4 overflow-auto ">
          {list?.map((l) => (
            <a href="/sell/read">
              <div
                className="overflow-hidden cursor-pointer"
                onClick={() => chooseBook(l)}
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
                <div className="w-full overflow-auto scrollbar-hide h-6 font-medium text-blue">
                  Rp{l.harga}
                </div>
                <div className="w-full overflow-hidden h-6 text-xs text-blue">
                  {l.pengarang}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
export default DaftarPenjualan;
