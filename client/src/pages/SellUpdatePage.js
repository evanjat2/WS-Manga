import { Navbar } from "../component/Layout";
import SellUpdate from "../component/Penjual/SellUpdate";
const SellUpdatePage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-[60px] px-[40px]">
        <SellUpdate />
      </div>
    </div>
  );
};
export default SellUpdatePage;
