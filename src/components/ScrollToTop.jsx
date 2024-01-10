import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <FaArrowUp
          onClick={goToTop}
          className="w-10  z-40 h-10 fixed bottom-10 left-10 text-firstColor cursor-pointer bg-boxColor shadow-lg p-2.5"
        />
      )}
    </div>
  );
};
export default ScrollToTop;
