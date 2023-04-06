import { Fragment, useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import myLogo from "../images/logo_CFL.png";
import FlagIcon from "../images/germany-flag-icon.svg";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useShopContext } from "../context/Shop";
import { getBrands, getCategories, getFeatures } from "../utils/getFilters";

const gender = [
  {
    id: "women",
    name: "Women",
  },
  {
    id: "unisex",
    name: "Unisex",
  },
  {
    id: "men",
    name: "Men",
  },
];

const cats = [
  {
    id: "women",
    name: "Women",
    featured: [
      {
        name: "Browse All Clothes",
        href: "/shop?gender=women&status=available&page=1",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
        imageAlt:
          "Models sitting back to back, wearing Basic Tee in black and bone.",
      },
      {
        name: "Basic T-Shirts",
        href: "/shop?gender=women&cat=T-Shirts&status=available&page=1",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
        imageAlt:
          "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
      },
    ],
  },
  {
    id: "unisex",
    name: "Unisex",
    featured: [
      {
        name: "Browse All Clothes",
        href: "/shop?gender=unisex&status=available&page=1",
        imageSrc:
          "https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1",
        imageAlt:
          "Models sitting back to back, wearing Basic Tee in black and bone.",
      },
      {
        name: "Basic T-Shirts",
        href: "/shop?gender=unisex&cat=T-Shirts&status=available&page=1",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
        imageAlt:
          "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
      },
    ],
  },
  {
    id: "men",
    name: "Men",
    featured: [
      {
        name: "Browse All Clothes",
        href: "/shop?gender=men&status=available&page=1",
        imageSrc:
          "https://images.pexels.com/photos/670786/pexels-photo-670786.jpeg?auto=compress&cs=tinysrgb&w=640&h=959&dpr=1",
        imageAlt:
          "Drawstring top with elastic loop closure and textured interior padding.",
      },
      {
        name: "Basic T-Shirts",
        href: "/shop?gender=men&cat=T-Shirts&status=available&page=1",
        imageSrc:
          "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=1",

        imageAlt:
          "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState();
  const [features, setFeatures] = useState();

  const { user, logout } = useContext(AuthContext);
  const { cart } = useShopContext();
  const [apparel, setApparel] = useState("women");

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((e) => console.log(e));

    getFeatures()
      .then((res) => {
        setFeatures(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-brand"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {cats.map((gender) => (
                        <Tab
                          onClick={() => setApparel(gender.id)}
                          key={gender.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-brand text-grey-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium"
                            )
                          }
                        >
                          {gender.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>

                  {/* Highlights with images */}
                  <Tab.Panels as={Fragment}>
                    {cats.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pt-10 pb-8"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p
                                aria-hidden="true"
                                className="mt-1 text-gray-600"
                              >
                                Get now
                              </p>
                            </div>
                          ))}
                        </div>
                        {/* Highlights with images end */}

                        {/* Mobile filters */}
                        <div>
                          <p className="font-medium text-gray-900">
                            Categories
                          </p>
                          <ul className="mt-6 flex flex-col space-y-6">
                            {categories &&
                              categories.map((category) => (
                                <li key={category.id} className="flow-root">
                                  <Link
                                    to={`/shop?gender=${apparel}&cat=${category.name}&status=available&page=1`}
                                    className="-m-2 block p-2 text-gray-500"
                                    onClick={() => setOpen(false)}
                                  >
                                    {category.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Features</p>
                          <ul className="mt-6 flex flex-col space-y-6">
                            {features &&
                              features.map((feature) => (
                                <li key={feature.id} className="flow-root">
                                  <Link
                                    to={`/shop?gender=${apparel}&feat=${feature.name}&status=available&page=1`}
                                    className="-m-2 block p-2 text-gray-500"
                                    onClick={() => setOpen(false)}
                                  >
                                    {feature.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Brands</p>
                          <ul className="mt-6 flex flex-col space-y-6">
                            {getBrands().map((brand, index) => (
                              <li key={index} className="flow-root">
                                <Link
                                  to={`/shop?gender=${apparel}&brand=${brand}&status=available&page=1`}
                                  className="-m-2 block p-2 text-gray-500"
                                  onClick={() => setOpen(false)}
                                >
                                  {brand}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Mobile filters end */}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <a
                      href="/about"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      About
                    </a>
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {user ? (
                    <>
                      <div className="flow-root">
                        {user.role === "admin" || user.role === "employee" ? (
                          <Link
                            to="/admin"
                            className="-m-2 block p-2 font-medium text-gray-900"
                          >
                            Admin {user.email}
                          </Link>
                        ) : (
                          <Link
                            to="/account"
                            className="-m-2 block p-2 font-medium text-gray-900"
                          >
                            User {user.email}
                          </Link>
                        )}
                      </div>
                      <div className="flow-root">
                        <Link
                          onClick={logout}
                          className="-m-2 block p-2 font-medium text-gray-900"
                        >
                          Log Out
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flow-root">
                        <NavLink
                          to="/login"
                          className="-m-2 block p-2 font-medium text-gray-900"
                          onClick={() => setOpen(false)}
                        >
                          Log In
                        </NavLink>
                      </div>
                      <div className="flow-root">
                        <NavLink
                          to="/signup"
                          className="-m-2 block p-2 font-medium text-gray-900"
                          onClick={() => setOpen(false)}
                        >
                          Create account
                        </NavLink>
                      </div>
                    </>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <a
          href="#footer"
          className="flex h-10 items-center justify-center bg-brand px-4 text-md font-medium text-white sm:px-6 lg:px-8  hover:text-gray-400"
        >
          Subscribe to our newsletter!
        </a>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-20 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400  hover:text-brand lg:hidden"
                onClick={() => {
                  setOpen(true);
                  setApparel("women");
                }}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-7 w-7" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <NavLink to="/">
                  <span className="sr-only">Circular Fashion Library</span>
                  <img className="h-20 w-auto" src={myLogo} alt="brand-logo" />
                </NavLink>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {cats.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              onClick={() => setApparel(category.id)}
                              className={classNames(
                                open
                                  ? "border-brand text-brand focus-visible:outline-none"
                                  : "border-transparent text-gray-700 hover:text-brand focus-visible:outline-none",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-base font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white z-10">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    {/* Images */}
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Get now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    {/* Images end */}

                                    {/* Prefilter selections */}
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      <div>
                                        <p className="font-medium text-gray-900 text-left">
                                          Brands
                                        </p>
                                        <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                          {getBrands().map((brand, index) => (
                                            <li key={index} className="flex">
                                              <Popover.Button
                                                as={Link}
                                                to={`/shop?gender=${apparel}&brand=${brand}&status=available&page=1`}
                                                className="hover:text-gray-800"
                                              >
                                                {brand}
                                              </Popover.Button>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <p className="font-medium text-gray-900 text-left">
                                          Categories
                                        </p>
                                        <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                          {categories &&
                                            categories.map((categorie) => (
                                              <li
                                                key={categorie.id}
                                                className="flex"
                                              >
                                                <Popover.Button
                                                  as={Link}
                                                  to={`/shop?gender=${apparel}&cat=${categorie.name}&status=available&page=1`}
                                                  className="hover:text-gray-800"
                                                >
                                                  {categorie.name}
                                                </Popover.Button>
                                              </li>
                                            ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <p className="font-medium text-gray-900 text-left">
                                          Features
                                        </p>
                                        <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                          {features &&
                                            features.map((feature) => (
                                              <li
                                                key={feature.id}
                                                className="flex"
                                              >
                                                <Popover.Button
                                                  as={Link}
                                                  to={`/shop?gender=${apparel}&feat=${feature.name}&status=available&page=1`}
                                                  className="hover:text-gray-800"
                                                >
                                                  {feature.name}
                                                </Popover.Button>
                                              </li>
                                            ))}
                                        </ul>
                                      </div>
                                      {/* Prefilter selections end*/}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  <a
                    href="/about"
                    className="flex items-center text-base font-medium text-gray-700 hover:text-brand"
                  >
                    About
                  </a>
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                {user ? (
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    {user.role === "admin" || user.role === "employee" ? (
                      <Link
                        to="/admin"
                        className="text-sm font-medium text-gray-700"
                      >
                        {user.email}
                      </Link>
                    ) : (
                      <Link
                        to="/account"
                        className="text-sm font-medium text-gray-700"
                      >
                        {user.email}
                      </Link>
                    )}
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <Link
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Log Out
                    </Link>
                  </div>
                ) : (
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <NavLink
                      to="/login"
                      className="text-base font-medium text-gray-700 hover:text-brand"
                    >
                      Log In
                    </NavLink>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <NavLink
                      to="/signup"
                      className="text-base font-medium text-gray-700 hover:text-brand"
                    >
                      Create account
                    </NavLink>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  </div>
                )}

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-7 w-7 flex-shrink-0 text-gray-400 group-hover:text-brand"
                      aria-hidden="true"
                    />
                    {/* <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span> */}
                    {/* {cart.length ? (
                      <div className="cartCount">{cart.length}</div>
                    ) : null} */}
                    <Link to="cart">Cart</Link>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
