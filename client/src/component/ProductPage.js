const ProductPage = () => {
  return (
    <>
        <div class="px-80 py-20 fixed-top">
          <img
            className="object-contain h-48 w-30"
            src="https://komikcast.site/wp-content/uploads/2019/07/658v11kdjasfodfasdf-e1565284654247.jpg">
          </img>
          <div className="mt-5 fixed-top">Stock:Ready
          </div>
  
        <div class="col-lg-6 col-md-12 col-12">
            <h3>
                100 Kanojo
            </h3>
            <h2>
                Quantity
            </h2>
            <select class="col-lg-6 col-md-12 col-12">
            <option>
                Select Quantity
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
            <h4>
                Sinopsis
            </h4>
            <span>After being having his 100th confession rejected by Asakawa a desperate. 
                Aijou Rentarou finds himself at a matchmaking shrine where he meets the Love God who tells him that he is destined to be with 100 soulmates. 
                He later enters his first day of high school where he bumps into his first two soulmates, Hanazono Hakari and Inda Karane, both of whom would confess their feelings to Rentarou at the same time. 
                Unable to choose which one to choose he consults the Love God for advice who tells him the reason as to why he has 100 soulmates and that if he were to be rejected or were not made happy they would die due to misfortune.
            </span>
            <h2>
                Writer
            </h2>
            <span>
                Jane Doe
            </span>
            <button class="text p-1 px-3 bg-blue text-white rounded-md">
                Add to cart
            </button>
            <button class="text p-1 px-3 bg-blue text-white rounded-md">
                Add to wishlist
            </button>
        </div>
        </div>
    </>
  );
};
export default ProductPage;
