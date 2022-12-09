import { useEffect,useState } from "react";

import axios from "axios";

import { useAppContext } from "../../context/appContext";

const SmallList = (props) => {
  const [book, setBook] = useState([]);
  const getOneBook = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/sell/${id}`);
      setBook(data);
    } catch (error) {}
  };
  useEffect(() => {
    getOneBook(props.productID);
  }, []);
  return (
      <tr className="h-[40px]">
        <td className="">{book.judul}</td>
        <td className="">$ xxx</td>
      </tr>
  );
};
export default SmallList;