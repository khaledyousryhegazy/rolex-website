import { featured } from "../data";
import Item from "./Item";

function Featured() {
  return (
    <div id="featured" className="py-24 container">
      <div className="flex justify-center mb-14">
        <h1 className="text-xl text-titleColor uppercase p-2 font-semibold border-t-[2px] border-firstColor">
          featured
        </h1>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] place-items-center  gap-10">
        {featured?.map((item) => {
          return <Item key={item?.id} item={item} type="Sale" />;
        })}
      </div>
    </div>
  );
}

export default Featured;
