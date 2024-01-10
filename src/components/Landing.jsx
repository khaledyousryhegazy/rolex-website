import landingImage from "../assets/landing.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Landing() {
  return (
    <div
      id="/"
      className="container flex items-center gap-5 max-[768px]:gap-0 max-[768px]:flex-col-reverse"
    >
      <div className="icons text-textColor flex flex-col gap-7 text-lg flex-[.07] max-[768px]:order-2 max-[768px]:mb-10 max-[768px]:w-full max-[768px]:py-5 max-[768px]:flex-row max-[768px]:justify-center">
        <FaFacebookF className=" hover-firstColor cursor-pointer" />
        <FaInstagram className=" hover-firstColor cursor-pointer" />
        <FaTwitter className=" hover-firstColor cursor-pointer" />
      </div>

      <div className="content flex-1 flex flex-col gap-7 max-[768px]:order-1">
        <h1 className="font-semibold text-balance text-titleColor text-4xl max-[768px]:text-3xl">
          NEW WATCH COLLECTIONS B720
        </h1>
        <p className="text-textColorLight  text-balance ">
          Latest arrival of the new imported watches of the B720 series, with a
          modern and resistant design.
        </p>
        <span className="text-firstColor font-semibold text-xl">$1245</span>
        <div className="buttons text-textColor flex items-center">
          <button className="py-3 px-5 h-fit bg-textColorLight capitalize hover:bg-actionColor transition duration-200">
            discover
          </button>
          <button className="bg-buttonColor py-4 px-5 uppercase hover:bg-actionColor transition duration-200">
            add to cart
          </button>
        </div>
      </div>

      <div className="image flex-1 bg-firstColor max-[768px]:order-3 w-full">
        <img
          src={landingImage}
          className="m-auto max-w-[100%]"
          loading="lazy"
          alt="rolex"
        />
      </div>
    </div>
  );
}

export default Landing;
