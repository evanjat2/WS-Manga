import Input from "./Input";
const SignUp = () => {
  return (
    <div className="grid min-h-screen content-center px-[5%] sm:px-[8%] md:px-[12%] lg:px-[25%] xl:px-[33%] font-reemkufiink font-bold">
      <form className="px-8 py-8 text-sm 2xl:text-md my-4 flex flex-col gap-4 rounded-[10px]">
        <p className="text-[#335544] font-notoseriftc text-center text-3xl">
          Sign Up
        </p>
        <div>
          <label className="block w-full font-bold text-[#888F97] ">
            <p>Nama</p>
            <Input name="email" placeholder="" />
          </label>
          <label className="block w-full font-bold text-[#888F97] ">
            <p>Email Address</p>
            <Input name="email" placeholder="" />
          </label>
          <label className="block w-full   font-bold text-[#888F97]">
            <div className="flex justify-between">
              <p>Password</p>
            </div>
            <Input name="sandi" placeholder="" />
          </label>
          <label className="block w-full   font-bold text-[#888F97]">
            <div className="flex justify-between">
              <p>Konfirmasi Password</p>
            </div>
            <Input name="konfirmsandi" placeholder="" />
          </label>
        </div>


        <div className="flex gap-2 justify-center w-full text-[#000000]">
        <button 
        href="/"
        class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Register</button>
        <a
          href="/login"
          className="flex gap-2 justify-center w-full text-[#000000]"

        >
          Already have an account
        </a>
        </div>
        
      </form>
    </div>
  );
};
export default SignUp;
