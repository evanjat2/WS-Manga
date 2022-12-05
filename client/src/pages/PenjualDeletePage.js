import { Navbar } from "../component/Layout";
import PenjualDelete from "../component/Penjual/PenjualDelete";
const PenjualDeletePage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-[60px] px-[40px]">
        <PenjualDelete />
      </div>
    </div>
  );
};
export default PenjualDeletePage;
