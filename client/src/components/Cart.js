import { useShopContext } from "../context/Shop";
import { Link } from "react-router-dom";


const Cart = () => {
  const {newWardrobe} = useShopContext();
  console.log("newWardrobe:", newWardrobe);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden  my-8">
      <div className="px-4 py-2 bg-brand text-white font-bold">
        Shopping Cart
      </div>
      <div className="p-4">
        {newWardrobe.length > 0 ? (
          newWardrobe.map((item) => (
            <div key={item.sku} className="flex items-center my-4">
              <div className="flex-shrink-0">
                <img
                  className="w-16 h-16 object-cover rounded-lg"
                  src={item.images}
                  alt={item.title}
                />
              </div>
              <div className="ml-2">
                <h4 className="font-bold">{item.title}</h4>
                <p>{item.color}</p>
                <p>{item.size}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="flex justify-between bg-gray-100 p-4">
        <Link to="/shop" className="text-brand font-bold hover:text-white">
          Back to Shop
        </Link>
        <Link
          to="/checkout"
          className="bg-brand text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-900"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
