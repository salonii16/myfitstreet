import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate()
  return (
    <div className="col rightPart h-100">
      <div className="row rightPartInner h-100 flex-column flex-nowrap">
        <div className="col-12 mainHeader bg-white">
          <nav className="navbar navbar-expand-lg bg-white h-100">
            <div className="container-fluid">
              <NavLink
                className="btn p-0 border-0 d-lg-none"
                data-bs-toggle="offcanvas"
                to="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <img
                  className="me-2"
                  src="../assets/images/image-69.png"
                  alt="sidebar close image"
                />
              </NavLink>
              <img
                className="me-2 d-none togglebtn sidebarmenuIcon"
                src="../assets/images/image-69.png"
                alt="sidebar close image"
                id=""
              />
              <img
                className="me-2 d-none togglebtn sidebarRightArrow"
                src="../assets/images/image-114.png"
                alt="image-114"
                id=""
              />
              <NavLink
                className="navbar-brand p-1 d-none d-sm-inline-block"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <div
                className="d-flex align-items-center ms-auto"
                id="navbarSupportedContent"
              >
                <form className="position-relative ms-auto me-4 d-none d-lg-inline-block">
                  <input
                    className="form-control shadow-none bg-light border-0 searchInput"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <img
                    className="SearchIcon"
                    src="../assets/images/image-71.png"
                    alt="image-71"
                  />
                  <button
                    className="btn p-0 border-0 SearchRemove"
                    type="button"
                  >
                    <img
                      className="inputIcon"
                      src="../assets/images/image-72.png"
                      alt="image-72"
                    />
                  </button>
                </form>
                <ul className="navbar-nav flex-row align-items-center gap-3 gap-lg-0">
                  <li className="nav-item d-lg-none">
                    <button
                      className="btn p-1 border-0"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasTop"
                      aria-controls="offcanvasTop"
                    >
                      <img
                        className="inputIcon"
                        src="../assets/images/image-71.png"
                        alt="search icon image"
                      />
                    </button>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link py-0"
                      aria-current="page"
                      to="#"
                    >
                      <img
                        className="messageIcon"
                        src="../assets/images/image-73.png"
                        alt="image"
                      />
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link py-0" to="#">
                      <img
                        className="messageIcon"
                        src="../assets/images/image-74.png"
                        alt="image"
                      />
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link py-0 d-flex align-items-center dashBoardToggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        className="me-0 me-md-1 userImage"
                        src="../assets/images/image-75new.png"
                        alt="image"
                      />
                      <img
                        className="dropdownArrow d-none d-md-inline-block"
                        src="../assets/images/image-43.png"
                        alt="image"
                      />
                    </NavLink>

                    <ul className="dropdown-menu dropdown-menu-end position-absolute rounded-0 border-0 shadow">
                      <li>
                        <span className="dropdown-item" style={{cursor:'pointer'}} onClick={()=>{localStorage.clear()
                             window.location.reload()}} >
                          <img
                            className="me-2 userDropitem"
                            src="../assets/images/logout.png"
                            alt=""
                          />{" "}
                          Logout
                        </span>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="#">
                          <img
                            className="me-2 userDropitem"
                            src="../assets/images/help.png"
                            alt=""
                          />{" "}
                          Help
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="#">
                          <img
                            className="me-2 userDropitem"
                            src="../assets/images/setting.png"
                            alt=""
                          />{" "}
                          Setting
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-12 mainBody flex-fill overflow-hidden">
          <div className="row mainBodyInner h-100">
            <div className="col-12 col-md-5 leftBodyPart flex-fill h-100 overflow-hidden">
              <div className="row h-100 p-3 p-lg-4 customScroll">
                <div className="col-12 sectionOne p-3 bg-white">
                  <div className="row mx-0">
                    <div className="col-12 imgDetail">
                      <div className="imgOuter mx-auto border border-theme1 rounded-pill">
                        <img
                          className="w-100 h-100"
                          src="../assets/images/image-75.png"
                          alt=""
                          onClick = {()=>navigate('/profile')}
                        />
                      </div>
                      <div className="name text-center mt-2">Joseph Martin</div>
                    </div>
                    <div className="col-12 followers">
                      <div className="row py-2 py-xl-3 border-bottom justify-content-center">
                        <div className="col-4 text-center">
                          <span className="d-block value">100</span>
                          <span className="title text-muted mt-1 d-flex justify-content-center">
                            Activities
                          </span>
                        </div>
                        <div className="col-4 text-center border-start border-end">
                          <span className="d-block value">90</span>
                          <span className="title text-muted mt-1 d-flex justify-content-center">
                            Followers
                          </span>
                        </div>
                        <div className="col-4 text-center">
                          <span className="d-block value">35</span>
                          <span className="title text-muted mt-1 d-flex justify-content-center">
                            Following
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 followers">
                      <div className="row pt-2 pt-xl-3 justify-content-center">
                        <div className="col-4 text-center">
                          <span className="title text-muted">BMI</span>
                          <span className="d-block value">31.0</span>
                        </div>
                        <div className="col-4 text-center">
                          <span className="title text-muted">Weight</span>
                          <span className="d-block value">90 kg</span>
                        </div>
                        <div className="col-4 text-center">
                          <span className="title text-muted">Height</span>
                          <span className="d-block value">234 cm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 sectionTwo p-3 bg-white mt-4">
                  <ul className="list-unstyled p-0 m-0 d-flex justify-content-between">
                    <li className=" text-center">
                      <div className="imgOuter mx-auto rounded-pill align-items-center d-flex justify-content-center">
                        <img
                          className=""
                          src="../assets/images/image-86.png"
                          alt=""
                        />
                      </div>
                      <div className="points mt-2">
                        <span className="d-block value">2000</span>
                        <span className="title text-muted">Overall Points</span>
                      </div>
                    </li>
                    <li className=" text-center">
                      <div className="imgOuter purple mx-auto rounded-pill align-items-center d-flex justify-content-center">
                        <img
                          className=""
                          src="../assets/images/image-87.png"
                          alt=""
                        />
                      </div>
                      <div className="points mt-2">
                        <span className="d-block value">05</span>
                        <span className="title text-muted">Rank</span>
                      </div>
                    </li>
                    <li className=" text-center">
                      <div className="imgOuter orange mx-auto rounded-pill align-items-center d-flex justify-content-center">
                        <img
                          className=""
                          src="../assets/images/image-88.png"
                          alt=""
                        />
                      </div>
                      <div className="points mt-2">
                        <span className="d-block value">90</span>
                        <span className="title text-muted">
                          Total Activities
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-12 sectionThree p-3 bg-white mt-4">
                  <div className="row mx-0">
                    <div className="col-12 px-0 todayDataHeader pb-2 pb-xl-3 border-bottom">
                      <div className="mainTitle">Today’s Data</div>
                    </div>
                    <div className="col-12 pt-3">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <div className="">
                            <img
                              className="w-100"
                              src="../assets/images/image-246.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="row">
                            <div className="col-12 my-2 d-flex align-items-center gap-2">
                              <div className="">
                                <img
                                  className="w-100"
                                  src="../assets/images/image-247.png"
                                  alt=""
                                />
                              </div>
                              <div className="text">
                                <span className="text-muted w-100 d-block">
                                  Calories
                                </span>
                                <b className="">1000</b>
                              </div>
                            </div>
                            <div className="col-12 my-2 d-flex align-items-center gap-2">
                              <div className="">
                                <img
                                  className="w-100"
                                  src="../assets/images/image-248.png"
                                  alt=""
                                />
                              </div>
                              <div className="text">
                                <span className="text-muted w-100 d-block">
                                  Km
                                </span>
                                <b className="">20</b>
                              </div>
                            </div>
                            <div className="col-12 my-2 d-flex align-items-center gap-2">
                              <div className="">
                                <img
                                  className="w-100"
                                  src="../assets/images/image-249.png"
                                  alt=""
                                />
                              </div>
                              <div className="text">
                                <span className="text-muted w-100 d-block">
                                  Move min
                                </span>
                                <b className="">30</b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 sectionFour p-3 bg-white mt-4">
                  <ul className="list-unstyled p-0 m-0 d-flex justify-content-between">
                    <li className=" text-center">
                      <div className="imgOuter mx-auto rounded-pill align-items-center d-flex justify-content-center">
                        <img
                          className=""
                          src="../assets/images/image-99.png"
                          alt=""
                        />
                      </div>
                      <div className="points mt-2">
                        <span className="d-block value">102</span>
                        <span className="title text-muted">Joined Event</span>
                      </div>
                    </li>
                    <li className=" text-center">
                      <div className="imgOuter sky mx-auto rounded-pill align-items-center d-flex justify-content-center">
                        <img
                          className=""
                          src="../assets/images/image-100.png"
                          alt=""
                        />
                      </div>
                      <div className="points mt-2">
                        <span className="d-block value">102</span>
                        <span className="title text-muted">Medals Won</span>
                      </div>
                    </li>
                    <li className=" text-center">
                      <div className="imgOuter lightGreen mx-auto rounded-pill align-items-center d-flex justify-content-center">
                        <img
                          className=""
                          src="../assets/images/image-101.png"
                          alt=""
                        />
                      </div>
                      <div className="points mt-2">
                        <span className="d-block value">102</span>
                        <span className="title text-muted">Joined Club</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-12 sectionFive p-3 bg-white mt-4">
                  <div className="row mx-0">
                    <div className="col-12 px-0 todayDataHeader pb-2 pb-xl-3 border-bottom d-flex align-items-center justify-content-between ">
                      <div className="mainTitle">Last Activity</div>
                      <NavLink
                        to=""
                        className="textBtn text-theme1 text-decoration-none"
                      >
                        View All
                      </NavLink>
                    </div>
                    <div className="col-12 px-0">
                      <div className="activity pt-3">
                        <div className="row">
                          <div className="col-auto">
                            <div className="imgActivity mx-auto rounded-pill align-items-center d-flex justify-content-center">
                              <img src="../assets/images/image-81.png" alt="" />
                            </div>
                          </div>
                          <div className=" col activityTitle align-items-center d-grid px-0">
                            <span className="d-block">Evening Walk</span>
                            <span className="text-muted d-block">
                              10 Mar . 10:30 PM . 90 pts
                            </span>
                          </div>
                          <div className=" col-auto activityStatus">
                            <span className="text-theme1 p-1 px-2 px-xl-3 rounded-pill">
                              Running
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-7 rightBodyPart flex-fill h-100 overflow-hidden">
              <div className="row h-100 p-3 p-lg-4 customScroll">
                <div className="col-12 todayTarget p-3 bg-white">
                  <div className="row mx-0">
                    <div className="col-12 px-0 todayDataHeader pb-2 pb-xl-3 border-bottom">
                      <div className="mainTitle">Today’s Target</div>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className=" col-3 col-sm mt-3 badges text-center">
                          <div className="img mx-auto">
                            <img
                              className="w-100"
                              src="../assets/images/image-241.png"
                              alt=""
                            />
                          </div>
                          <div className="title mt-2">
                            <div className="">2 km</div>
                          </div>
                        </div>
                        <div className=" col-3 col-sm mt-3 badges text-center">
                          <div className="img mx-auto">
                            <img
                              className="w-100"
                              src="../assets/images/image-242.png"
                              alt=""
                            />
                          </div>
                          <div className="title mt-2">
                            <div className="">3 km</div>
                          </div>
                        </div>
                        <div className=" col-3 col-sm mt-3 badges text-center">
                          <div className="img mx-auto">
                            <img
                              className="w-100"
                              src="../assets/images/image-243.png"
                              alt=""
                            />
                          </div>
                          <div className="title mt-2">
                            <div className="">5km</div>
                          </div>
                        </div>
                        <div className=" col-3 col-sm mt-3 badges text-center">
                          <div className="img mx-auto">
                            <img
                              className="w-100"
                              src="../assets/images/image-244.png"
                              alt=""
                            />
                          </div>
                          <div className="title mt-2">
                            <div className="">100</div>
                          </div>
                        </div>
                        <div className=" col-3 col-sm mt-3 badges text-center">
                          <div className="img mx-auto">
                            <img
                              className="w-100"
                              src="../assets/images/image-245.png"
                              alt=""
                            />
                          </div>
                          <div className="title mt-2">
                            <div className="">200</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 earnedBadges p-3 bg-white mt-4">
                  <div className="row mx-0">
                    <div className="col-12 px-0 todayDataHeader pb-2 pb-xl-3 border-bottom">
                      <div className="mainTitle">Earned Badges</div>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className=" col-3 col-sm mt-3 badges text-center">
                          <div className="img mx-auto">
                            <img
                              className="w-100"
                              src="../assets/images/image-89.png"
                              alt=""
                            />
                          </div>
                          <div className="title">
                            <div className=" distance position-relative rounded-pill mx-auto mb-1 p-xl-1 bg-white">
                              500 km
                            </div>
                            <div className="text-muted">Running</div>
                          </div>
                        </div>
                        <div className=" col-3 col-sm mt-3 badges text-center">
                          <div className="img mx-auto">
                            <img
                              className="w-100"
                              src="../assets/images/image-90.png"
                              alt=""
                            />
                          </div>
                          <div className="title">
                            <div className="distance position-relative rounded-pill mx-auto mb-1 p-xl-1 bg-white">
                              100 km
                            </div>
                            <div className="text-muted">Cycling</div>
                          </div>
                        </div>
                        <div className=" col-3 col-sm mt-3 badges text-center">
                          <div className="img mx-auto">
                            <img
                              className="w-100"
                              src="../assets/images/image-91.png"
                              alt=""
                            />
                          </div>
                          <div className="title">
                            <div className=" distance position-relative rounded-pill mx-auto mb-1 p-xl-1 bg-white">
                              100 m
                            </div>
                            <div className="text-muted">Time</div>
                          </div>
                        </div>
                        <div className=" col-3 col-sm mt-3 badges text-center">
                          <div className="img mx-auto">
                            <img
                              className="w-100"
                              src="../assets/images/image-92.png"
                              alt=""
                            />
                          </div>
                          <div className="title">
                            <div className="distance position-relative rounded-pill mx-auto mb-1 p-xl-1 bg-white">
                              10
                            </div>
                            <div className="text-muted">Activity</div>
                          </div>
                        </div>
                        <div className=" col-3 col-sm mt-3 badges text-center">
                          <div className="img mx-auto">
                            <img
                              className="w-100"
                              src="../assets/images/image-93.png"
                              alt=""
                            />
                          </div>
                          <div className="title">
                            <div className="distance position-relative rounded-pill mx-auto mb-1 p-xl-1 bg-white">
                              10 day
                            </div>
                            <div className="text-muted">Streak</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 filters p-3 bg-white mt-4">
                  <div className="row mx-0">
                    <div className="col-12 px-0 todayDataHeader pb-2">
                      <div className="row align-items-center">
                        <div className="col mainTitle">Filters</div>
                        <div className="col-auto">
                          <button
                            type="button"
                            className="btn textBtn text-theme1 border-0 shadow-none p-0"
                          >
                            Clear Filters
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 px-0">
                      <ul className="p-0 m-0 list-unstyled d-flex gap-2 gap-xl-3 overflow-auto">
                        <li className="d-inline-block mt-1 mt-sm-0">
                          <input
                            type="checkbox"
                            className="btn-check d-none"
                            id="running"
                            autocomplete="off"
                          />
                          <label
                            className="btn btnBorderd btn-outline-theme1 rounded-pill"
                            for="running"
                          >
                            Running
                          </label>
                        </li>
                        <li className="d-inline-block mt-1 mt-sm-0">
                          <input
                            type="checkbox"
                            className="btn-check d-none"
                            id="walking"
                            autocomplete="off"
                          />
                          <label
                            className="btn btnBorderd btn-outline-theme1 rounded-pill"
                            for="walking"
                          >
                            Walking
                          </label>
                        </li>
                        <li className="d-inline-block mt-1 mt-sm-0">
                          <input
                            type="checkbox"
                            className="btn-check d-none"
                            id="cycling"
                            autocomplete="off"
                          />
                          <label
                            className="btn btnBorderd btn-outline-theme1 rounded-pill"
                            for="cycling"
                          >
                            Cycling
                          </label>
                        </li>
                        <li className="d-inline-block mt-1 mt-sm-0">
                          <input
                            type="checkbox"
                            className="btn-check d-none"
                            id="skipping"
                            autocomplete="off"
                          />
                          <label
                            className="btn btnBorderd btn-outline-theme1 rounded-pill"
                            for="skipping"
                          >
                            Skipping
                          </label>
                        </li>
                        <li className="d-inline-block mt-1 mt-sm-0">
                          <input
                            type="checkbox"
                            className="btn-check d-none"
                            id="jumping"
                            autocomplete="off"
                          />
                          <label
                            className="btn btnBorderd btn-outline-theme1 rounded-pill"
                            for="jumping"
                          >
                            Jumping
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 px-0">
                      <div className="row">
                        <div className="col-4 col-sm-4 mt-3">
                          <div className="dropdown">
                            <button
                              className="btn border dropeDownBtn d-flex align-items-center justify-content-between w-100"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              All Time{" "}
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <NavLink className="dropdown-item" to="#">
                                  Action
                                </NavLink>
                              </li>
                              <li>
                                <NavLink className="dropdown-item" to="#">
                                  Another action
                                </NavLink>
                              </li>
                              <li>
                                <NavLink className="dropdown-item" to="#">
                                  Something else here
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-4 col-sm-4 mt-3">
                          <div className="input-group">
                            <input
                              type="text"
                              placeholder="dd/mm/yyyy"
                              onfocus="(this.type='date')"
                              className="form-control dateInput shadow-none  position-relative"
                              id="startdate"
                            />
                          </div>
                        </div>
                        <div className="col-4 col-sm-4 mt-3">
                          <div className="input-group">
                            <input
                              type="text"
                              placeholder="dd/mm/yyyy"
                              onFocus="(this.type='date')"
                              className="form-control dateInput shadow-none  position-relative"
                              id="enddate"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 px-0 mt-4">
                      <div className="row">
                        <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                          <div className="row">
                            <div className="col-12 todayDataHeader ">
                              <div className="row align-items-center grphHeader">
                                <div className="col mainTitle">Activities</div>
                                <div className="col-auto d-flex gap-2 gap-xl-3">
                                  <button
                                    type="button"
                                    className="btn textBtn text-theme1 border shadow-none p-0"
                                  >
                                    <img
                                      className="w-75"
                                      src="../assets/images/image-81.png"
                                      alt=""
                                    />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn textBtn text-theme1 border shadow-none p-0"
                                  >
                                    <img
                                      className="h-75"
                                      src="../assets/images/image-82.png"
                                      alt=""
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mt-3">
                              <div className="grapOuter rounded pt-5">
                                <img
                                  className="w-100"
                                  src="../assets/images/image-102.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mt-4 mt-sm-0">
                          <div className="row">
                            <div className="col-12 todayDataHeader ">
                              <div className="row align-items-center grphHeader">
                                <div className="col mainTitle">
                                  Calories Burnt
                                </div>
                                <div className="col-auto d-flex gap-2 gap-xl-3">
                                  <button
                                    type="button"
                                    className="btn textBtn text-theme1 border shadow-none p-0"
                                  >
                                    <img
                                      className="w-75"
                                      src="../assets/images/image-81.png"
                                      alt=""
                                    />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn textBtn text-theme1 border shadow-none p-0"
                                  >
                                    <img
                                      className="h-75"
                                      src="../assets/images/image-82.png"
                                      alt=""
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mt-3">
                              <div className="grapOuter rounded pt-5">
                                <img
                                  className="w-100"
                                  src="../assets/images/image-102.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mt-4">
                          <div className="row">
                            <div className="col-12 todayDataHeader ">
                              <div className="row align-items-center grphHeader">
                                <div className="col mainTitle">
                                  Activity Types
                                </div>
                                <div className="col-auto d-flex gap-2 gap-xl-3">
                                  <button
                                    type="button"
                                    className="btn textBtn text-theme1 border shadow-none p-0"
                                  >
                                    <img
                                      className="w-75"
                                      src="../assets/images/image-81.png"
                                      alt=""
                                    />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn textBtn text-theme1 border shadow-none p-0"
                                  >
                                    <img
                                      className="h-75"
                                      src="../assets/images/image-82.png"
                                      alt=""
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mt-3">
                              <div className="grapOuter rounded pt-5">
                                <img
                                  className="w-100"
                                  src="../assets/images/image-102.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mt-4">
                          <div className="row">
                            <div className="col-12 todayDataHeader ">
                              <div className="row align-items-center grphHeader">
                                <div className="col mainTitle">Cadence</div>
                                <div className="col-auto d-flex gap-2 gap-xl-3">
                                  <button
                                    type="button"
                                    className="btn textBtn text-theme1 border shadow-none p-0"
                                  >
                                    <img
                                      className="w-75"
                                      src="../assets/images/image-81.png"
                                      alt=""
                                    />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn textBtn text-theme1 border shadow-none p-0"
                                  >
                                    <img
                                      className="h-75"
                                      src="../assets/images/image-82.png"
                                      alt=""
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mt-3">
                              <div className="grapOuter rounded pt-5">
                                <img
                                  className="w-100"
                                  src="../assets/images/image-104.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mt-4">
                          <div className="row">
                            <div className="col-12 todayDataHeader ">
                              <div className="row align-items-center grphHeader">
                                <div className="col mainTitle">
                                  Distance Per Minute
                                </div>
                                <div className="col-auto d-flex gap-2 gap-xl-3">
                                  <button
                                    type="button"
                                    className="btn textBtn text-theme1 border shadow-none p-0"
                                  >
                                    <img
                                      className="w-75"
                                      src="../assets/images/image-81.png"
                                      alt=""
                                    />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn textBtn text-theme1 border shadow-none p-0"
                                  >
                                    <img
                                      className="h-75"
                                      src="../assets/images/image-82.png"
                                      alt=""
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mt-3">
                              <div className="grapOuter rounded pt-5">
                                <img
                                  className="w-100"
                                  src="../assets/images/image-105.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-12 col-lg-6 mt-4">
                          <div className="row">
                            <div className="col-12 todayDataHeader ">
                              <div className="row align-items-center grphHeader">
                                <div className="col mainTitle">
                                  Vertical Oscillation
                                </div>
                                <div className="col-auto d-flex gap-2 gap-xl-3">
                                  <button
                                    type="button"
                                    className="btn textBtn text-theme1 border shadow-none p-0"
                                  >
                                    <img
                                      className="w-75"
                                      src="../assets/images/image-81.png"
                                      alt=""
                                    />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn textBtn text-theme1 border shadow-none p-0"
                                  >
                                    <img
                                      className="h-75"
                                      src="../assets/images/image-82.png"
                                      alt=""
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mt-3">
                              <div className="grapOuter rounded pt-5">
                                <img
                                  className="w-100"
                                  src="../assets/images/image-106.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 otherSection p-3 bg-white mt-4">
                  <div className="row">
                    <div className="col-6 col-lg-6 col-xl-4">
                      <div className="card p-2 p-sm-3 h-100 text-center bg-white border-0">
                        <div className="cardImg mb-3 rounded-pill mx-auto">
                          <img
                            className="w-100 h-100"
                            src="../assets/images/image-107.png"
                            alt=""
                          />
                        </div>
                        <div className="txt">MYRETO</div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-6 col-xl-4">
                      <div className="card p-2 p-sm-3 h-100 card text-center bg-white border-0">
                        <div className="cardImg mb-3 rounded-pill mx-auto">
                          <img
                            className="w-100 h-100"
                            src="../assets/images/image-108.png"
                            alt=""
                          />
                        </div>
                        <div className="txt">TERETO</div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-6 col-xl-4 mt-3 mt-xl-0 ">
                      <div className="card p-2 p-sm-3 h-100 card text-center bg-white border-0">
                        <div className="cardImg mb-3 rounded-pill mx-auto">
                          <img
                            className="w-100 h-100"
                            src="../assets/images/image-109.png"
                            alt=""
                          />
                        </div>
                        <div className="txt">EARNED MEDALS</div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-6 col-xl-4 mt-3">
                      <div className="card p-2 p-sm-3 h-100 card text-center bg-white border-0">
                        <div className="cardImg mb-3 rounded-pill mx-auto">
                          <img
                            className="w-100 h-100"
                            src="../assets/images/image-110.png"
                            alt=""
                          />
                        </div>
                        <div className="txt">You</div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-6 col-xl-4 mt-3">
                      <div className="card p-2 p-sm-3 h-100 card text-center bg-white border-0">
                        <div className="cardImg mb-3 rounded-pill mx-auto">
                          <img
                            className="w-100 h-100"
                            src="../assets/images/image-111.png"
                            alt=""
                          />
                        </div>
                        <div className="txt">Followings</div>
                      </div>
                    </div>
                    <div className="col-6 col-lg-6 col-xl-4 mt-3">
                      <div className="card p-2 p-sm-3 h-100 card text-center bg-white border-0">
                        <div className="cardImg mb-3 rounded-pill mx-auto">
                          <img
                            className="w-100 h-100"
                            src="../assets/images/image-112.png"
                            alt=""
                          />
                        </div>
                        <div className="txt">Nearest Workout Zones</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
