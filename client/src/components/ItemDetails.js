import React, { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";
// import Carousel from "./Carousel";
import { useShopContext } from "../context/Shop";

function ItemDetails() {
  const [item, setItem] =
    useState(/* {
    id: 54,
    sku: 2545,
    user_id: null,
    category_id: 1,
    rented_at: null,
    short_description:
      "nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    size: "L",
    color: "Maroon",
    title: "pellentesque",
    brand: "sapien",
    status: "aenean",
    images: [
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    created_at: "2023-03-28T09:50:22.980Z",
    updated_at: "2023-03-28T09:50:22.980Z",
    features: [
      {
        id: 3,
        name: "sustainable",
        description: null,
        created_at: "2023-03-27T10:25:58.307Z",
        updated_at: "2023-03-27T10:25:58.307Z",
        item_feature: {
          created_at: "2023-03-29T09:47:53.562Z",
          updated_at: "2023-03-29T09:50:26.229Z",
          item_id: 54,
          feature_id: 3,
        },
      },
      {
        id: 4,
        name: "fair trade",
        description: null,
        created_at: "2023-03-27T10:27:08.484Z",
        updated_at: "2023-03-27T10:27:08.484Z",
        item_feature: {
          created_at: "2023-03-29T09:47:53.562Z",
          updated_at: "2023-03-29T09:50:26.229Z",
          item_id: 54,
          feature_id: 4,
        },
      },
      {
        id: 2,
        name: "recycled",
        description: null,
        created_at: "2023-03-27T10:25:36.602Z",
        updated_at: "2023-03-27T10:25:36.602Z",
        item_feature: {
          created_at: "2023-03-29T09:47:53.562Z",
          updated_at: "2023-03-29T09:50:26.229Z",
          item_id: 54,
          feature_id: 2,
        },
      },
    ],
    category: {
      id: 1,
      name: "T-Shirts",
      description:
        "Select from our circular and T-Shirts made of organic cotton",
      created_at: "2023-03-24T09:45:41.020Z",
      updated_at: null,
    },
  } */);
  //const [newWardrobe, setNewWardrobe] = useState([]);
  const { id } = useParams();
  //const { setNewWardrobe } = useShopContext();
  // const handleAddToWardrobe = (item) => {
  //   console.log("Adding item to wardrobe:", item);
  //   setNewWardrobe((currWardrobe) => [...currWardrobe, item]);
  // };

  // const handleAddToWardrobe = () => {
  //   setNewWardrobe([...newWardrobe, item]);
  //   console.log("newWardrobe after add:", newWardrobe);
  // };

  const { handleAddToWardrobe, newWardrobe } = useShopContext();
  console.log("newWardrobe after add:", newWardrobe);

  useEffect(() => {
    axios
      .get(`/api/items/${id}`)
      .then((response) => {
        console.log("GGGGNBBBB", response.data);
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
                  <span className="mr-2">Color {item.color} </span>
                  <span className="text-gray-400 mr-2">|</span> Size {item.size}
                </div>
                <div className="text-sm mt-3">{item.short_description}</div>
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
                  onClick={() => handleAddToWardrobe(item)}
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
