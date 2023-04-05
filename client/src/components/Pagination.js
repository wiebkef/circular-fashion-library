import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Pagination = ({ page = 1, setPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("currentPage", page);

  const previousPage = (e) => {
    e.preventDefault();
    const hasPage = searchParams.get("page");
    setPage(page - 1);

    console.log("BBBBBBBBBBBBBBBBBB", hasPage);
    if (hasPage) {
      searchParams.set("page", page - 1);
      console.log("PAGE", page - 1);
    } else {
      searchParams.append("page", page);
    }

    setSearchParams(searchParams);
  };

  const nextPage = (e) => {
    e.preventDefault();

    const hasPage = searchParams.get("page");
    setPage(page + 1);

    console.log("BBBBBBBBBBBBBBBBBB", hasPage);
    if (hasPage) {
      searchParams.set("page", page + 1);
      console.log("PAGE", page + 1);
    } else {
      searchParams.append("page", page);
    }

    setSearchParams(searchParams);
  };

  return (
    <div className="flex justify-center">
      {page !== 1 && (
        <button
          onClick={previousPage}
          className="ml-4 mt-8 py-2 px-3 border border-transparent rounded-md shadow-sm text-md text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>
      )}

      <div className="ml-4 mt-8 py-2 px-3 border border-transparent rounded-md shadow-md text-md text-gray-800 font-semibold  ">
        {page}
      </div>

      <button
        onClick={nextPage}
        className="ml-4 mt-8 py-2 px-3 border border-transparent rounded-md shadow-sm text-md text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
