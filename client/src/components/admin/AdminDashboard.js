import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <>
      <div className="container mx-auto my-16 sm:w-full sm:max-w-md bg-white py-8 px-6 border shadow-md rounded-lg sm:px-10">
        <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>
        <Link to="/admin/items/new">
          <button className="w-full flex justify-center my-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover">
            Create new item
          </button>
        </Link>
        <Link to="/admin/items">
          <button className="w-full flex justify-center my-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-hover">
            Item list
          </button>
        </Link>
      </div>
    </>
  );
}

export default AdminDashboard;
