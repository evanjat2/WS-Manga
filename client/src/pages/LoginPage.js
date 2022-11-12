import Login from "../component/Login/Login";
import Background from "../component/Login/Background";
const LoginPage = () => {
  return (
    <>
      <div className="relative overscroll-none	">
        <Background />
        <Login />
      </div>
    </>
  );
};
export default LoginPage;
