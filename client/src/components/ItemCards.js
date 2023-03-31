import React, { useEffect, useState } from "react";
import axios from "../axiosInstance";
import { Link, useLocation } from "react-router-dom";

const useQueryString = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

function ItemCards() {
  const [items, setItems] = useState([]);
  const queryString = useQueryString();
  console.log("TTTTTT", queryString);
  useEffect(() => {
    axios
      .get(`/api/items?${queryString}`)
      .then((res) => setItems(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 py-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mb-4">
        {items.map((item) => (
          <Link to={`/items/${item.id}`} key={item.id}>
            <div className="bg-white shadow-md overflow-hidden rounded-lg">
              <div className="w-full h-80 overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-full object-cover rounded-t-lg rounded-b-lg p-2"
                  src={item.images}
                  alt={item.title}
                />
              </div>
              <div className="px-4 py-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.color}</p>
                <p className="text-sm text-gray-500">
                  Available sizes: {item.size}
                </p>
                <div className="flex flex-wrap mt-2">
                  <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-grey-400 bg-brand rounded">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ItemCards;
