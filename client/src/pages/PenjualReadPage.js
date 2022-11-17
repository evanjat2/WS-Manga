import { Navbar } from "../component/Layout";
import PenjualRead from "../component/Penjual/PenjualRead";
const PenjualReadPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-[60px] px-[40px]">
        <PenjualRead />
      </div>
    </div>
  );
};
export default PenjualReadPage;
