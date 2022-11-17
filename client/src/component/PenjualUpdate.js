import { BsImages } from "react-icons/bs";
const PenjualUpdate = () => {
  return (
    <>
      <div>
        <button class="mt-40 flex text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Update
        </button>
      </div>

      <div class="mt-10 flex gap-24 justify-between w-full">
        <div class="w-[65%]">
          <div class="relative flex-grow w-full">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="No"
            />
          </div>
          <div class="relative flex-grow w-full mt-5">
            {" "}
            {/* <label for="email" class="leading-7 text-sm text-gray-600">Email</label> */}{" "}
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Name"
            />
          </div>

          <div class="relative flex-grow w-full mt-5">
            {" "}
            {/* <label for="email" class="leading-7 text-sm text-gray-600">Email</label> */}{" "}
            <input
              class="shadow appearance-none border rounded w-full py-12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Details"
            />
          </div>
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
    </>
  );
};
export default PenjualUpdate;
