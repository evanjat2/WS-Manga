import { useEffect } from "react";

import { useAppContext } from "../../context/appContext";

const WishListDashboard = () => {
  const { getOwnWishes, ownWishes, chooseWish } = useAppContext();
  useEffect(() => {
    getOwnWishes();
  }, []);
  return (
    <div className="font-inter">
      <div className="my-8 flex w-full justify-end">
        <a href="/wishlist/create">
          <p className="w-fit py-1 px-4  bg-[#1AB53C] text-white cursor-pointer rounded-lg hover:bg-green-400 transition duration-150">
            Add
          </p>
        </a>
      </div>
      {ownWishes.length == 0 && (
        <div className="h-44 grid content-center text-blue font-bold text-center">
          Anda belum punya wishlist
        </div>
      )}
      {ownWishes.length > 0 && (
        <table className="table-fixed border-[1px] border-black w-full">
          <thead className="bg-[#35447C]  ">
            <tr className="text-white text-left  text-sm font-light">
              <th className="px-2">Pengarang</th>
              <th className="border-x-[1px] px-2 border-cream w-[20%]">
                Judul
              </th>
              <th className="border-x-[1px] px-2 border-cream overflow-hidden w-[40%]">
                Volume
              </th>
              <th className="w-[20%] px-2">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-cream">
            {ownWishes?.map((list) => (
              <tr key={list._id}>
                <td className="px-2 h-8">{list.pengarang}</td>
                <td className="px-2 border-x-[1px] border-black truncate . . . ">
                  {list.judul}
                </td>
                <td className="px-2 border-x-[1px] border-black overflow-hidden truncate . . .">
                  {list.volume}
                </td>
                <td className="px-2">
                  <div className="grid grid-cols-3 gap-2 text-center text-white text-sm">
                    <a href="/wishlist/read">
                      <div
                        className="bg-[#0E7278] cursor-pointer rounded-md hover:bg-emerald-500 transition duration-150"
                        onClick={() => chooseWish(list)}
                      >
                        Read
                      </div>
                    </a>
                    <a href="/wishlist/update">
                      <div
                        className="bg-[#E39807] cursor-pointer rounded-md hover:bg-amber-400 transition duration-150"
                        onClick={() => chooseWish(list)}
                      >
                        Edit
                      </div>
                    </a>
                    <a href="/wishlist/delete">
                      <div
                        className="bg-[#E82626] cursor-pointer rounded-md hover:bg-red-400 transition duration-150"
                        onClick={() => chooseWish(list)}
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
      )}
    </div>
  );
};
export default WishListDashboard;
