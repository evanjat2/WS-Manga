import { useAppContext } from "../../context/appContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Foto from "../../assets/images/profil/Foto.png";
import Input from "../Input";
import { CgProfile } from "react-icons/cg";
import Alert from "../Alert";

const Profile = () => {
  const { user, logoutUser, showAlert, updateUser } = useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [NoHP, setNoHp] = useState(user?.noHp);
  const [gender, setGender] = useState(user?.gender);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      console.log("Nama dan Email tidak boleh kosong");
      return;
    }
    updateUser({ name, email, NoHP, gender });
    console.log(name, email, NoHP, gender);
  };
  return (
    <>
      <div className="py-12">
        {showAlert && <Alert />}
        <div className="flex font-inter">
          {/* Sidebar */}
          <div className="w-[25%]">
            <div className="flex w-full gap-4">
              <div
                className="w-[20%] grid content-center"
                style={{ aspectRatio: "1/1" }}
              >
                <img src={Foto} className="w-full"></img>
              </div>
              <p className="text-blue font-bold grid content-center">{name}</p>
            </div>
            <p className="text-blue font-bold cursor-pointer mt-4">Akun Saya</p>
            <p className="text-blue font-bold cursor-pointer mt-4">
              Ubah Password
            </p>
          </div>
          {/* Form */}
          <div className="w-[75%]">
            <form onSubmit={onSubmit}>
              <div className="bg-white p-8 rounded-[30px]">
                <div className="text-center font-bold text-blue text-2xl drop-shadow-lg">
                  Profil
                </div>
                <div className="flex gap-8 mt-8 justify-center">
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
                  <div
                    className="w-[15%] text-center"
                    style={{ aspectRatio: "1/1" }}
                  >
                    <CgProfile className="h-full w-full" />
                    <p className="cursor-pointer">Pilih Foto</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-8 mt-8">
                <button
                  type="submit"
                  className="text-blue font-bold p-2 bg-[#EDD69E] w-fit cursor-pointer rounded-lg"
                >
                  Update User
                </button>
                <div
                  className="text-blue font-bold p-2 bg-[#EDD69E] w-fit cursor-pointer rounded-lg"
                  onClick={logoutUser}
                >
                  Logout
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
