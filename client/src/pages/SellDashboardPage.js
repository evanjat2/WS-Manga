import SellDashboard from "../component/Penjual/SellDashboard"
import Navbar from "../component/Layout/Navbar"
const SellDashboardPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="min-h-screen pt-[60px] px-[40px]">
        <SellDashboard />
      </div>
    </div>
  )
}
export default SellDashboardPage