import axios from "../axiosInstance";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signup", user)
      .then((res) => {
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.errors);
      });
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-6 border shadow-md rounded-lg sm:px-10">
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
                placeholder="Email address"
                required
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              />
              <label
                for="email"
                className="absolute left-0 -top-3.5 bg-white ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                Email address
              </label>
            </div>
          </div>
          <div>
            <div className="mt-8 relative">
              {error.password && (
                <p className="text-red-700">{error.password.message}</p>
              )}
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                placeholder="Password"
                required
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              />
              <label
                for="password"
                className="absolute left-0 -top-3.5 bg-white ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                Password
              </label>
            </div>
          </div>
          <div>
            <div className="mt-8 relative">
              {error.confirmPassword && (
                <p className="text-red-700">{error.confirmPassword.message}</p>
              )}
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={user.confirmPassword}
                placeholder="Confirm password"
                required
                className="peer w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand placeholder-transparent"
                onChange={handleChange}
              />
              <label
                for="confirmPassword"
                className="absolute left-0 -top-3.5 bg-white ml-3 px-1.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
              >
                Confirm password
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
