import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function Input({ name, placeholder, values, setValues, value }) {
  const [pwdVisible, setPwdVisible] = useState(false);
  const [state, setState] = useState(value);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setState(e.target.value);
  };

  let type;
  switch (name) {
    case "email":
      type = "email";
      break;
    case "password":
      type = "password";
      break;
    default:
      type = "text";
  }

  return (
    <div className="w-full mt-[10px] flex items-center gap-3 bg-[#FBAB05] opacity-30 rounded-xl px-8">
      <input
        required
        name={name}
        className=" font-Inter block w-full outline-0 h-[70px] bg-[#FBAB05] rounded-xl text-black font-bold text-lg "
        type={name === "password" ? (pwdVisible ? "text" : "password") : type}
        placeholder={placeholder}
        autoComplete="off"
        value={state}
        onChange={handleChange}
      />
      {name === "password" && (
        <button
          type="button"
          onClick={() => setPwdVisible((prevState) => !prevState)}
        >
          {pwdVisible ? (
            <MdVisibilityOff size="1.25rem" className="flex-none" />
          ) : (
            <MdVisibility size="1.25rem" className="flex-none" />
          )}
        </button>
      )}
    </div>
  );
}
