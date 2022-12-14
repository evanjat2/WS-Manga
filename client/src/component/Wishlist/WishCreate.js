import { useState } from "react";

import { IKContext, IKImage } from "imagekitio-react";

import Alert from "../Alert";
import Input from "../Penjual/Input";
import Upload from "../Penjual/Upload";
import { useAppContext } from "../../context/appContext";

const WishCreate = () => {
  const {
    createWish,
    showAlert,
    user,
    urlEndpoint,
    publicKey,
    authenticationEndpoint,
  } = useAppContext();
  const [judul, setJudul] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [volume, setVolume] = useState();
  const [urlGambar, setUrlGambar] = useState("1.png");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!judul || !pengarang || !volume) {
      console.log("Judul, Pengarang, dan Volume tidak boleh kosong!");
      return;
    }
    const owner = user._id;
    console.log(owner);
    createWish({ judul, pengarang, volume, urlGambar, owner });
  };
  return (
    <>
      {showAlert && <Alert />}
      <div className="flex gap-24 justify-between w-full">
        <form onSubmit={onSubmit} className="w-[65%]">
          <button
            type="submit"
            class="mt-20 flex text-white bg-green-500 border-0 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Create
          </button>
          <div>
            <Input label="Judul" value={judul} setValue={setJudul} />
            <Input
              label="Pengarang"
              value={pengarang}
              setValue={setPengarang}
            />
            <Input label="Volume" value={volume} setValue={setVolume} />
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
export default WishCreate;
