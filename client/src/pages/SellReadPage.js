import { Navbar } from "../component/Layout";
import SellRead from "../component/Penjual/SellRead";
const SellReadPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-[60px] px-[40px]">
        <SellRead />
      </div>
    </div>
  );
};
export default SellReadPage;
