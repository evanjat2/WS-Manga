import { Navbar } from "../component/Layout";
import Product from "../component/Product";

const ProductPage = () => {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen mt-[60px] px-[40px]">
          <Product/>
        </div>
      </div>
    );
  };
  export default ProductPage;
  
