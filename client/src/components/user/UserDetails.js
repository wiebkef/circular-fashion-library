import { useState, useEffect, useContext } from "react";
import axios from "../../axiosInstance";
import { getCountries } from "../../utils/userProps";
import { AuthContext } from "../../context/Auth";
import { Link } from "react-router-dom";

function UserDetails() {
  const { user, loading } = useContext(AuthContext);
  const id = user.id;

  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    password: "",
    confirmPassword: "",
    street: "",
    house_no: "",
    supplement: "",
    zip: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    if (id) {
      !loading &&
        axios
          .get(`/api/users/${id}`)
          .then((res) => {
            setUserDetails(res.data);
          })
          .catch((e) => console.log(e));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  /*   const handleImages = (e) => {
    // const files = e.target.files;
    // e.target.files.forEach((file) => setImages([...images, file]));
    console.log(e.target.files);
    console.log(images);
  }; */
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/users/${id}`, userDetails)
      .then((res) => {
        // navigate(`/admin/users/${id}`);
        window.location.reload();
        // setReload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="my-16 sm:mx-auto sm:w-full sm:max-w-xl">
      <div className="bg-white py-8 px-6 border shadow-md rounded-lg sm:px-10">
        <div className="flex flex-row justify-between">
          <div>
            <Link to="/account">
              <i className="bi bi-chevron-left text-xl"></i>
            </Link>
          </div>
          <h1 className="mb-16 text-3xl font-bold">
            Update details and address
          </h1>
          <div>&nbsp;</div>
        </div>
        <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="mt-1 relative">
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
          <div>
            <div className="mt-1 relative">
              {error.password && (
                <p className="text-red-700">{error.password.message}</p>
              )}
              <input
                type="password"
                id="password"
                name="password"
                placeholder={id ? "Change password" : "Initial password"}
                required={id ? false : true}
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              />
              <label
                htmlFor="password"
                className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                {id
                  ? "Change password (leave empty to keep current password)"
                  : "Initial password"}
              </label>
            </div>
          </div>
          <div>
            <div className="mt-1 relative">
              {error.confirmPassword && (
                <p className="text-red-700">{error.confirmPassword.message}</p>
              )}
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder={
                  id
                    ? "Confirm password (leave empty to keep current password)"
                    : "Confirm initial password"
                }
                required={id ? false : true}
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              />
              <label
                htmlFor="confirmPassword"
                className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                {id
                  ? "Confirm password (leave empty to keep current password)"
                  : "Confirm initial password"}
              </label>
            </div>
          </div>
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
            <button
              type="submit"
              className="w-full flex justify-center mt-8 py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserDetails;
