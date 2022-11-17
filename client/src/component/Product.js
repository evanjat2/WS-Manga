const Product = () => {
  return (
    <>
        <div class="px-80 py-20">
          <img
            className="object-contain h-60 w-50 text-center"
            src="https://komikcast.site/wp-content/uploads/2019/07/658v11kdjasfodfasdf-e1565284654247.jpg">
          </img>
          <div className="mt-6">Stock: Ready
        </div>
        <div class="col-lg-6 col-md-12 col-12 text-left">
            <h3 class="font-bold">1000 Kanojo</h3>

            <h2 class="font-bold">Quantity: </h2>
            <select class="my-3">
                <option>Select Quantity</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            
            <p class="font-bold">Sinopsis</p>
                <span>After being having his 100th confession rejected by Asakawa a desperate.
                Aijou Rentarou finds himself at a matchmaking shrine where he meets the Love God 
                who tells him that he is destined to be with 100 soulmates. 
                He later enters his first day of high school where he bumps into his first two soulmates, 
                Hanazono Hakari and Inda Karane, both of whom would confess their feelings to Rentarou at the same time.</span>
            
            <p class="font-bold">Writer</p>
                <span>Jane Doe</span>
            
            <div class="text p-3 px-5 w-[150px] bg-blue text-white rounded-md flex flex-col items-center">
                <button class="Add to cart">Add to cart</button>
            </div>
            <div class="text p-3 px-5 w-[150px] bg-blue text-white rounded-md flex flex-col items-center">
                <button class="Add to wishlist">Add to wishlist</button>
            </div>
        </div>
        </div>
    </>
  );
};
export default Product;
