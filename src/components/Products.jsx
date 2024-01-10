import { products } from "../data";
import Item from "./Item";

function Products() {
  return (
    <div id="product" className="container py-20">
      <div className="flex justify-center mb-10">
        <h1 className="uppercase py-2 text-xl text-titleColor font-semibold border-t-[2px] border-firstColor">
          products
        </h1>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] place-items-center gap-5">
        {products?.map((item) => {
          return <Item key={item?.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Products;
