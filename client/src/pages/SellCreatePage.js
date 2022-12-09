import { Navbar } from "../component/Layout";
import SellCreate from "../component/Penjual/SellCreate";

const SellCreatePage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-[60px] px-[40px]">
        <SellCreate />
      </div>
    </div>
  );
};
export default SellCreatePage;
