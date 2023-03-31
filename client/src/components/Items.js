import FilterSidebar from "./FilterSidebar";
import ItemCards from "./ItemCards";
import { useState } from "react";

export default function Items() {
  const [allFilters, setFilters] = useState();

  const selectFilters = (filter) => {
    console.log("FILTER HERE", filter);
  };

  return (
    <>
      <FilterSidebar selectFilters={selectFilters} />
      <ItemCards />
    </>
  );
}

//   export default function Items() {
//     return (
//         <div className="flex flex-row">
//         <div className="w-full lg:w-1/4">
//         <FilterSidebar />
//         </div>
//   <div className="w-full lg:w-3/4">
//         <ItemCards />
//         </div>
// </div>
//     )
//   }
