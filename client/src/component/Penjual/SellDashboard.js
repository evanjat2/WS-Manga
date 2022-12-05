import { list } from "postcss";
import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
const SellDashboard = () => {
  const { getOwnedBook, ownedBook, alertType, chooseBook } = useAppContext();
  useEffect(() => {
    getOwnedBook();
  }, []);
  return (
    <div className="font-inter">
      <div className="my-8 flex w-full justify-end">
        <a href="/penjualcreate">
          <p className="w-fit py-1 px-4  bg-[#1AB53C] text-white cursor-pointer rounded-lg">
            Add
          </p>
        </a>
      </div>
      <table className="table-fixed border-[1px] border-black w-full">
        <thead className="bg-[#35447C]  ">
          <tr className="text-white text-left  text-sm font-light">
            <th className="px-2">Pengarang</th>
            <th className="border-x-[1px] px-2 border-cream w-[20%]">Judul</th>
            <th className="border-x-[1px] px-2 border-cream overflow-hidden w-[40%]">
              Detail
            </th>
            <th className="w-[20%] px-2">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-cream">
          {ownedBook?.map((list) => (
            <tr key={list._id}>
              <td className="px-2 h-8">{list.pengarang}</td>
              <td className="px-2 border-x-[1px] border-black truncate . . . ">
                {list.judul}
              </td>
              <td className="px-2 border-x-[1px] border-black overflow-hidden truncate . . .">
                {list.detail}
              </td>
              <td className="px-2">
                <div className="grid grid-cols-3 gap-2 text-center text-white text-sm">
                  <a href="/penjualread">
                    <div
                      className="bg-[#0E7278] cursor-pointer rounded-md "
                      onClick={() => chooseBook(list)}
                    >
                      Read
                    </div>
                  </a>
                  <a href="/penjualupdate">
                    <div
                      className="bg-[#E39807] cursor-pointer rounded-md"
                      onClick={() => chooseBook(list)}
                    >
                      Edit
                    </div>
                  </a>
                  <a href="/penjualdelete">
                  <div
                    className="bg-[#E82626] cursor-pointer rounded-md"
                    onClick={() => chooseBook(list)}
                  >
                    Delete
                  </div>
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SellDashboard;
