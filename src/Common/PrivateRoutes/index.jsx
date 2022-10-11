import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import MiniSideBar from "../Sidebar/MiniSideBar";

const PrivateRoutes = () => {
  return localStorage.getItem("token") ? (
    <>
      {" "}
      <div className="container-fluid dashboardMain vh-100 bg-light">
        <div className="row mainInner h-100">
          <Sidebar />
          <Outlet />
        </div>
      </div>
      <MiniSideBar />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
