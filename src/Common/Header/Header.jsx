import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Header({ background, login }) {
  const location = useLocation();
  console.log(location.pathname);
  const protectedR = ['/following','/activity','/dashboard']
  if(protectedR.includes(location.pathname)){
    return null
  }
  return (
    <>
      <header
        className={`navbar_header fixed-top ${
          location.pathname == "/about" ||
          location.pathname == "/" ||
          location.pathname == "/final2"
            ? "bg-transparent"
            : ""
        } header-top `}
      >
        <nav className="navbar navbar-expand-lg py-0 bg_container1 py-2">
          <div className="container bg_container2">
            <NavLink className="navbar-brand p-1" to="/final2">
              <img
                src="assets/images/image.png"
                alt="logo"
                className="d-inline-block align-text-top logo_image"
              />
            </NavLink>
            <NavLink
              className="d-lg-none"
              to="#"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <img
                className="sode_bar"
                src="assets/images/image-69.png"
                alt="Side_Bars"
              />
            </NavLink>
            <div
              className="collapse navbar-collapse justify-content-end
                        header_collapse"
              id="navbarNav"
            >
              <div className="d-flex gap-3 button_group">
                <div className="d-flex align-items-center gap-3">
                  <NavLink
                    to="/register"
                    className="btn
                                    text-decorection-none text-white reg_button
                                    border-muted bg-theme1 active"
                  >
                    Register
                  </NavLink>
                  {location.pathname == "/about" ||
                  location.pathname == "/" ||
                  location.pathname == "/final2" ||
                  location.pathname == "/privacy" ||
                  location.pathname == "/feature" ||
                  location.pathname == "/contact"||
                  location.pathname == "/career"||
                  location.pathname == "/terms" ? (
                    <NavLink
                      to="/login"
                      className="btn
                                        text-decorection-none text-black
                                        login_button border border-muted"
                    >
                      Log In
                    </NavLink>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        className="offcanvas offcanvas-end zi-999 offcan"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset shadow-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body body_offcanvas">
          <form className="row align-items-center gap-4 mx-3">
            <NavLink
              to="/register"
              className="col-12 text-decorection-none text-white reg_button active"
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="col-12 text-decorection-none text-black login_button border-muted"
            >
              Log In
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;
