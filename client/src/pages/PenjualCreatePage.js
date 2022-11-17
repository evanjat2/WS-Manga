import { Navbar } from "../component/Layout";
import PenjualCreate from "../component/Penjual/PenjualCreate";
const PenjualCreatePage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-[60px] px-[40px]">
        <PenjualCreate />
      </div>
    </div>
  );
};
export default PenjualCreatePage;
