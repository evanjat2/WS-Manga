import WishlistDashboard from "../component/Wishlist/WishlistDashboard"
import Navbar from "../component/Layout/Navbar"

const WishlistDashboardPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="min-h-screen pt-[60px] px-[40px]">
        <WishlistDashboard />
      </div>
    </div>
  )
}
export default WishlistDashboardPage