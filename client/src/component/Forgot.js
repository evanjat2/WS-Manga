import React from "react";
import AuthButton from "./Auth/AuthButton";
import Input from "./Auth/Input";

const Forgot = () => {
  const list = [];
  return (
    <section className="grid h-screen place-items-center">
      <form
        className="px-8 py-8 text-sm 2xl:text-md my-4 flex flex-col gap-4 rounded-[10px]"
        // onSubmit={onSubmit}
      >
        <p className="font-notoseriftc text-center text-3xl text-reemkufiink text-blue font-bold">
          I forgot my password
        </p>
        <div>
          <label className="block w-full text-[#36447C] font-inter font-bold mt-[15px] ">
            <Input
              className="text-gray-700"
              name="email"
              placeholder="Input your email here"
              //   value={values.email}
              //   values={values}
              //   setValues={setValues}
            />
          </label>
        </div>
        <AuthButton name="Confirm" />
      </form>
    </section>
  );
};
export default Forgot;
