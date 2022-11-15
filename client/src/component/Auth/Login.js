import Input from "./Input";
import AuthButton from "./AuthButton";

const Login = () => {
  return (
    <div className="grid min-h-screen content-center px-[5%] sm:px-[8%] md:px-[12%] lg:px-[25%] xl:px-[33%] font-reemkufiink font-bold">
      <form className="px-8 py-8 text-sm 2xl:text-md my-4 flex flex-col gap-4 rounded-[10px]">
        <p className="font-notoseriftc text-center text-3xl text-blue">
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
        <AuthButton name="Login" />
        <div className="grid text-center gap-2 justify-center w-full text-[#36447C] opacity-70 font-bold font-inter">
          <a href="/signup"><p className="cursor-pointer">Sign Up</p></a>
          <p className="cursor-pointer">Forgot Password</p>
        </div>
      </form>
    </div>
  );
};
export default Login;
