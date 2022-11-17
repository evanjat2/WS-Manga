import { useState, useEffect } from "react";
import Input from "./Input";
import AuthButton from "./AuthButton";
import { useAppContext } from "../../context/appContext";
import Alert from "../Alert";
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: "",
  email: "",
  password: "",
};
const SignUp = () => {
  const [values, setValues] = useState(initialState);
  let navigate = useNavigate();
  const { registerUser, showAlert, user } = useAppContext();
  const onSubmit = (e) => {
    console.log("berhasil submit");
    e.preventDefault();
    const { name, email, password } = values;
    console.log(values);
    if (!email || !password || !name) {
      console.log("Belum diisi semua");
      return;
    }
    const currentUser = { name, email, password };
    registerUser(currentUser);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate(`/`);
      }, 3000);
    }
  }, [user]);

  return (
    <div className="grid min-h-screen content-center px-[5%] sm:px-[8%] md:px-[12%] lg:px-[25%] xl:px-[33%] font-reemkufiink font-bold">
      {showAlert && <Alert />}
      <form
        className="px-8 py-8 text-sm 2xl:text-md my-4 flex flex-col gap-4 rounded-[10px]"
        onSubmit={onSubmit}
      >
        <p className="font-notoseriftc text-center text-3xl text-blue">
          Sign Up
        </p>
        <div>
          <label className="block w-full text-[#36447C] font-inter font-bold mt-[15px] ">
            <p className="text-xl">Nama</p>
            <Input
              name="name"
              placeholder=""
              value={values.nama}
              values={values}
              setValues={setValues}
            />
          </label>
          <label className="block w-full text-[#36447C] font-inter font-bold mt-[15px] ">
            <p className="text-xl">Email Address</p>
            <Input
              name="email"
              placeholder=""
              value={values.email}
              values={values}
              setValues={setValues}
            />
          </label>
          <label className="block w-full text-[#36447C] font-inter font-bold mt-[15px]">
            <p className="text-xl">Password</p>
            <Input
              name="password"
              placeholder=""
              value={values.password}
              values={values}
              setValues={setValues}
            />
          </label>
          <label className="block w-full text-[#36447C] font-inter font-bold mt-[15px]">
            <p className="text-xl">Confirm Password</p>
            <Input name="sandi" placeholder="" />
          </label>
        </div>
        <AuthButton name="Sign Up" />
        <div className="grid text-center gap-2 justify-center w-full text-[#36447C] opacity-70 font-bold font-inter">
          <a href="/login">
            <p className="cursor-pointer">Already have an account</p>
          </a>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
