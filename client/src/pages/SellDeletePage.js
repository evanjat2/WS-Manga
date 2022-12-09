import { Navbar } from "../component/Layout";
import SellDelete from "../component/Penjual/SellDelete";

const SellDeletePage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-[60px] px-[40px]">
        <SellDelete />
      </div>
    </div>
  );
};
export default SellDeletePage;
