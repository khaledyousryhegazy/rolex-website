import { BiSolidWatch } from "react-icons/bi";

function Logo() {
  return (
    <div className="uppercase w-fit text-sm font-semibold flex items-center gap-1">
      <BiSolidWatch className="text-titleColor text-xl" />
      <span>rolex</span>
    </div>
  );
}

export default Logo;
