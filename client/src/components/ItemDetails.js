import React, { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";
// import Carousel from "./Carousel";
import { useShopContext } from "../context/Shop";

function ItemDetails() {
  const [item, setItem] = useState();
  const { id } = useParams();
  const { cart, cartDispatch } = useShopContext();

  useEffect(() => {
    axios
      .get(`/api/items/${id}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {item && (
        <div className="mx-5">
          <div className="container xl:w-[1140px] mx-auto my-16 bg-white py-8 px-6 border shadow-md rounded-lg">
            <div className="flex flex-col md:flex-row">
              <div className="basis-1/2">
                {item.images?.map((img, index) => (
                  <img
                    key={index}
                    className="mx-auto"
                    src={img}
                    alt={item.title}
                  />
                ))}
              </div>
              <div className="basis-1/2 text-start my-4 md:ml-6">
                <div className="text-gray-600">{item.category.name}</div>
                <div className="text-3xl mb-2">
                  {item.brand} {item.title}
                </div>
                <div className="text-sm">
                  <span className="mr-2">{item.color} </span>
                  <span className="text-gray-400 mr-2">|</span> Size:{" "}
                  {item.size}
                </div>
                <div className="mt-3">{item.short_description}</div>
                <ul className="flex my-5">
                  {item.features.map((feature) => (
                    <li
                      key={feature.id}
                      className="text-xs bg-brand rounded-full mr-2 py-1 px-3"
                    >
                      {feature.name}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    cartDispatch({
                      type: "addToCart",
                      payload: { item },
                    })
                  }
                  className="w-full flex justify-center mt-8 py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover"
                >
                  Add to wardrobe
                </button>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="basis-full">
                <Accordion content={item.description} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetails;
