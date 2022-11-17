import { Navbar } from "../component/Layout";
import PenjualUpdate from "../component/Penjual/PenjualUpdate";
const PenjualUpdatePage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-[60px] px-[40px]">
        <PenjualUpdate />
      </div>
    </div>
  );
};
export default PenjualUpdatePage;
