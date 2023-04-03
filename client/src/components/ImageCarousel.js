// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function ImageCarousel({ images }) {
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`/api/items/${id}`)
//       .then((res) => {
//         setPets(res.data);
//       })

//       .catch((e) => console.log(e));
//   }, []);

//   const filterList = items.filter((item) => item.images === images);
//   console.log(filterList);

//   return (
//     <>
//       <div
//         style={{
//           maxWidth: 1200,
//           marginLeft: "auto",
//           marginRight: "auto",
//           marginTop: 10,
//         }}>
//         <Carousel show={4}>
//           {items.map((e) => (
//             <div key={e._id}>
//               <div style={{ padding: 8 }}>
//                 <Link to={`/items/${e.id}`}>
//                   <img
//                     src={e?.image}
//                     alt="placeholder"
//                     className="w-full h-48 object-cover"
//                     // style={{ width: "100%" }}
//                   />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </>
//   );
// }