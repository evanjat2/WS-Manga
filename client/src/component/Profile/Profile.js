import { useAppContext } from "../../context/appContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Foto from "../../assets/images/profil/Foto.png";
import Input from "./Input";
import { CgProfile } from "react-icons/cg";
import Alert from "../Alert";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";
import { useRef } from "react";
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
  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    console.log("Success", res);
    setUrlGambar(res.name);
  };
  const reftest = useRef(null);
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
            <p
              className="text-blue font-bold cursor-pointer mt-4 w-fit"
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
                      <Input
                        label="Jenis Kelamin"
                        value={gender}
                        setValue={setGender}
                      />
                    </div>
                    <div className="flex justify-end gap-8 mt-8">
                      <button
                        type="submit"
                        className="text-blue font-bold p-2 bg-[#EDD69E] w-fit cursor-pointer rounded-lg"
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
                  {reftest && (
                    <button
                      className=""
                      onClick={() => reftest.current.click()}
                    >
                      Pilih Foto
                    </button>
                  )}
                  <IKUpload
                    fileName="test-upload.png"
                    onError={onError}
                    onSuccess={onSuccess}
                    inputRef={reftest}
                    style={{ display: "none" }}
                  />
                </IKContext>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
