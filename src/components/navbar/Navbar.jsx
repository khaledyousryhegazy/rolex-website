import { useState } from "react";
import { headerData } from "../../data";
import Logo from "./Logo";
import { FaBagShopping } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import Toggle from "../toggle/Toggle";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import {
  addToCart,
  decrease,
  removeFromCart,
} from "../../toolkit/features/cartSlice";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = () =>
    cartProducts.reduce(
      (sum, product) => sum + product.quantity * product.price,
      0
    );

  return (
    <div className="fixed top-0 left-0 bg-bodyColor z-50 w-full shadow-sm">
      <div className="container flex text-titleColor items-center justify-between">
        <div className="flex gap-16 py-5">
          <Logo />
          <ul
            className={` ${
              isOpen ? "left-0" : "-left-full"
            } navbar-mobile z-50  flex gap-5 text-sm items-center font-semibold capitalize`}
          >
            <MdOutlineClose
              onClick={() => {
                setIsOpen(false);
              }}
              className="sm:hidden hover-firstColor text-3xl cursor-pointer block ms-auto mb-10"
            />
            {headerData?.map((link) => {
              return (
                <li key={link?.id}>
                  <a
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    href={`#${link?.path}`}
                    className="hover-firstColor"
                  >
                    {link?.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-2 items-center py-5">
          <Toggle />
          <div className="flex items-center">
            <FaBagShopping
              onClick={() => {
                setIsCartOpen(true);
              }}
              className="hover-firstColor cursor-pointer text-[17px]"
            />
            <span className="text-xs text-titleColor font-semibold">
              {cartProducts.length}
            </span>
          </div>
          <FiGrid
            onClick={() => {
              setIsOpen(true);
            }}
            className="hover-firstColor cursor-pointer text-[18px] sm:hidden"
          />
        </div>

        {/* Cart */}
        <div
          className={`cart fixed top-0 bottom-0 ${
            isCartOpen ? "right-0" : " -right-full "
          } bg-bodyColor overflow-auto z-10 w-[320px] p-10`}
        >
          <MdOutlineClose
            onClick={() => {
              setIsCartOpen(false);
            }}
            className="hover-firstColor text-3xl cursor-pointer block ms-auto mb-5"
          />

          <h1 className="text-2xl uppercase mb-10 text-center text-titleColor">
            my cart
          </h1>
          <div className="flex flex-col gap-5 ">
            {cartProducts &&
              cartProducts?.map((pro) => {
                return (
                  <div key={pro?.id} className="flex items-center gap-5">
                    <img
                      className="w-20 border border-borderColor p-2"
                      src={pro?.image}
                      alt={pro?.title}
                    />
                    <div className="flex flex-col gap-3 w-full">
                      <h1 className="uppercase text-sm">{pro?.title}</h1>
                      <span className="uppercase text-sm text-firstColor font-semibold">
                        $ {pro?.price}
                      </span>
                      <div className="flex items-center justify-between">
                        <div className="inline-block ">
                          <div className="flex items-center gap-x-1.5">
                            <button className="w-[18px] h-[18px] inline-flex justify-center items-center text-sm border border-borderColor hover:bg-bodyColor ">
                              <FiMinus
                                onClick={() => {
                                  dispatch(decrease(pro));
                                }}
                              />
                            </button>
                            <input
                              className="p-0 w-6 text-titleColor bg-transparent border-none outline-none text-center"
                              type="text"
                              value={pro?.quantity}
                              readOnly
                            />
                            <button className="w-[18px] h-[18px] inline-flex justify-center items-center text-sm border border-borderColor hover:bg-bodyColor">
                              <AiOutlinePlus
                                onClick={() => {
                                  dispatch(addToCart(pro));
                                }}
                              />
                            </button>
                          </div>
                        </div>
                        <MdDelete
                          onClick={() => {
                            dispatch(removeFromCart(pro));
                          }}
                          className="text-red-600 text-xl cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex justify-between mt-10">
            <p className="uppercase font-semibold text-xs">
              <span className="text-firstColor">{cartProducts.length}</span>{" "}
              items
            </p>
            <p className="uppercase font-semibold text-xs">
              total <span className="text-firstColor">$ {total()}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
