import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return <div className={`p-2 fixed h-fit w-fit top-10 right-8 rounded-lg z-20 ` + (alertType=="success" ? `bg-green-400`:`bg-red-400`)}>{alertText}</div>;
};
export default Alert;
