import { useState, useEffect, useContext } from "react";
import axios from "../axiosInstance";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";
import { getCountries } from "../utils/userProps";
import { AuthContext } from "../context/Auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Checkout() {
  const { user, loading } = useContext(AuthContext);

  const [agreed, setAgreed] = useState(false);
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    street: "",
    house_no: "",
    supplement: "",
    zip: "",
    city: "",
    country: "",
  });
  const [error, setError] = useState({
    first_name: "",
    last_name: "",
    email: "",
    street: "",
    house_no: "",
    supplement: "",
    zip: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    !loading &&
      axios
        .get(`/api/users/${user.id}`)
        .then((res) => {
          setUserDetails(res.data);
        })
        .catch((e) => console.log(e));
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...user, [name]: value });
  };

  return (
    <div className="bg-white px-6 sm:py-10 lg:px-6 py-14">
      <div className="py-0 px-10 flex justify-left bg-white">
        <Link
          to="/cart"
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-brand lg:px-10"
        >
          <i className="bi bi-chevron-left"></i> Back to Cart
        </Link>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Checkout
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Please fill out the contact and shipping information
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-4 max-w-xl sm:mt-5">
        <h3 className="pb-4 text-base font-bold tracking-tight text-gray-900 sm:text-lg text-left">
          CONTACT & SHIPPING INFORMATION
        </h3>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <div className="mt-2.5 relative">
              {error.email && (
                <p className="text-red-700">{error.email.message}</p>
              )}
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                placeholder="Email"
                required
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                Email
              </label>
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex gap-3 mt-1 relative">
              <div className="relative inline-block w-1/2">
                {error.first_name && (
                  <p className="text-red-700">{error.first_name.message}</p>
                )}
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={userDetails.first_name || ""}
                  placeholder="First Name"
                  className="inline-block peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                  onChange={handleChange}
                />
                <label
                  htmlFor="first_name"
                  className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
                >
                  First Name
                </label>
              </div>
              <div className="relative inline-block w-1/2">
                {error.last_name && (
                  <p className="text-red-700">{error.last_name.message}</p>
                )}
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={userDetails.last_name || ""}
                  placeholder="Last Name"
                  className="inline-block peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                  onChange={handleChange}
                />
                <label
                  htmlFor="last_name"
                  className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
                >
                  Last Name
                </label>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex gap-3 mt-1 relative">
              <div className="relative inline-block w-3/4">
                {error.street && (
                  <p className="text-red-700">{error.street.message}</p>
                )}
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={userDetails.street || ""}
                  placeholder="Street"
                  className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                  onChange={handleChange}
                />
                <label
                  htmlFor="street"
                  className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
                >
                  Street
                </label>
              </div>
              <div className="relative inline-block w-1/4">
                {error.house_no && (
                  <p className="text-red-700">{error.house_no.message}</p>
                )}
                <input
                  type="text"
                  id="house_no"
                  name="house_no"
                  value={userDetails.house_no || ""}
                  placeholder="Number"
                  className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                  onChange={handleChange}
                />
                <label
                  htmlFor="house_no"
                  className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
                >
                  Number
                </label>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex gap-3 mt-1 relative">
              <div className="relative inline-block w-1/4">
                {error.zip && (
                  <p className="text-red-700">{error.zip.message}</p>
                )}
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={userDetails.zip || ""}
                  placeholder="Zip code"
                  className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                  onChange={handleChange}
                />
                <label
                  htmlFor="zip"
                  className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
                >
                  Zip code
                </label>
              </div>
              <div className="relative inline-block w-3/4">
                {error.city && (
                  <p className="text-red-700">{error.city.message}</p>
                )}
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={userDetails.city || ""}
                  placeholder="City"
                  className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                  onChange={handleChange}
                />
                <label
                  htmlFor="city"
                  className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
                >
                  City
                </label>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-1 relative">
              {error.country && (
                <p className="text-red-700">{error.country.message}</p>
              )}
              <select
                id="country"
                name="country"
                value={userDetails.country || ""}
                placeholder="Country"
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              >
                <option value="">Choose country</option>
                {getCountries().map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <label
                htmlFor="country"
                className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                Country
              </label>
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-brand" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-brand">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-brand px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
}
