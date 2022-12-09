import { useState } from "react";

import { IKContext, IKImage } from "imagekitio-react";

import Input from "./Input";
import Upload from "./Upload";
import Alert from "../Alert";
import { useAppContext } from "../../context/appContext";

const SellUpdate = () => {
  const {
    showAlert,
    choosedBook,
    updateBook,
    urlEndpoint,
    publicKey,
    authenticationEndpoint,
  } = useAppContext();
  const [judul, setJudul] = useState(choosedBook.judul);
  const [pengarang, setPengarang] = useState(choosedBook.pengarang);
  const [detail, setDetail] = useState(choosedBook.detail);
  const [volume, setVolume] = useState(choosedBook.volume);
  const [harga, setHarga] = useState(choosedBook.harga);
  const [urlGambar, setUrlGambar] = useState(choosedBook.urlGambar);
  const _id = choosedBook._id;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!judul || !pengarang || !detail || !volume ||!harga) {
      console.log("Semua kolom harus diisi!");
      return;
    }
    updateBook({ judul, pengarang, detail, volume, harga, urlGambar, _id });
  };

  return (
    <>
      {showAlert && <Alert />}
      <div className="flex gap-24 justify-between w-full">
        <form onSubmit={onSubmit} className="w-[65%]">
          <button
            type="submit"
            class="mt-10 flex text-white bg-green-500 border-0 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Update
          </button>
          <div>
            <Input label="Judul" value={judul} setValue={setJudul} />
            <Input label="Volume" value={volume} setValue={setVolume} />
            <Input
              label="Pengarang"
              value={pengarang}
              setValue={setPengarang}
            />
            <Input label="Harga" value={harga} setValue={setHarga} />
            <Input label="Details" value={detail} setValue={setDetail} />
          </div>
        </form>
        <div class="w-[35%] p-4 grid content-center mt-28">
          <div className="w-fit mx-auto">
            <IKContext
              publicKey={publicKey}
              urlEndpoint={urlEndpoint}
              authenticationEndpoint={authenticationEndpoint}
            >
              <IKImage
                path={urlGambar}
                transformation={[
                  {
                    height: 200,
                    width: 150,
                  },
                ]}
              />
            </IKContext>
          </div>
          <div className="mt-8"></div>
          <Upload value={urlGambar} setValue={setUrlGambar} />
        </div>
      </div>
    </>
  );
};
export default SellUpdate;
