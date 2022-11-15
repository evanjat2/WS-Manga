import Login from "../component/Auth/Login";
import Background from "../component/Auth/Background";
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
