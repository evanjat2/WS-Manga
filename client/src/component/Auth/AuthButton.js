const AuthButton = ({ name }) => {
  return (
    <div className=" mx-auto w-[140px] h-[30px] relative font-inter">
      <div className="absolute bg-[#FBAB05] opacity-30 w-full h-full rounded-lg"> </div>
      <div className="absolute text-blue opacity-100 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">{name}</div>
    </div>
  );
};
export default AuthButton;
