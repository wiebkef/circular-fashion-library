import { useState } from "react";
import { useShopContext } from "../context/Shop";
import { Link, useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import Incentives from "./Incentives";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, cartDispatch, wardrobe } = useShopContext();
  let [isOpen, setIsOpen] = useState(false);

  const handleGoToCheckout = (e) => {
    e.preventDefault();
    if (!cart.length) {
      alert("Please add at least one item to your cart in order to checkout.");
    } else {
      if (cart.length + wardrobe.length > 3) {
        setIsOpen(true);
      } else {
        navigate("/checkout");
      }
    }
  };

  return (
    <>
      <div>
        <div className="max-w-3xl mx-auto bg-white px-6 sm:py-10 lg:px-2 py-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Shopping Cart
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Items in your cart are not reserved — check out now to make them
              yours.
            </p>
          </div>
          <div className="border border-1 bg-white shadow rounded-lg overflow-hidden my-4">
            <div className="flex flex-col divide-y divide-gray-200">
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <div key={`${index}_${item.sku}`} className="flex py-5">
                    <div className="w-1/4 pl-5">
                      <img
                        className="w-full h-full object-center object-cover rounded-lg"
                        src={item.images}
                        alt={item.title}
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold pt-0">{item.title}</h4>
                        <button
                          className="text-gray-400 hover:text-brand py-4 px-5"
                          onClick={() =>
                            cartDispatch({
                              type: "removeFromCart",
                              payload: { id: item.id },
                            })
                          }
                        >
                          <svg
                            className="w-5 h-5 fill-current"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="heroicon-ui"
                              d="M3.707 3.293a1 1 0 011.414 0L8 6.586l2.879-2.88a1 1 0 011.414 1.414L9.414 8l2.88 2.879a1 1 0 01-1.414 1.414L8 9.414l-2.879 2.88a1 1 0 01-1.414-1.414L6.586 8 3.707 5.121a1 1 0 010-1.414z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex">
                        <div className="w-1/3">
                          <p className="text-gray-500 text-left">
                            Color: {item.color}
                          </p>
                          <p className="text-gray-500 text-left">
                            Size: {item.size}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="px-4 py-2">Your cart is empty.</p>
              )}
            </div>
            <div className="px-4 py-2 bg-gray-100 flex justify-between">
              <Link
                to="/shop"
                className="text-brand font-bold pt-2 hover:text-gray-500"
              >
                <i className="bi bi-chevron-left"></i> Back to Shop
              </Link>
              <button
                onClick={handleGoToCheckout}
                className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover"
              >
                Checkout <i className="bi bi-chevron-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
        <Incentives />
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm p-5 rounded bg-white">
            <Dialog.Title className="py-2 text-2xl">
              You can only have 3 items
            </Dialog.Title>
            <Dialog.Description className="py-2 text-lg">
              Please remove {cart.length + wardrobe.length - 3}{" "}
              {cart.length + wardrobe.length - 3 > 1 ? "items" : "item"} from
              your wardrobe
            </Dialog.Description>

            <p className="mb-5">
              Please proceed to your wardrobe and return at least{" "}
              {cart.length + wardrobe.length - 3}{" "}
              {cart.length + wardrobe.length - 3 > 1 ? "items" : "item"} in
              order to continue checkout.
              <br />
              <br />
              Or click Cancel to remove items from your cart.
            </p>

            <button
              onClick={() => navigate("/account/wardrobe/clean")}
              className="inline-block justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-100 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
            >
              Go To Wardrobe
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="pl-5 hover:text-gray-700"
            >
              Cancel
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Cart;
