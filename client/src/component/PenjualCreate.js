const PenjualCreate = () => {
    return (
        
      <>
      <div>
        <button class="mt-40 flex text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create</button>
    </div>
        
     <div class="mt-10 grid grid-rows-2 grid-flow-col gap-4">

      <div class = "row-span-3">

      <div class="relative flex-grow w-full">
        {/* <label for="full-name" class="leading-7 text-sm text-gray-600">No</label> */}
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="No"/>
      </div>

      <div class="relative flex-grow w-full mt-5">
        {/* <label for="email" class="leading-7 text-sm text-gray-600">Email</label> */}
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name"/>
      </div>

      <div class="relative flex-grow w-full mt-5">
        {/* <label for="email" class="leading-7 text-sm text-gray-600">Email</label> */}
        <input class="shadow appearance-none border rounded w-full py-12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Details"/>
      </div>

      <div class = "row-span-">
      <div>
        <button class="mt-40 flex text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create</button>
    </div>
    
      </div>

      </div>

      
      
      </div>
      
      
      </>
      
    )
  }
  export default PenjualCreate