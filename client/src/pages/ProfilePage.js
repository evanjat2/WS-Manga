import { Navbar } from "../component/Layout";
import Profile from "../component/Profile";
const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[200vh] mt-[60px] px-[40px]">
        <Profile />
      </div>
    </div>
  );
};
export default ProfilePage;
