import React, { useState } from "react";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { getSizes } from "../utils/getFilters";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState();

  const handleSubmit = (e) => {
    console.log("helloooooooooooooooooooooo");

    e.preventDefault();
    console.log(filters);
  };

  return (
    <>
      {!isOpen ? (
        <button onClick={() => setIsOpen(!isOpen)}>
          <FunnelIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
        </button>
      ) : (
        <div
          className={`top-0 right-0 fixed  bg-white w-[75vw] p-6  text-white  h-full text-left shadow-lg ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between">
            <h2 className=" text-2xl text-black ">Filters </h2>
            <button onClick={() => setIsOpen(!isOpen)}>
              <XMarkIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
            </button>
          </div>
          <form>
            {/* Sizes */}
            <div>
              <select
                className="form-select border-transparent"
                name="size"
                aria-label="Select a size"
              >
                <option value="">Size </option>
                {getSizes().map((size, index) => {
                  return (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  );
                })}
              </select>
            </div>
            <button onSubmit={handleSubmit} className="bg-brand">
              Apply filters
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Sidebar;
