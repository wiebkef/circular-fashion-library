import React, { useEffect, useState, useContext } from "react";
import axios from "../../axiosInstance";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

function UserWardrobe() {
  const { user } = useContext(AuthContext);
  const id = user.id;
  const [wardrobe, setWardrobe] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/items/wardrobe/${id}`)
      .then((res) => {
        setWardrobe(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleRemove = (itemId, index) => {
    wardrobe[index].user_id = null;
    wardrobe[index].remove = true;
    axios
      .put(`/api/items/${itemId}`, wardrobe[index])
      .then((res) => {
        setWardrobe(wardrobe.filter((item) => item.id !== itemId));
      })
      .catch((e) => console.log(e));
    console.log(wardrobe[index]);
  };

  console.log(wardrobe);

  return (
    <div className="mx-5">
      <div className="container sm:max-w-[600px] mx-auto my-16 bg-white py-8 px-6 border shadow-md rounded-lg">
        <h1 className="mb-6 text-3xl font-bold">Your current wardrobe</h1>
        <div className="w-full">
          {wardrobe.map((item, index) => (
            // <Link to={`/shop/${item.id}`} key={item.id}>
            <div
              key={item.id}
              className="w-full bg-white shadow-md border hover:shadow-xl transition duration-500 overflow-hidden rounded-lg h-full flex flex-col md:flex-row mb-8"
            >
              <div className="h-80 overflow-hidden rounded-t-lg basis-1/2">
                <img
                  className="w-full h-full object-cover rounded-t-lg rounded-b-lg"
                  src={item.images}
                  alt={item.title}
                />
              </div>
              <div className="px-4 py-1 basis-1/2">
                <h3 className="text-start text-xl font-medium text-gray-900 mb-2">
                  {item.brand} {item.title}
                </h3>
                <p className="text-start text-sm text-gray-500">
                  Color: {item.color}
                </p>
                <p className="text-start text-sm text-gray-500">
                  Size: {item.size}
                </p>
                <div className="text-start flex flex-wrap justify-start mt-1 mb-3 py-1">
                  <ul className="text-start flex flex-wrap justify-start mt-0 mb-0 py-0">
                    {item.features.map((feature) => (
                      <li
                        key={feature.id}
                        className="bg-brand text-xs rounded-full py-1 px-3 mb-3 mr-2"
                      >
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleRemove(item.id, index)}
                  className="flex justify-center mt-5 py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-100 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                >
                  <i className="bi bi-arrow-counterclockwise mr-2"></i> Return
                </button>
              </div>
            </div>
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserWardrobe;
