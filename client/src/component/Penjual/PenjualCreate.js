import { useState } from "react";
import { BsImages } from "react-icons/bs";
import Input from "./Input";
const PenjualCreate = () => {
  const [judul, setJudul] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [detail, setDetail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!judul || !pengarang || !detail) {
      console.log("Judul, Pengarang, dan Detail tidak boleh kosong!");
      return;
    }
    console.log(judul, pengarang, detail);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <button
          type="submit"
          class="mt-20 flex text-white bg-green-500 border-0 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Create
        </button>
        <div class="flex gap-24 justify-between w-full">
          <div class="w-[65%]">
            <Input label="Judul" value={judul} setValue={setJudul} />
            <Input
              label="Pengarang"
              value={pengarang}
              setValue={setPengarang}
            />
            <Input label="Details" value={detail} setValue={setDetail} />
          </div>
          <div class="w-[35%] p-4">
            <div className="w-full bg-[#E2E2E2]" style={{ aspectRatio: "1/1" }}>
              <BsImages />
            </div>
            <div class="z-10 inset-0 flex">
              <div class="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
                <div class="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg w-full">
                  <div class="input_field flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        class="text-sm cursor-pointer w-36 hidden"
                        type="file"
                        multiple
                      />
                      <div className="text p-1 px-3 bg-blue text-white rounded-md">
                        Add your picture
                      </div>
                    </label>

                    <div class="title text-indigo-500 uppercase">
                      or drop image here
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default PenjualCreate;
