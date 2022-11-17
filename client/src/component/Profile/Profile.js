import { useAppContext } from "../../context/appContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Foto from "../../assets/images/profil/Foto.png";
import Input from "./Input";
import { CgProfile } from "react-icons/cg";
const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      setTimeout(() => {
        navigate(`/login`);
      }, 3000);
    }
  });
  const { user } = useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [noHp, setNoHp] = useState(user?.noHp);
  const [gender, setGender] = useState(user?.gender);
  return (
    <>
      <div className="py-12">
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
            <div className="bg-white p-8 rounded-[30px]">
              <form>
                <div className="text-center font-bold text-blue text-2xl drop-shadow-lg">
                  Profil
                </div>
                <div className="flex gap-8 mt-8 justify-center">
                  <div className="grid gap-4 justify-center">
                    <Input label="Nama" value={name} setValue={setName} />
                    <Input label="Email" value={email} setValue={setEmail} />
                    <Input label="No. Hp" value={noHp} setValue={setNoHp} />
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
              </form>
            </div>
            <div className="flex justify-end gap-8 mt-8">
              <div className="text-blue font-bold p-2 bg-[#EDD69E] w-fit cursor-pointer rounded-lg">
                Update User
              </div>
              <div className="text-blue font-bold p-2 bg-[#EDD69E] w-fit cursor-pointer rounded-lg">
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
