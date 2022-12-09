import axios from "axios";
import { useEffect,useState } from "react";

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
        <td className="">Rp {book.harga}</td>
      </tr>
  );
};
export default SmallList;
