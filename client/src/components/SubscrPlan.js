import { CheckIcon } from "@heroicons/react/20/solid";
import { AuthContext } from "../context/Auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const includedFeatures = [
  "Exchange of fashion items at any time",
  "Take up to three clothing items concurrently",
  "Returned items are repaired and cleaned by our team",
  "Receive an official member t-shirt",
];

export default function SubscrPlan() {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Circular Fashion Library
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Become a member of the Circular Fashion Library and never run out of
            style! You can take up to three clothing items and exchange some or
            all, which will be repaired and cleaned by our team. Your favorite
            pieces you can keep as long as you wish!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Member Benefits
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              With your membership you have access to our constantly growing
              fashion library without worrying about the price. You can select
              the clothing items you want just like in any other fashion shop
              and exchange them at any time for new ones.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text font-semibold leading-6 text-brand">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="text-start mt-8 grid grid-cols-1 gap-4 text leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-brand"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Join the Circular Fashion Revolution!
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $29
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    EUR
                  </span>
                </p>
                {!loading && user ? (
                  <button className="w-full flex justify-center mt-8 py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover">
                    Become a member
                  </button>
                ) : (
                  <button
                    onClick={navigate("/signup")}
                    className="w-full flex justify-center mt-8 py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover"
                  >
                    Sign up
                  </button>
                )}
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  By subscribing, you'll be supporting a sustainable and
                  eco-friendly fashion industry. Instead of contributing to the
                  fast fashion industry's negative impact, you'll be taking part
                  in a circular economy where clothing items are reused and
                  given a second life.{" "}
                </p>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Don't miss out on this opportunity to refresh your wardrobe
                  sustainably and guilt-free. Subscribe now and start enjoying
                  the benefits of the Circular Fashion Library!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
