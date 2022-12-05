import { Navbar } from "../component/Layout";
import { Profile } from "../component/Profile";
const ProfilePage = () => {
  return (
    <div className="bg-cream">
      <Navbar />
      <div className="min-h-screen pt-[60px] px-[40px]">
        <Profile />
      </div>
    </div>
  );
};
export default ProfilePage;
