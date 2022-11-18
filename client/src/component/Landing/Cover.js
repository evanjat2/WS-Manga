import poster from "../../assets/images/landing/poster.png";
import name from "../../assets/images/landing/name.png";
const Cover = () => {
  return (
    <div className="h-screen w-screen relative font-inter text-white overflow-hidden">
      <img src={poster}></img>
      <div className="absolute gap-4 w-screen h-screen top-0 grid content-center px-[40px]">
        <img src={name}></img>
        <p>One Piece</p>
        <p className="w-[500px]">
          One Piece is a Japanese manga series written and illustrated by
          Eiichiro Oda
        </p>
        <div className="flex gap-8">
          <div className="relative w-[120px] h-[40px] cursor-pointer">
            <div className="absolute bg-white opacity-10 inset-0 opacity-90"></div>
            <div className="absolute text-black h-full w-full grid content-center text-center">
              <p>Buy</p>
            </div>
          </div>
          <div className="relative w-[120px] h-[40px] cursor-pointer">
            <div className="absolute bg-white opacity-10 inset-0"></div>
            <div className="absolute opacity-100 text-white h-full w-full grid content-center text-center">
              <p>More Info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cover;
