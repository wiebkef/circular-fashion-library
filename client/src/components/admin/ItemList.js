import React, { useState, useEffect } from "react";
import axios from "../../axiosInstance";
import { Link } from "react-router-dom";
const ItemList = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    axios.get("/api/items").then((res) => {
      console.log("LLLLLLL", res.data);
      setItems(res.data);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold mt-6">Items</h2>
      {items && (
        <>
          <table className="w-full table-auto m-4 mx-auto border-2 rounded-lg border-bluegray border-collapse text-left">
            <thead className="">
              <tr className="">
                <th className="border-y-2 border-bluegray py-4 px-2">SKU</th>
                <th className="border-y-2 border-bluegray py-4 px-2">Title</th>
                <th className="border-y-2 border-bluegray py-4 px-2">Brand</th>
                <th className="border-y-2 border-bluegray py-4 px-2">Status</th>
                <th className="border-y-2 border-bluegray py-4 px-2">Size</th>
                <th className="border-y-2 border-bluegray py-4 px-2">Color</th>
                <th className="border-y-2 border-bluegray py-4 px-2">Edit</th>
                <th className="border-y-2 border-bluegray py-4 px-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.id} className=" ">
                    <td className="border-y border-bluegray p-2">{item.sku}</td>
                    <td className="border-y border-bluegray p-2">
                      {item.title}
                    </td>
                    <td className="border-y border-bluegray p-2">
                      {item.brand}
                    </td>
                    <td className="border-y border-bluegray p-2">
                      {item.status}
                    </td>
                    <td className="border-y border-bluegray p-2">
                      {item.size}
                    </td>
                    <td className="border-y border-bluegray p-2">
                      {item.color}
                    </td>
                    <td className="border-y border-bluegray p-2">
                      <Link to={`${item.id}`}>Edit</Link>
                    </td>
                    <td className="border-y border-bluegray p-2">Remove</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {items && <ul className="text-start"></ul>}
          <div>Pagination is missing here</div>
        </>
      )}
    </div>
  );
};

export default ItemList;
