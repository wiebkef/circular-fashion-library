import FilterSidebar from "./FilterSidebar";
import ItemCards from "./ItemCards";

export default function Items() {
    return (
        <>
        <FilterSidebar />
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