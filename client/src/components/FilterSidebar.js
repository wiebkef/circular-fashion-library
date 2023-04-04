import { Fragment, useState, useEffect } from "react";
import axios from "../axiosInstance";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import {
  getSizes,
  getBrands,
  getColors,
  getCategories,
  getFeatures,
} from "../utils/getFilters";
import ItemCards from "./ItemCards";
import { useNavigate } from "react-router-dom";

export default function FilterSidebar() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  //const [features, setFeatures] = useState([]); // get features from DB
  const [filters, setFilters] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const notEmptyQuery = Object.entries(filters).map(([k, v]) => {
      if (v !== "") {
        return `${k}=${v}`;
      }
    });
    notEmptyQuery.push("status=available");
    const queryString = notEmptyQuery.join("&");
    console.log("KKKKKKK", queryString);
    navigate({
      pathname: "/shop",
      search: `?${queryString}`,
    });
    setMobileFiltersOpen(false);
    setFilters({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  /*  useEffect(() => {
    axios
      .get(`/api/features`)
      .then((res) => {
        setFeatures(res.data);
      })

      .catch((e) => console.log(e));
  }, []); */

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
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
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form
                    onSubmit={handleSubmit}
                    className="mt-4 border-t border-gray-200"
                  >
                    {/* Gender */}
                    <div className="border-t border-gray-200 py-2">
                      <select
                        className="form-select border-transparent w-full "
                        name="gender"
                        aria-label="Select a size"
                        onChange={handleChange}
                      >
                        <option>Gender</option>
                        <option value="unisex">Unisex</option>
                        <option value="female">Women</option>
                        <option value="male">Men</option>
                      </select>
                    </div>

                    {/* Sizes */}
                    <div className="border-t border-gray-200 py-2">
                      <select
                        className="form-select border-transparent w-full "
                        name="size"
                        aria-label="Select a size"
                        onChange={handleChange}
                      >
                        <option value="">Size</option>
                        {getSizes().map((size, index) => {
                          return (
                            <option key={index} value={size}>
                              {size}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    {/* Colors */}
                    <div className="border-t border-gray-200 py-2">
                      <select
                        className="form-select border-transparent w-full"
                        name="color"
                        aria-label="Select a Color"
                        onChange={handleChange}
                      >
                        <option value="">Color</option>
                        {getColors().map((color, index) => {
                          return (
                            <option key={index} value={color}>
                              {color}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    {/* Features */}
                    <div className="border-t border-gray-200 py-2">
                      <select
                        className="form-select border-transparent w-full"
                        name="feat"
                        aria-label="Select a feature"
                        onChange={handleChange}
                      >
                        <option value="">Feature</option>
                        {getFeatures().map((feature) => {
                          return (
                            <option key={feature.id} value={feature.name}>
                              {feature.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    {/* Categories */}
                    <div className="border-t border-gray-200 py-2">
                      <select
                        className="form-select border-transparent w-full"
                        name="cat"
                        aria-label="Select a feature"
                        onChange={handleChange}
                      >
                        <option value="">Category</option>
                        {getCategories().map((category, index) => {
                          return (
                            <option key={index} value={category.name}>
                              {category.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <button className="ml-4 mt-8 py-2 px-3 border border-transparent rounded-md shadow-sm text-md text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover">
                      Apply filters
                    </button>
                    <Disclosure
                      as="div"
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                Features
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {getFeatures().map((feature) => (
                                <div
                                  key={feature.id}
                                  className="flex items-center"
                                >
                                  <input
                                    id={feature.id}
                                    name={feature.id}
                                    value={feature.id}
                                    type="radio"
                                    checked={filters.feat === feature.id}
                                    //onChange={handleFilterChange}
                                    className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
                                  />
                                  <label
                                    htmlFor={feature.id}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {feature.name}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Desktop filter dialog */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              All Items
            </h1>

            <div className="flex items-center">
              {/*  <Menu as="div" className="relative inline-block text-left">
                {/* <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-brand"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                       {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu> */}

              {/*     <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-brand sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button> */}
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-brand sm:ml-6"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form onSubmit={handleSubmit} className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {/*
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))} */}
                </ul>

                <Disclosure as="div" className="border-b border-gray-200 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-brand">
                          <span className="font-medium text-gray-900">
                            Features
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {getFeatures().map((feature) => (
                            <div key={feature.id} className="flex items-center">
                              <input
                                id={feature.id}
                                name={feature.id}
                                value={feature.id}
                                type="radio"
                                checked={filters.feat === feature.id}
                                // onChange={handleFilterChange}
                                className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
                              />
                              <label
                                htmlFor={feature.id}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {feature.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </form>
              {/* Product grid */}
              <div className="lg:col-span-3">
                <ItemCards />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
