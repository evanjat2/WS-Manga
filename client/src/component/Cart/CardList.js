import { useEffect, useState } from "react";

import { IKContext, IKImage } from "imagekitio-react";
import axios from "axios";

import { useAppContext } from "../../context/appContext";
import trash from "../../assets/images/Cart/trash.png";

const CardList = (props) => {
  const { urlEndpoint, deleteCart } = useAppContext();
  const [book, setBook] = useState([]);
  const productID = props.productID;
  const buyerID = props.buyerID;
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
    <div className="flex justify-between text-blue font-medium h-[150px] w-[80%]">
      <div className="flex w-full">
        <div>
          <IKContext urlEndpoint={urlEndpoint}>
            <IKImage
              path={book.urlGambar}
              transformation={[
                {
                  height: 150,
                  width: 100,
                },
              ]}
            />
          </IKContext>
        </div>
        <div className="grid content-between h-full px-4">
          <p>{book.judul}</p>
          <p>{book.pengarang}</p>
          <p>Volume {book.volume}</p>
          <p>Rp {book.harga}</p>
        </div>
      </div>
      <div className="justify-self-end">
        <a href="/cart">
        <img
          className="h-[40px] cursor-pointer rounded hover:scale-105 transition duration-300"
          src={trash}
          onClick={() => deleteCart({ productID, buyerID })}
        ></img>
        </a>
      </div>
    </div>
  );
};
export default CardList;
