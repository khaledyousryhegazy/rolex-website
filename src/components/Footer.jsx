import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer className="bg-bodyColor">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-titleColor uppercase">
                our information
              </h2>
              <ul className="text-textColorLight font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    1234-peru
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    la libertad 43210
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    123-456-789
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-titleColor uppercase ">
                about us
              </h2>
              <ul className="text-textColorLight font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    support center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    customer support
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    about us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    copy right
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-titleColor uppercase ">
                product
              </h2>
              <ul className="text-textColorLight font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    road bikes
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    mountain bikes
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    electric
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-titleColor uppercase ">
                social
              </h2>

              <ul className=" flex gap-5 text-textColor">
                <li className="cursor-pointer hover:text-firstColor text-lg transition duration-200">
                  <FaFacebookF />
                </li>
                <li className="cursor-pointer hover:text-firstColor text-lg transition duration-200">
                  <FaInstagram />
                </li>
                <li className="cursor-pointer hover:text-firstColor text-lg transition duration-200">
                  <FaGithub />
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-5 text-center">
            <span className="text-sm text-titleColor sm:text-center">
              © 2024{" "}
              <a
                className="text-firstColor font-semibold"
                href="https://github.com/khaledyousryhegazy"
                target="_blank"
                rel="noreferrer"
              >
                Khaled Yousry
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
