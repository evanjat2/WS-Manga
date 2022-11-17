import { useState, useEffect } from "react";
import Input from "./Auth/Input";
import { useAppContext } from "../context/appContext";
import { BsImages } from "react-icons/bs";

const initialState = {
  judul: "",
  pengarang: "",
  detail: "",
  imgurl: "dummy",
};

const PenjualCreate = () => {
  const [values, setValues] = useState(initialState);
  const { penjualCreate, showAlert, user } = useAppContext();

  //DUMMY
  const startingState = {
    judul: "One Piece",
    detail: "Wano Country, Cidre Guild, Uta's Past",
    pengarang: "Eiichiro Oda",
    urlGambar: "asdfasdfasdf"
  }
  useEffect(() => {
    penjualCreate(startingState);
  }, [] );

  //const {judul, details, pengarang, urlGambar}= startingState;
  //currentBook = {judul, details, pengarang, urlGambar};

  return (
    <>
      <div>
        <button class="mt-40 flex text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Create
        </button>
      </div>

      <div class="mt-10 flex gap-24 justify-between w-full">
        <div class="w-[65%]">
          <label class="relative flex-grow w-full">
            <Input
              name="name"
              placeholder=""
              value={values.nama}
              values={values}
              setValues={setValues}
            />
          </label>
          <div class="relative flex-grow w-full mt-5">
            <Input
              name="name"
              placeholder=""
              value={values.nama}
              values={values}
              setValues={setValues}
            />
          </div>

          <div class="relative flex-grow w-full mt-5">
            <Input
              name="name"
              placeholder=""
              value={values.nama}
              values={values}
              setValues={setValues}
            />
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
    //</div></>
  );
  
};
export default PenjualCreate;
