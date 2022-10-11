import React from "react";
import { NavLink } from "react-router-dom";

function MiniSideBar() {
  return (
    <>
    {/* <!--===================== Offcanvas sidebar ======================--> */}
      <div
        className="offcanvas offcanvas-start sidebarOffcanvas bg-theme2"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header p-4 pb-0 align-items-start">
          <NavLink
            to="/dashboard"
            className="offcanvas-title"
            id="offcanvasExampleLabel"
          >
            <img
              className="offcanvasLogo"
              src="../assets/images/image-8.png"
              alt=""
            />
          </NavLink>
          <button
            type="button"
            className="btn p-1 pt-0 border-0"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <img
              className="offcanvasClose"
              src="../assets/images/image-72.png"
              alt="image-72"
            />
          </button>
        </div>
        <div className="offcanvas-body p-4">
          <div className="sidebarItemBox mt-0">
            <NavLink
              className="text-decoration-none text-white itemHover active"
              to="/dashboard"
            >
              <div className="me-3 sidebarItem">
                <img
                  src="../assets/images/image-77.png"
                  alt="nav item image"
                  className="sidebarItemImage"
                />
              </div>
              <div
                className="dashboardText text-center"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-title="Dashboard"
              >
                Dashboard
              </div>
              <span className="ms-auto">
                <img
                  className="rightArrow"
                  src="../assets/images/image-165.png"
                  alt="image-165"
                />
              </span>
            </NavLink>
          </div>
          <div className="sidebarItemBox">
            <NavLink
              className="text-decoration-none text-white itemHover"
              to="/dashboard"
            >
              <div className="me-3 sidebarItem">
                <img
                  src="../assets/images/image-78.png"
                  alt="nav item image"
                  className="sidebarItemImage"
                />
              </div>
              <div className="dashboardText text-center">Events</div>
              <span className="ms-auto">
                <img
                  className="rightArrow"
                  src="../assets/images/image-165.png"
                  alt="image-165"
                />
              </span>
            </NavLink>
          </div>
          <div className="sidebarItemBox">
            <NavLink
              className="text-decoration-none text-white itemHover"
              to="/dashboard"
            >
              <div className="me-3 sidebarItem">
                <img
                  src="../assets/images/image-79.png"
                  alt="nav item image"
                  className="sidebarItemImage"
                />
              </div>
              <div className="dashboardText text-center">Clubs</div>
              <span className="ms-auto">
                <img
                  className="rightArrow"
                  src="../assets/images/image-165.png"
                  alt="image-165"
                />
              </span>
            </NavLink>
          </div>
          <div className="sidebarItemBox">
            <NavLink
              className="text-decoration-none text-white itemHover"
              to="/dashboard"
            >
              <div className="me-3 sidebarItem">
                <img
                  src="../assets/images/image-80.png"
                  alt="nav item image"
                  className="sidebarItemImage"
                />
              </div>
              <div className="dashboardText text-center">Health Articles</div>
              <span className="ms-auto">
                <img
                  className="rightArrow"
                  src="../assets/images/image-165.png"
                  alt="image-165"
                />
              </span>
            </NavLink>
          </div>
        </div>
      </div>

       {/* <!--===================== top Offcanvas searchbar ======================--> */}
      <div
        className="offcanvas offcanvas-top searchTopoffcanvas"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header pb-0">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            What are you Looking for?
          </h5>
          <button
            type="button"
            className="btn p-1 border-0"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <img
              className="offcanvasClose"
              src="../assets/images/image-72.png"
              alt=""
            />
          </button>
        </div>
        <div className="offcanvas-body">
          <form className="position-relative w-100">
            <input
              className="form-control shadow-none bg-light border-0 w-100 searchInput"
              type="search"
              placeholder="Search here"
              aria-label="Search"
            />
            <img
              className="SearchIcon"
              src="../assets/images/image-71.png"
              alt="image-71"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default MiniSideBar;
