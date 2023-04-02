import myLogo2 from "../images/logo_CFL-rounded.png";

function Footer() {
  return (
    <footer id="footer" className="bg-white border-t shadow-lg w-full">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className=" sm:px-6 lg:px-auto flex justify-between items-center">

        {/* Logo */}
        <div className="ml-4 flex lg:ml-24">
          <span className="sr-only">Circular Fashion Library</span>
          <img className="h-20 w-auto" src={myLogo2} alt="brand-logo" />
        </div>
        {/* Subscribe */}
        <div className="w-full sm:w-1/2 lg:w-2/3 mb-4">
          <h3 className="text-gray-700 uppercase mb-2 font-semibold text-left">
            Subscribe to our newsletter
          </h3>
          <form>
            <div className="flex flex-wrap items-center">
              <div className="w-full sm:w-2/3 lg:w-3/5 mb-3 sm:mb-0">
                <input
                  type="email"
                  placeholder= "Enter your email"
                  className="bg-white border border-gray-400 py-2 px-4 w-full rounded-lg focus:outline-brand focus:border-brand"
                />
              </div>
              <div className="w-full sm:w-1/3 lg:w-1/6">
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

        {/* Service */}
        <div className="flex flex-wrap mb-6">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h4 className="text-gray-700 uppercase mb-2 text-base font-semibold">
              Account
            </h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-brand">
                  Manage Account
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-brand">
                  Admin & Customer
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-brand">
                  Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h4 className="text-gray-700 uppercase mb-2 text-base font-semibold">
              Company
            </h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-brand">
                  Who we are
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-brand">
                  Shop Сoncept
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-brand">
                  Sustainability
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-brand">
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-brand">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-brand">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-gray-700 uppercase mb-2 text-base font-semibold">
              Customer Service
            </h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-brand">
                  Shipping
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-brand">
                  Returns
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-brand">
                  Warrantly
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-brand">
                  Secure Payments
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-brand">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-wrap items-center justify-between border-t border-gray-300 pt-6">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Circular Fashion Library. All rights
            reserved.
          </div>
           <div className="flex">
        <a href="#" className="h-5 w-5 text-gray-600 hover:text-brand mx-2">
        <i className="bi bi-facebook"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-brand mx-2">
        <i className="bi bi-instagram"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-brand mx-2">
        <i className="bi bi-twitter"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-brand mx-2">
        <i className="bi bi-linkedin"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-brand mx-2">
        <i className="bi bi-youtube"></i>
        </a>
      </div> 
        </div>
      </div>
    </footer>
  );
}
export default Footer;
