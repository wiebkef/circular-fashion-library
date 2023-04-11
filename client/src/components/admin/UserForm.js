import { useState, useEffect } from "react";
import axios from "../../axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import { userRoles, getCountries } from "../../utils/userProps";

function UserForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
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
    role: "",
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
    role: "",
  });

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios
        .get(`/api/users/${id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((e) => console.log(e));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`/api/users/${id}`, user)
        .then((res) => {
          // navigate(`/admin/users/${id}`);
          window.location.reload();
          // setReload(true);
        })
        .catch((err) => {
          setError(err.response.data.errors);
        });
    } else {
      axios
        .post("/api/users", user)
        .then((res) => {
          navigate(`/admin/users/${res.data.id}`);
        })
        .catch((err) => {
          setError(err.response.data.errors);
        });
    }
  };

  return (
    <div className="my-16 sm:mx-auto sm:w-full sm:max-w-xl">
      <div className="bg-white py-8 px-6 border shadow-md rounded-lg sm:px-10">
        <h1 className="mb-16 text-3xl font-bold">
          {id ? "Update" : "Add a new"} user
        </h1>
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
                value={user.email}
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
                placeholder={
                  id
                    ? "Change password (leave empty to keep current password)"
                    : "Initial password"
                }
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
                  value={user.first_name || ""}
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
                  value={user.last_name || ""}
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
                  value={user.street || ""}
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
                  value={user.house_no || ""}
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
                  value={user.zip || ""}
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
                  value={user.city || ""}
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
                value={user.country || ""}
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
            <div className="mt-1 relative">
              {error.role && (
                <p className="text-red-700">{error.role.message}</p>
              )}
              <select
                id="role"
                name="role"
                value={user.role || ""}
                placeholder="Role"
                required
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              >
                <option value="">Choose role</option>
                {userRoles().map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <label
                htmlFor="role"
                className="absolute left-0 -top-3.5 bg-white rounded-md ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                Role
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center mt-8 py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover"
            >
              {id ? "Update" : "Add new"} user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
