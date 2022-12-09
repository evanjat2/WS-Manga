import { useEffect, useState } from "react";

import { IKContext, IKImage, IKUpload } from "imagekitio-react";

import Input from "./Input";
import Upload from "./Upload";

import { useAppContext } from "../../context/appContext";
import Alert from "../Alert";
import Select from "./Select";
const Profile = () => {
  const {
    user,
    logoutUser,
    showAlert,
    updateUser,
    urlEndpoint,
    publicKey,
    authenticationEndpoint,
  } = useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [NoHP, setNoHp] = useState(user?.noHp);
  const [gender, setGender] = useState(user?.gender);
  const [urlGambar, setUrlGambar] = useState(user?.urlGambar);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      console.log("Nama dan Email tidak boleh kosong");
      return;
    }
    updateUser({ name, email, NoHP, gender, urlGambar });
  };
  return (
    <>
      <div className="py-12">
        {showAlert && <Alert />}
        <div className="flex font-inter">
          {/* Sidebar */}
          <div className="w-[25%]">
            <div className="flex w-full gap-4">
              <div className="bg-white rounded-[999px] overflow-hidden p-1 ">
                <div className=" border rounded-[999px] overflow-hidden ">
                  <IKContext urlEndpoint={urlEndpoint}>
                    <IKImage
                      path={urlGambar}
                      transformation={[
                        {
                          height: 50,
                          width: 50,
                        },
                      ]}
                    />
                  </IKContext>
                </div>
              </div>
              <p className="text-blue font-bold grid content-center">{name}</p>
            </div>
            <p className="text-blue font-bold cursor-pointer mt-4">Akun Saya</p>
            <a href="/wishlist">
              <p
                className="hover:text-orange transition duration-150 text-blue font-bold cursor-pointer mt-4 w-fit">
                Wishlist
              </p>
            </a>
            <p
              className="hover:text-orange transition duration-150 text-blue font-bold cursor-pointer mt-4 w-fit"
              onClick={logoutUser}
            >
              Logout
            </p>
          </div>
          {/* Form */}
          <div className="w-[75%]">
            <div className="bg-white p-8 rounded-[30px] flex">
              <form onSubmit={onSubmit} className="w-[75%]">
                <div className="text-center font-bold text-blue text-2xl drop-shadow-lg">
                  Profil
                </div>
                <div className="flex gap-8 mt-8 justify-center">
                  <div className="grid">
                    <div className="grid gap-4 justify-center">
                      <Input label="Nama" value={name} setValue={setName} />
                      <Input label="Email" value={email} setValue={setEmail} />
                      <Input label="No. Hp" value={NoHP} setValue={setNoHp} />
                      <Select
                        label="Jenis Kelamin"
                        value={gender}
                        setValue={setGender}
                      />
                    </div>
                    <div className="flex justify-end gap-8 mt-8">
                      <button
                        type="submit"
                        className="hover:bg-amber-400 transition duration-150 text-blue font-bold p-2 bg-[#EDD69E] w-fit cursor-pointer rounded-lg"
                      >
                        Update User
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center grid content-center">
                <IKContext
                  publicKey={publicKey}
                  urlEndpoint={urlEndpoint}
                  authenticationEndpoint={authenticationEndpoint}
                >
                  <IKImage
                    path={urlGambar}
                    transformation={[
                      {
                        height: 100,
                        width: 100,
                      },
                    ]}
                  />
                </IKContext>
                <div className="mt-4"></div>
                <Upload value={urlGambar} setValue={setUrlGambar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
