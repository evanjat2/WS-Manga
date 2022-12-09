import { Navbar } from "../component/Layout";
import SoldBook from "../component/SoldBook";

const SoldBookPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-[60px] px-[40px]">
        <SoldBook/>
      </div>
    </div>
  );
};
export default SoldBookPage;
