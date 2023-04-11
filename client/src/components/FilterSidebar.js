import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/20/solid";
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
  const [features, setFeatures] = useState([]); // get features from utils
  const [categories, setCategories] = useState([]); // get categories from utils
  const [page, setPage] = useState(1);
  const [lastItem, setLastItem] = useState(false);

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
    //console.log("KKKKKKK", queryString);
    setPage(1);
    navigate({
      pathname: "/shop",
      search: `?${queryString}&page=1`,
    });
    setMobileFiltersOpen(false);
    setFilters({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

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

                    {/* Brands */}
                    <div className="border-t border-gray-200 py-2">
                      <select
                        className="form-select border-transparent w-full "
                        name="brand"
                        aria-label="Select a brand"
                        onChange={handleChange}
                      >
                        <option value="">Brand</option>
                        {getBrands().map((brand, index) => {
                          return (
                            <option key={index} value={brand}>
                              {brand}
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
                        {features &&
                          features.map((feature) => {
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
                        aria-label="Select a category"
                        onChange={handleChange}
                      >
                        <option value="">Category</option>
                        {categories &&
                          categories.map((category, index) => {
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
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* DESKTOP FILTER DIALOG */}
        <main id="allitems" className="mx-auto max-w-7xl px-4 sm:px-6 ">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              All Items
            </h1>

            {/* Button to open filters in mobile view START */}
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-brand sm:ml-6"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <FunnelIcon className="h-5 w-5 lg:hidden" aria-hidden="true" />
            </button>
            {/* Button to open filters in mobile view END */}
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5 xl:grid-cols-6">
              {/* Filters */}
              <form onSubmit={handleSubmit} className="hidden lg:block">
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

                {/* Brands */}
                <div className="border-t border-gray-200 py-2">
                  <select
                    className="form-select border-transparent w-full "
                    name="brand"
                    aria-label="Select a brand"
                    onChange={handleChange}
                  >
                    <option value="">Brand</option>
                    {getBrands().map((brand, index) => {
                      return (
                        <option key={index} value={brand}>
                          {brand}
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
                    {features &&
                      features.map((feature) => {
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
                    {categories &&
                      categories.map((category, index) => {
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
              </form>

              {/* Product grid */}
              <div className="lg:col-span-4 xl:col-span-5">
                <ItemCards
                  page={page}
                  setPage={setPage}
                  lastItem={lastItem}
                  setLastItem={setLastItem}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
