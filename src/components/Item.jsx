import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../toolkit/features/cartSlice";

function Item({ item, type }) {
  const dispatch = useDispatch();

  const handleBtn = () => {
    dispatch(addToCart(item));
  };
  return (
    <div className="relative hover:bg-firstColor transition duration-200 item flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-borderColor bg-boxColor shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden">
        <img
          className="object-cover m-auto"
          src={`${item.image}`}
          alt={item?.title}
        />
        <span className="absolute uppercase top-4 -left-4  m-2 -rotate-90 bg-firstColor  px-2 text-center text-sm font-medium text-boxColor">
          {type ? type : ""}
        </span>
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-lg tracking-tight uppercase text-titleColor">
          {item?.title}
        </h5>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <span className="text-lg price font-bold text-firstColor">
            $ {item?.price}
          </span>
        </div>

        <button
          onClick={handleBtn}
          className={` invisible flex w-full transition duration-200 items-center justify-center bg-buttonColor px-5 py-2.5 text-center text-sm font-medium text-textColor hover:bg-actionColor`}
        >
          <MdOutlineShoppingCart className="text-textColor me-2 text-lg" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Item;
