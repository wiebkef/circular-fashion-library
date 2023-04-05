import React, { useEffect, useState } from "react";
import axios from "../axiosInstance";
import { Link, useLocation } from "react-router-dom";
import Pagination from "./Pagination";

const useQueryString = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

function ItemCards({ page, setPage }) {
  const [items, setItems] = useState([]);
  const queryString = useQueryString();
  console.log("TTTTTT", queryString);
  /*  let url;
  Object.keys(queryString).length === 0
    ? (url = `/api/items?status=available`)
    : (url = `/api/items?${queryString}`); */
  const url = `/api/items?${queryString}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setItems(res.data))
      .catch((e) => console.log(e));
  }, [url]);

  return (
    <>
      <div className="container mx-auto py-8 grid gap-8 max-w-sm md:min-w-[90%] md:grid-cols-2 lg:grid-cols-3 lg:min-w-[95%] 3xl:grid-cols-4 3xl:gap-6 mb-4">
        {items.map((item) => (
          <Link to={`/shop/${item.id}`} key={item.id}>
            <div className="bg-white shadow-md overflow-hidden rounded-lg h-full">
              <div className="w-full h-80 overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-full object-cover rounded-t-lg rounded-b-lg"
                  src={item.images}
                  alt={item.title}
                />
              </div>
              <div className="px-4 py-1">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.color}</p>
                <p className="text-sm text-gray-500">
                  Available sizes: {item.size}
                </p>
                <div className="flex flex-wrap justify-center mt-1 mb-3 py-1 px-1">
                  <ul className="flex flex-wrap justify-center mt-0 mb-0 py-0 px-3 space-x-2">
                    {item.features.map((feature) => (
                      <li
                        key={feature.id}
                        className="bg-brand text-sm rounded-full py-0.75 px-1 mb-3"
                      >
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} url={url} />
    </>
  );
}

export default ItemCards;
