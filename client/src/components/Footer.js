import myLogo2 from "../images/logo_CFL-rounded.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="bg-white border-t shadow-lg w-full">
      {/* Service */}
      <div className="grid grid-cols-1 sm:grid-cols-none xl:w-4/5 xl:mx-auto 2xl:w-3/4">
        <div className="mb-3 sm:flex sm:justify-between sm:pt-5 md:grid md:grid-cols-3 lg:grid-cols-2 xl:mb-6">
          {/* Logo */}
          <div className="m-3 sm:mt-0 lg:mb-0">
            <img
              className="w-60 sm:h-20 sm:w-auto md:h-auto lg:w-2/3 xl:w-1/2 block mx-auto"
              src={myLogo2}
              alt="Logo Circular Fashion Library"
            />
          </div>
          {/* Newsletter */}
          <div className="md:col-span-2 md:ml-2 lg:col-span-1 lg:mt-3">
            <h3 className="text-gray-700 uppercase mb-2 font-semibold sm:text-left lg:text-lg lg:mb-3">
              Subscribe to our newsletter
            </h3>
            <form>
              <div className="flex flex-wrap items-center">
                <div className="w-80 sm:w-2/3 lg:w-3/5 mb-2 sm:mb-0 mx-auto lg:mx-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white border border-gray-400 py-2 px-4 w-full rounded-lg focus:outline-brand focus:border-brand focus:ring-0"
                  />
                </div>
                <div className="mx-auto block sm:w-1/3 md:inline-flex md:pl-2 lg:w-1/6 lg:mx-0">
                  <button
                    type="submit"
                    className="bg-gray-500 hover:bg-brand text-white py-2 px-4 rounded-md w-full sm:w-auto"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:mb-2">
          {/* Company */}
          <div className="w-full  mt-4 sm:mt-0">
            <h4 className="text-gray-700 uppercase mb-2 text-base font-semibold">
              Company
            </h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="/subscription"
                  className="text-gray-600 hover:text-brand"
                >
                  How it works
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-600 hover:text-brand">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="w-full ">
            <h4 className="text-gray-700 uppercase mb-2 text-base font-semibold">
              Account
            </h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="!#" className="text-gray-600 hover:text-brand">
                  Log In
                </a>
              </li>
              <li className="mb-2">
                <a href="!#" className="text-gray-600 hover:text-brand">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          {/* Service */}
          <div className="w-full lg:mb-3">
            <h3 className="text-gray-700 uppercase mb-2 text-base font-semibold">
              Service
            </h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/cart" className="text-gray-600 hover:text-brand">
                  Cart
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/account/wardrobe"
                  className="text-gray-600 hover:text-brand"
                >
                  Wardrobe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="flex flex-wrap items-center justify-center border-t border-gray-300 py-6">
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Circular Fashion Library. All rights
          reserved.
        </div>
        <div className="flex">
          <a href="!#" className="h-5 w-5 text-gray-600 hover:text-brand mx-2">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="!#" className="text-gray-600 hover:text-brand mx-2">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="!#" className="text-gray-600 hover:text-brand mx-2">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="!#" className="text-gray-600 hover:text-brand mx-2">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="!#" className="text-gray-600 hover:text-brand mx-2">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
