import React, { useState, useContext, useEffect } from "react";
import axios from "../axiosInstance";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";
import Carousel from "./Carousel";
import {useShopContext} from "../context/Shop";


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
        <div>
          <div className="">
            {item.images?.map((img, index) => (
              <img key={index} className="mx-auto" src={img} />
            ))}
          </div>
          <div className="text-start m-4">
            <div className="text-gray-600">{item.category.name}</div>
            <div className="text-xl">{item.brand}</div>
            <div className="">{item.size}</div>

            <Accordion content={item.description} />

            <ul className="flex justify-between">
              {item.features.map((feature) => (
                <li
                  key={feature.id}
                  className="bg-brand rounded-full py-1 px-3"
                >
                  {feature.name}
                </li>
              ))}
            </ul>
          </div>
          <button  onClick={() => handleAddToWardrobe(item)}
          className="my-3 font-semibold text-gray-700 border border-gray-700 p-3 rounded-md">
            Add to wardrobe
          </button>
        </div>
      )}
    </>
  );
}

export default ItemDetails;
