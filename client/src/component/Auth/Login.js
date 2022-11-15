import Input from "./Input";
import AuthButton from "./AuthButton";
const Login = () => {
  return (
    <div className="grid min-h-screen content-center px-[5%] sm:px-[8%] md:px-[12%] lg:px-[25%] xl:px-[33%] font-reemkufiink font-bold">
      <form className="px-8 py-8 text-sm 2xl:text-md my-4 flex flex-col gap-4 rounded-[10px]">
        <p className="text-[#335544] font-notoseriftc text-center text-3xl">
          Login
        </p>
        <div>
          <label className="block w-full text-[#36447C] font-inter font-bold mt-[15px] ">
            <p className="text-xl">Email Address</p>
            <Input name="email" placeholder="" />
          </label>
          <label className="block w-full text-[#36447C] font-inter font-bold mt-[15px]">
            <p className="text-xl">Password</p>
            <Input name="sandi" placeholder="" />
          </label>
        </div>
        <a
          href="/"
          className="grid content-center cursor-pointer bg-buttonGreen rounded-[10px] w-[134px] h-[38px] mx-auto text-white text-center"
        >
          <AuthButton name="Login"/>
        </a>
        <div className="flex gap-2 justify-center w-full text-[#000000]">
          <p className="font-medium">Sign Up</p>
          <p className="font-semibold text-[#45B69C]">Forgot Password</p>
        </div>
      </form>
    </div>
  );
};
export default Login;
