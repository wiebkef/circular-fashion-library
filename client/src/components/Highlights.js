import React, { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { Link } from "react-router-dom";

const Highlights = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/items?status=available&limit=8&page=1")
      .then((res) => {
        setItems(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h2 id="allitems" className="text-4xl my-6">Check out our new arrivals</h2>

      <div className="container mx-auto grid max-w-2xl grid-cols-1 sm:gap-x-6 gap-y-6 px-4 sm:py-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-7xl lg:px-4">
        {items.map((item) => (
          <Link to={`/shop/${item.id}`} key={item.id}>
            <div className="bg-white shadow-md hover:shadow-lg overflow-hidden rounded-lg max-w-sm mx-auto h-full">
              <div className="w-full h-80 overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-full object-cover rounded-b-lg"
                  src={item.images}
                  alt={item.title}
                />
              </div>
              <div className="px-4 py-1 flex flex-col items-between content-between justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.brand} {item.title}
                  </h3>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{item.color}</p>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>

                  <div className="mt-1 mb-3 py-1 px-1">
                    <ul className="flex flex-wrap justify-center mt-0 mb-0 py-0 px-3 space-x-2">
                      {item.features.map((feature) => (
                        <li
                          key={feature.id}
                          className="bg-brand text-xs rounded-full px-2 py-1 mb-3"
                        >
                          {feature.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="my-8 sm:mt-6 sm:mb-10">
        <Link
          to="/shop?status=available&page=1"
          className="py-2 px-3 border border-transparent rounded-md shadow-sm text-md font-medium text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover"
        >
          Ready for more?
        </Link>
      </div>
    </>
  );
};

export default Highlights;
