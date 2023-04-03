import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/Auth";

function Member() {
  const { user, loading } = useContext(AuthContext);
  return (
    <>
      {!loading && (
        <>{user?.role === "member" ? <Outlet /> : <Navigate to="/login" />}</>
      )}
    </>
  );
}

export default Member;
