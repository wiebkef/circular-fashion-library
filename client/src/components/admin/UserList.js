import React, { useState, useEffect } from "react";
import axios from "../../axiosInstance";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import Pagination from "../Pagination";

const useQueryString = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};
const UserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState();
  const [id, setId] = useState(null);
  let [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [lastItem, setLastItem] = useState(false);
  const [tableChange, setTableChange] = useState(false);

  const queryString = useQueryString();
  const url = `/api/users?${queryString}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        if (res.data.length < 20) {
          setLastItem(true);
        }
        setUsers(res.data);
      })
      .catch((e) => console.log(e));
  }, [url, lastItem, tableChange]);

  const handleRemove = (id) => {
    axios
      .delete(`/api/users/${id}`)
      .then((res) => {
        setTableChange(!tableChange);
        navigate({ pathname: "/admin/users", search: `?${queryString}` });
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="container mt-5 mb-16 mx-auto">
      <div className="flex flex-row justify-between mt-6">
          <div>
            <Link to="/admin">
              <i className="bi bi-chevron-left text-xl"></i>
            </Link>
          </div>
          <h2 className="text-3xl font-semibold">Users</h2>
          <div>&nbsp;</div>
        </div>
        {users && (
          <>
            <table className="w-full table-auto m-4 mx-auto border-collapse text-left">
              <thead className="border-y-2 border-brand">
                <tr className="">
                  <th className="py-4 px-2">ID</th>
                  <th className="py-4 px-2">Name</th>
                  <th className="py-4 px-2">Email</th>
                  <th className="py-4 px-2">Address</th>
                  <th className="py-4 px-2">Role</th>
                  <th className="py-4 px-2 text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr key={user.id} className="border-y border-brand">
                      <td className="p-2">{user.id}</td>
                      <td className="p-2">{user?.name}</td>
                      <td className="p-2">{user.email}</td>
                      <td className="p-2">
                        {user?.street} {user?.house_no} {user?.zip} {user?.city}{" "}
                        {user?.country}
                      </td>
                      <td className="p-2">{user.role}</td>
                      <td className="p-2 text-end">
                        <Link to={`${user.id}`}>
                          <button className="ml-3 inline-block justify-center px-1 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand">
                            <i className="bi bi-pencil"></i>
                          </button>
                        </Link>
                        <button
                          type="button"
                          onClick={() => {
                            setId(user.id);
                            setIsOpen(true);
                          }}
                          className="ml-3 inline-block justify-center px-1 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-100 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                        >
                          <i className="bi bi-x text-xl"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
        <Pagination
          page={page}
          setPage={setPage}
          lastItem={lastItem}
          setLastItem={setLastItem}
        />
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
              Really delete?
            </Dialog.Title>
            <Dialog.Description className="py-2 text-lg">
              This will permanently delete the user.
            </Dialog.Description>

            <p>
              Are you sure you want to delete this user? The user will be
              permanently removed. This action cannot be undone.
            </p>

            <button
              onClick={() => {
                handleRemove(id);
                setIsOpen(false);
              }}
              className="inline-block justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-100 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
            >
              Delete permanently
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

export default UserList;
