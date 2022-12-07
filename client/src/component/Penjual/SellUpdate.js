import { useState } from "react";

import { IKContext, IKImage, IKUpload } from "imagekitio-react";

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
  const [urlGambar, setUrlGambar] = useState(choosedBook.urlGambar);
  const _id = choosedBook._id;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!judul || !pengarang || !detail) {
      console.log("Judul, Pengarang, dan Detail tidak boleh kosong!");
      return;
    }
    updateBook({ judul, pengarang, detail, urlGambar, _id });
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
            Update
          </button>
          <div>
            <Input label="Judul" value={judul} setValue={setJudul} />
            <Input
              label="Pengarang"
              value={pengarang}
              setValue={setPengarang}
            />
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
