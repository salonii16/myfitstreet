import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../../Common/Sidebar";

function YourActivity() {
  return (
    <div className="col rightPart h-100">
      <div className="row rightPartInner h-100 flex-column flex-nowrap">
        <div className="col-12 mainHeader bg-white">
          <nav className="navbar navbar-expand-lg bg-white h-100">
            <div className="container-fluid">
              <NavLink
                className="btn p-0 border-0 d-lg-none"
                data-bs-toggle="offcanvas"
                to="/offcanvasExample"
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
                      to="/"
                    >
                      <img
                        className="messageIcon"
                        src="../assets/images/image-73.png"
                        alt="image"
                      />
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link py-0" to="/">
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
                      to="/"
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
                        <NavLink className="dropdown-item" to="/">
                          <img
                            className="me-2 userDropitem"
                            src="../assets/images/logout.png"
                            alt=""
                          />{" "}
                          Logout
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/">
                          <img
                            className="me-2 userDropitem"
                            src="../assets/images/help.png"
                            alt=""
                          />{" "}
                          Help
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/">
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
            <div className="col-12 col-md-7 rightBodyPart  bg_body flex-fill h-100 overflow-hidden">
              <div className="row followinglayout p-3 p-lg-4 h-100 gap-4">
                <div className="col-10 filters">
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
                  </div>
                </div>
                <div className="col-12 px-0">
                  <div className="clendar">
                    <img
                      className="w-100"
                      src="../assets/images/image-240.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12 bg-white p-md-4 p-3 card_box_sh">
                  <div className="row mx-0 card_box_profile">
                    <div className="col-12">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-auto px-0">
                          <div className="d-flex align-items-center user_name_image">
                            <img
                              src="../assets/images/image-119.png"
                              className="user_image"
                              alt="Profile_pic"
                            />
                            <div className="profile_user_text mb-2">
                              <div className="user_name mb-2 ms-2">
                                Joseph Martin
                              </div>
                              <div className="time_and_Date ms-2">
                                10 Mar 2021, 10:30 PM{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col icon_dropy px-0">
                          <div className="dropdown box_drop text-end">
                            <span
                              className="dropdown-toggle toggle_Drop"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              type="button"
                            >
                              <img
                                src="../assets/images/image-210.png"
                                alt="icon_image"
                              />
                            </span>
                            <ul
                              className="dropdown-menu border-0 mt-2"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li className="">
                                <NavLink
                                  className="dropdown-item dorop_item"
                                  to="/"
                                >
                                  <span className="me-2">
                                    <img
                                      src="../assets/images/image-115.png"
                                      alt=""
                                    />
                                  </span>
                                  Report Post
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12 text_Message mb-2 px-0">
                          <div className="morning_walk_time">Morning Walk</div>
                          <div className="summery_text">
                            Lorem ipsum is simply dummy text of the printing and
                            typesetting industry and ly dummy text of the
                            printing and type setting industry...{" "}
                            <NavLink to="/" className="text-decoration-none">
                              more
                            </NavLink>
                          </div>
                        </div>
                        <div className="col-12 clc_time_km mb-3 px-0">
                          <div className="d-flex align-items-center gap-md-4">
                            <div className="d-flex gap-md-2 gap-1 align-items-center">
                              <img
                                className="image_ic1"
                                src="../assets/images/image-124.png"
                                alt="clock_icon"
                              />
                              <span className="icon_text">1 hr</span>
                            </div>
                            <div className="d-flex gap-md-2 gap-1 align-items-center">
                              <img
                                className="image_ic2"
                                src="../assets/images/image-125.png"
                                alt="clock_icon"
                              />
                              <span className="icon_text">160 km</span>
                            </div>
                            <div className="d-flex gap-md-2 gap-1 align-items-center">
                              <img
                                className="image_ic3"
                                src="../assets/images/image-126.png"
                                alt="clock_icon"
                              />
                              <span className="icon_text">200 cal</span>
                            </div>
                            <div className="d-flex gap-md-2 gap-1 align-items-center">
                              <img
                                className="image_ic4"
                                src="../assets/images/image-127.png"
                                alt="clock_icon"
                              />
                              <span className="icon_text">
                                400m : 2hr 50 min
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 map mb-2 px-0">
                          <div className="maps_card">
                            {/* demo like last time remove image  */}
                            <NavLink to="">
                              {" "}
                              <img
                                className="w-100"
                                src="../assets/images/image-116.png"
                                alt="map"
                              />{" "}
                            </NavLink>
                          </div>
                        </div>
                        <div className="col-12 mb-md-2 like_com_shr px-0">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-md-2 gap-1">
                              <NavLink className="wid active" to="/">
                                {" "}
                                <img
                                  src="../assets/images/image-120.png"
                                  alt="like_icon"
                                />
                              </NavLink>
                              <NavLink className="wid" to="/">
                                <img
                                  src="../assets/images/image-121.png"
                                  alt="Comment_icon"
                                />
                              </NavLink>
                              <NavLink className="wid" to="/">
                                <img
                                  src="../assets/images/image-122.png"
                                  alt="Share_icon"
                                />
                              </NavLink>
                            </div>
                            <div className="view_Button ">
                              <NavLink className="text-decoration-none " to="">
                                <button className="btn btn-white text-theme1 view_Button_a p-0 d-flex align-items-center">
                                  View analysis{" "}
                                  <span>
                                    <img
                                      className="ms-1"
                                      src="../assets/images/image-226.png"
                                      alt=""
                                    />
                                  </span>
                                </button>
                              </NavLink>
                            </div>
                          </div>
                          <div className="liketext">215 likes</div>
                        </div>
                        <div className="col-12 comment_all border-bottom pb-3 px-0">
                          <div className="view_all_comments">
                            <NavLink to="" className="text-decoration-none ">
                              <button className="view_com px-0 border-0 bg-white">
                                View all 50 comments
                              </button>
                            </NavLink>
                          </div>
                          <div className="show_comment d-flex align-items-center">
                            <div className="comment_user_nam">Joseph m.</div>
                            <span className="comment_text">
                              Thanks for appreciation, Having gracefull for
                              you..
                            </span>
                          </div>
                          <div className="show_comment d-flex align-items-center">
                            <div className="comment_user_nam">Joseph m.</div>
                            <span className="comment_text">
                              Nice for appreciation, Having gracefull for you..
                            </span>
                          </div>
                        </div>
                        <div className="col-12 mt-3 bottam_user_image px-0">
                          <div className="row mx-0">
                            <div className="col-auto px-0 me-md-2">
                              <div className="comment_image_user me-1">
                                <img
                                  src="../assets/images/image-123.png"
                                  alt="usr_image"
                                  className="w-100"
                                />
                              </div>
                            </div>
                            <div className="col px-0 position-relative">
                              <input
                                type="text"
                                className="form-control shadow-none bg-white border-muted form_text  form_com"
                                id="comment1"
                                placeholder="Write comment..."
                              />
                              <button className="position-absolute border-0 bg-white p-0">
                                <img
                                  className="com_img w-100 "
                                  src="../assets/images/image-117.png"
                                  alt="share_icon"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 bg-white p-md-4 p-3 card_box_sh">
                  <div className="row mx-0 card_box_profile">
                    <div className="col-12">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-auto px-0">
                          <div className="d-flex align-items-center user_name_image">
                            <img
                              src="../assets/images/image-119.png"
                              className="user_image"
                              alt="Profile_pic"
                            />
                            <div className="profile_user_text mb-2">
                              <div className="user_name mb-2 ms-2">
                                Joseph Martin
                              </div>
                              <div className="time_and_Date ms-2">
                                10 Mar 2021, 10:30 PM{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col icon_dropy px-0">
                          <div className="dropdown box_drop text-end">
                            <span
                              className="dropdown-toggle toggle_Drop"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              type="button"
                            >
                              <img
                                src="../assets/images/image-210.png"
                                alt="icon_image"
                              />
                            </span>
                            <ul
                              className="dropdown-menu border-0 mt-2"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li className="">
                                <NavLink
                                  className="dropdown-item dorop_item"
                                  to="/"
                                >
                                  <span className="me-2">
                                    <img
                                      src="../assets/images/image-115.png"
                                      alt=""
                                    />
                                  </span>
                                  Report Post
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12 text_Message mb-2 px-0">
                          <div className="morning_walk_time">Night Cycling</div>
                          <div className="summery_text">
                            Lorem ipsum is simply dummy text of the printing and
                            typesetting industry and ly dummy text of the
                            printing and type setting industry...{" "}
                            <NavLink to="/" className="text-decoration-none">
                              more
                            </NavLink>
                          </div>
                        </div>
                        <div className="col-12 clc_time_km mb-3 px-0">
                          <div className="d-flex align-items-center gap-md-4">
                            <div className="d-flex gap-md-2 gap-1 align-items-center">
                              <img
                                className="image_ic1"
                                src="../assets/images/image-124.png"
                                alt="clock_icon"
                              />
                              <span className="icon_text">1 hr</span>
                            </div>
                            <div className="d-flex gap-md-2 gap-1 align-items-center">
                              <img
                                className="image_ic2"
                                src="../assets/images/image-125.png"
                                alt="clock_icon"
                              />
                              <span className="icon_text">160 km</span>
                            </div>
                            <div className="d-flex gap-md-2 gap-1 align-items-center">
                              <img
                                className="image_ic3"
                                src="../assets/images/image-126.png"
                                alt="clock_icon"
                              />
                              <span className="icon_text">200 cal</span>
                            </div>
                            <div className="d-flex gap-md-2 gap-1 align-items-center">
                              <img
                                className="image_ic4"
                                src="../assets/images/image-127.png"
                                alt="clock_icon"
                              />
                              <span className="icon_text">
                                400m : 2hr 50 min
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 map mb-2 px-0">
                          <div className="maps_card">
                            {/* demo like last time remove image  */}
                            <NavLink to="">
                              {" "}
                              <img
                                className="w-100"
                                src="../assets/images/image-116.png"
                                alt="map"
                              />{" "}
                            </NavLink>
                          </div>
                        </div>
                        <div className="col-12 mb-md-2 like_com_shr px-0">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-md-2 gap-1">
                              <NavLink className="wid active" to="/">
                                {" "}
                                <img
                                  src="../assets/images/image-120.png"
                                  alt="like_icon"
                                />
                              </NavLink>
                              <NavLink className="wid" to="/">
                                <img
                                  src="../assets/images/image-121.png"
                                  alt="Comment_icon"
                                />
                              </NavLink>
                              <NavLink className="wid" to="/">
                                <img
                                  src="../assets/images/image-122.png"
                                  alt="Share_icon"
                                />
                              </NavLink>
                            </div>
                            <div className="view_Button ">
                              <NavLink className="text-decoration-none " to="">
                                <button className="btn btn-white text-theme1 view_Button_a p-0 d-flex align-items-center">
                                  View analysis{" "}
                                  <span>
                                    <img
                                      className="ms-1"
                                      src="../assets/images/image-226.png"
                                      alt=""
                                    />
                                  </span>
                                </button>
                              </NavLink>
                            </div>
                          </div>
                          <div className="liketext">215 likes</div>
                        </div>
                        <div className="col-12 comment_all border-bottom pb-3 px-0">
                          <div className="view_all_comments">
                            <NavLink to="" className="text-decoration-none ">
                              <button className="view_com px-0 border-0 bg-white">
                                View all 50 comments
                              </button>
                            </NavLink>
                          </div>
                          <div className="show_comment d-flex align-items-center">
                            <div className="comment_user_nam">Joseph m.</div>
                            <span className="comment_text">
                              Thanks for appreciation, Having gracefull for
                              you..
                            </span>
                          </div>
                          <div className="show_comment d-flex align-items-center">
                            <div className="comment_user_nam">Joseph m.</div>
                            <span className="comment_text">
                              Nice for appreciation, Having gracefull for you..
                            </span>
                          </div>
                        </div>
                        <div className="col-12 mt-3 bottam_user_image px-0">
                          <div className="row mx-0">
                            <div className="col-auto px-0 me-md-2">
                              <div className="comment_image_user me-1">
                                <img
                                  src="../assets/images/image-123.png"
                                  alt="usr_image"
                                  className="w-100"
                                />
                              </div>
                            </div>
                            <div className="col px-0 position-relative">
                              <input
                                type="text"
                                className="form-control shadow-none bg-white border-muted form_text  form_com"
                                id="comment1"
                                placeholder="Write comment..."
                              />
                              <button className="position-absolute border-0 bg-white p-0">
                                <img
                                  className="com_img w-100 "
                                  src="../assets/images/image-117.png"
                                  alt="share_icon"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 bg-white p-md-4 p-3 card_box_sh">
                  <div className="row mx-0 card_box_profile">
                    <div className="col-12">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-auto px-0">
                          <div className="d-flex align-items-center user_name_image">
                            <img
                              src="../assets/images/image-119.png"
                              className="user_image"
                              alt="Profile_pic"
                            />
                            <div className="profile_user_text mb-2">
                              <div className="user_name mb-2 ms-2">
                                Joseph Martin
                              </div>
                              <div className="time_and_Date ms-2">
                                10 Mar 2021, 10:30 PM{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col icon_dropy px-0">
                          <div className="dropdown box_drop text-end">
                            <span
                              className="dropdown-toggle toggle_Drop"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              type="button"
                            >
                              <img
                                src="../assets/images/image-210.png"
                                alt="icon_image"
                              />
                            </span>
                            <ul
                              className="dropdown-menu border-0 mt-2"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li className="">
                                <NavLink
                                  className="dropdown-item dorop_item"
                                  to="/"
                                >
                                  <span className="me-2">
                                    <img
                                      src="../assets/images/image-115.png"
                                      alt=""
                                    />
                                  </span>
                                  Report Post
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12 text_Message mb-2 px-0">
                          <div className="morning_walk_time">
                            Burn 300 Calories by Skipping
                          </div>
                          <div className="summery_text">
                            Lorem ipsum is simply dummy text of the printing and
                            typesetting industry and ly dummy text of the
                            printing and type setting industry...{" "}
                            <NavLink to="/" className="text-decoration-none">
                              more
                            </NavLink>
                          </div>
                        </div>
                        <div className="col-12 clc_time_km mb-3 px-0">
                          <div className="d-flex align-items-center gap-md-4">
                            <div className="d-flex gap-md-2 gap-1 align-items-center">
                              <img
                                className="image_ic1"
                                src="../assets/images/image-124.png"
                                alt="clock_icon"
                              />
                              <span className="icon_text">1 hr</span>
                            </div>
                            <div className="d-flex gap-md-2 gap-1 align-items-center">
                              <img
                                className="image_ic2"
                                src="../assets/images/image-125.png"
                                alt="clock_icon"
                              />
                              <span className="icon_text">160 km</span>
                            </div>
                            <div className="d-flex gap-md-2 gap-1 align-items-center">
                              <img
                                className="image_ic3"
                                src="../assets/images/image-126.png"
                                alt="clock_icon"
                              />
                              <span className="icon_text">200 cal</span>
                            </div>
                            <div className="d-flex gap-md-2 gap-1 align-items-center">
                              <img
                                className="image_ic4"
                                src="../assets/images/image-127.png"
                                alt="clock_icon"
                              />
                              <span className="icon_text">
                                400m : 2hr 50 min
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* demo like last time remove image  */}
                        <div className="col-12 map mb-2 px-0">
                          <div className="maps_card">
                            <NavLink to="">
                              {" "}
                              <img
                                className="w-100"
                                src="../assets/images/image-116.png"
                                alt="map"
                              />{" "}
                            </NavLink>
                          </div>
                        </div>
                        <div className="col-12 mb-md-2 like_com_shr px-0">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-md-2 gap-1">
                              <NavLink className="wid active" to="/">
                                {" "}
                                <img
                                  src="../assets/images/image-120.png"
                                  alt="like_icon"
                                />
                              </NavLink>
                              <NavLink className="wid" to="/">
                                <img
                                  src="../assets/images/image-121.png"
                                  alt="Comment_icon"
                                />
                              </NavLink>
                              <NavLink className="wid" to="/">
                                <img
                                  src="../assets/images/image-122.png"
                                  alt="Share_icon"
                                />
                              </NavLink>
                            </div>
                            <div className="view_Button ">
                              <NavLink className="text-decoration-none " to="">
                                <button className="btn btn-white text-theme1 view_Button_a p-0 d-flex align-items-center">
                                  View analysis{" "}
                                  <span>
                                    <img
                                      className="ms-1"
                                      src="../assets/images/image-226.png"
                                      alt=""
                                    />
                                  </span>
                                </button>
                              </NavLink>
                            </div>
                          </div>
                          <div className="liketext">215 likes</div>
                        </div>
                        <div className="col-12 comment_all border-bottom pb-3 px-0">
                          <div className="view_all_comments">
                            <NavLink to="" className="text-decoration-none ">
                              <button className="view_com px-0 border-0 bg-white">
                                View all 50 comments
                              </button>
                            </NavLink>
                          </div>
                          <div className="show_comment d-flex align-items-center">
                            <div className="comment_user_nam">Joseph m.</div>
                            <span className="comment_text">
                              Thanks for appreciation, Having gracefull for
                              you..
                            </span>
                          </div>
                          <div className="show_comment d-flex align-items-center">
                            <div className="comment_user_nam">Joseph m.</div>
                            <span className="comment_text">
                              Nice for appreciation, Having gracefull for you..
                            </span>
                          </div>
                        </div>
                        <div className="col-12 mt-3 bottam_user_image px-0">
                          <div className="row mx-0">
                            <div className="col-auto px-0 me-md-2">
                              <div className="comment_image_user me-1">
                                <img
                                  src="../assets/images/image-123.png"
                                  alt="usr_image"
                                  className="w-100"
                                />
                              </div>
                            </div>
                            <div className="col px-0 position-relative">
                              <input
                                type="text"
                                className="form-control shadow-none bg-white border-muted form_text  form_com"
                                id="comment1"
                                placeholder="Write comment..."
                              />
                              <button className="position-absolute border-0 bg-white p-0">
                                <img
                                  className="com_img w-100 "
                                  src="../assets/images/image-117.png"
                                  alt="share_icon"
                                />
                              </button>
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
        </div>
      </div>
    </div>
  );
}

export default YourActivity;
