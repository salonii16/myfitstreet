import React from 'react'
import { NavLink } from 'react-router-dom'

function Events() {
  return (
 
        <div className="col rightPart h-100">
            <div className="row rightPartInner h-100 flex-column flex-nowrap">
                <div className="col-12 mainHeader bg-white">
                    <nav className="navbar navbar-expand-lg bg-white h-100">
                        <div className="container-fluid">
                            <NavLink className="btn p-0 border-0 d-lg-none" data-bs-toggle="offcanvas"
                                to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <img className="me-2" src="../assets/images/image-69.png" alt="sidebar close image"/>
                            </NavLink>
                            <img className="me-2 d-none togglebtn sidebarmenuIcon" src="../assets/images/image-69.png"
                                alt="sidebar close image" id=""/>
                            <img className="me-2 d-none togglebtn sidebarRightArrow"
                                src="../assets/images/image-114.png" alt="image-114" id=""/>
                            <NavLink className="navbar-brand p-1 d-none d-sm-inline-block" to="/dashboard">Events/Invited</NavLink>
                            <div className="d-flex align-items-center ms-auto" id="navbarSupportedContent">
                                <form className="position-relative ms-auto me-4 d-none d-lg-inline-block">
                                    <input className="form-control shadow-none bg-light border-0 searchInput"
                                        type="text" placeholder="Search" aria-label="Search"/>
                                    <img className="SearchIcon" src="../assets/images/image-71.png" alt="image-71"/>
                                    <button className="btn p-0 border-0 SearchRemove" type="button">
                                        <img className="inputIcon" src="../assets/images/image-72.png" alt="image-72"/>
                                    </button>
                                </form>
                                <ul className="navbar-nav flex-row align-items-center gap-3 gap-lg-0">
                                    <li className="nav-item d-lg-none">
                                        <button className="btn p-1 border-0" type="button" data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                            <img className="inputIcon" src="../assets/images/image-71.png"
                                                alt="search icon image"/>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link py-0" aria-current="page" to="#"><img
                                                className="messageIcon" src="../assets/images/image-73.png"
                                                alt="image"/></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link py-0" to="#"><img className="messageIcon"
                                                src="../assets/images/image-74.png" alt="image"/></NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link py-0 d-flex align-items-center dashBoardToggle" to="#" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <img className="me-0 me-md-1 userImage" src="../assets/images/image-75new.png"
                                                alt="image"/>
                                            <img className="dropdownArrow d-none d-md-inline-block" src="../assets/images/image-43.png"
                                                alt="image"/>
                                        </NavLink>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end position-absolute rounded-0 border-0 shadow">
                                            <li><NavLink className="dropdown-item" to="#"><img className="me-2 userDropitem"
                                                        src="../assets/images/logout.png" alt=""/> Logout</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="#"><img className="me-2 userDropitem"
                                                        src="../assets/images/help.png" alt=""/> Help</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="#"><img className="me-2 userDropitem"
                                                        src="../assets/images/setting.png" alt=""/> Setting</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-12 mainBody flex-fill overflow-hidden">
                    <div className="row mainBodyInner h-100">
                        <div className="col-12 col-md-5 col-lg-4 leftBodyPart flex-fill h-100 overflow-hidden">
                            <div className="row h-100 p-3 p-lg-4 customScroll">
                                <div className="col-12 sectionOne p-3 bg-white">
                                    <div className="row mx-0">
                                        <div className="col-12 imgDetail">
                                            <NavLink to="profile-my-leaderbowrd.html" className="text-decoration-none text-dark">
                                                <div className="imgOuter mx-auto border border-theme1 rounded-pill">
                                                    <img className="w-100 h-100" src="../assets/images/image-75.png" alt=""/>
                                                </div>
                                                <div className="name text-center mt-2">Joseph Martin</div>
                                            </NavLink>
                                        </div>
                                        <div className="col-12 followers">
                                            <div className="row py-2 py-xl-3 border-bottom justify-content-center">
                                                <div className="col-4 text-center">
                                                    <NavLink   className="text-decoration-none text-dark">
                                                        <span className="d-block value">100</span>
                                                        <span className="title text-muted mt-1 d-flex justify-content-center">Activities</span>
                                                    </NavLink>
                                                </div>
                                                <div className="col-4 text-center border-start border-end">
                                                    <NavLink to=""  className="text-decoration-none text-dark">
                                                        <span className="d-block value">90</span>
                                                        <span className="title text-muted mt-1 d-flex justify-content-center">Followers</span>
                                                    </NavLink>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <NavLink to=""  className="text-decoration-none text-dark">
                                                        <span className="d-block value">35</span>
                                                        <span className="title text-muted mt-1 d-flex justify-content-center">Following</span>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 followers">
                                            <div className="row pt-2 pt-xl-3 justify-content-center">
                                                <div className="col-4 text-center">
                                                    <NavLink to="/bmi-data"  className="text-decoration-none text-dark">
                                                        <span className="title text-muted">BMI</span>
                                                        <span className="d-block value">31.0</span>
                                                    </NavLink>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <NavLink  className="text-decoration-none text-dark">
                                                        <span className="title text-muted">Weight</span>
                                                        <span className="d-block value">90 kg</span>
                                                    </NavLink>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <NavLink className="text-decoration-none text-dark">
                                                        <span className="title text-muted">Height</span>
                                                        <span className="d-block value">234 cm</span>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 sectionTwo p-3 bg-white mt-4">
                                    <ul className="list-unstyled p-0 m-0 d-flex justify-content-between">
                                        <li className=" text-center">
                                            <div className="imgOuter mx-auto rounded-pill align-items-center d-flex justify-content-center">
                                                <img className="" src="../assets/images/image-86.png" alt=""/>
                                            </div>
                                            <div className="points mt-2">
                                                <span className="d-block value">2000</span>
                                                <span className="title text-muted">Overall Points</span>
                                            </div>
                                        </li>
                                        <li className=" text-center">
                                            <div className="imgOuter purple mx-auto rounded-pill align-items-center d-flex justify-content-center">
                                                <img className="" src="../assets/images/image-87.png" alt=""/>
                                            </div>
                                            <div className="points mt-2">
                                                <span className="d-block value">05</span>
                                                <span className="title text-muted">Rank</span>
                                            </div>
                                        </li>
                                        <li className=" text-center">
                                            <div className="imgOuter orange mx-auto rounded-pill align-items-center d-flex justify-content-center">
                                                <img className="" src="../assets/images/image-88.png" alt=""/>
                                            </div>
                                            <div className="points mt-2">
                                                <span className="d-block value">90</span>
                                                <span className="title text-muted">Total Activities</span>
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
                                                        <img className="w-100" src="../assets/images/image-246.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="row">
                                                        <div className="col-12 my-2 d-flex align-items-center gap-2">
                                                            <div className="">
                                                                <img className="w-100" src="../assets/images/image-247.png" alt=""/>
                                                            </div>
                                                            <div className="text">
                                                                <span className="text-muted w-100 d-block">Calories</span>
                                                                <b className="">1000</b>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 my-2 d-flex align-items-center gap-2">
                                                            <div className="">
                                                                <img className="w-100" src="../assets/images/image-248.png" alt=""/>
                                                            </div>
                                                            <div className="text">
                                                                <span className="text-muted w-100 d-block">Km</span>
                                                                <b className="">20</b>
                                                            </div>
                                                        </div>                                                                
                                                        <div className="col-12 my-2 d-flex align-items-center gap-2">
                                                            <div className="">
                                                                <img className="w-100" src="../assets/images/image-249.png" alt=""/>
                                                            </div>
                                                            <div className="text">
                                                                <span className="text-muted w-100 d-block">Move min</span>
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
                                                <img className="" src="../assets/images/image-99.png" alt=""/>
                                            </div>
                                            <div className="points mt-2">
                                                <span className="d-block value">102</span>
                                                <span className="title text-muted">Joined Event</span>
                                            </div>
                                        </li>
                                        <li className=" text-center">
                                            <div className="imgOuter sky mx-auto rounded-pill align-items-center d-flex justify-content-center">
                                                <img className="" src="../assets/images/image-100.png" alt=""/>
                                            </div>
                                            <div className="points mt-2">
                                                <span className="d-block value">102</span>
                                                <span className="title text-muted">Medals Won</span>
                                            </div>
                                        </li>
                                        <li className=" text-center">
                                            <div className="imgOuter lightGreen mx-auto rounded-pill align-items-center d-flex justify-content-center">
                                                <img className="" src="../assets/images/image-101.png" alt=""/>
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
                                        <div className="col-12 px-0 todayDataHeader pb-2 pb-xl-3 border-bottom d-flex align-items-center justify-content-between " >
                                            <div className="mainTitle">Last Activity</div>
                                            <NavLink to="" className="textBtn text-theme1 text-decoration-none">View All</NavLink>
                                        </div>
                                        <div className="col-12 px-0">
                                            <div className="activity pt-3">
                                                <div className="row">
                                                    <div className="col-auto">
                                                        <div className="imgActivity mx-auto rounded-pill align-items-center d-flex justify-content-center"><img src="../assets/images/image-81.png" alt=""/></div>
                                                    </div>
                                                    <div className=" col activityTitle align-items-center d-grid px-0">
                                                        <span className="d-block">Evening Walk</span>
                                                        <span className="text-muted d-block">10 Mar . 10:30 PM . 90 pts</span>
                                                    </div>
                                                    <div className=" col-auto activityStatus"><span className="text-theme1 p-1 px-2 px-xl-3 rounded-pill">Running</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-8 rightBodyPart event_invited flex-fill h-100 overflow-hidden">
                            <div className="row  p-3 p-lg-4 h-100 gap-4">

                                {/* <!-- Navbar tabs Creted Abishek --> */}
                                
                                     <div className="nav-fit d-flex" >
                                        <ul className="navbar-nav-fit nav-pill d-flex p-0" id="pills-tab" role="tablist">
                                            <li className="nav-fit-link" role="presentation"><a id="pills-invite-tab" data-bs-toggle="pill" data-bs-target="#pills-invite" type="button" role="tab" aria-controls="pills-invite" aria-selected="true" className="text-dark active">Invited</a></li>
                                            <li className="nav-fit-link" role="presentation"><a id="pills-myevent-tab" data-bs-toggle="pill" data-bs-target="#pills-myevent" type="button" role="tab" aria-controls="pills-myevent" aria-selected="true" className="text-dark">My Events</a></li>
                                            <li className="nav-fit-link" role="presentation"><a id="pills-explore-tab" data-bs-toggle="pill" data-bs-target="#pills-explore" type="button" role="tab" aria-controls="pills-explore" aria-selected="true" className="text-dark">Explore</a></li>
                                        </ul>

                                        <form className="position-relative ms-auto me-4 ">
                                            <input className="form-control shadow-none bg-light border-0 searchInput-1" type="text" placeholder="Search events" aria-label="Search"/>
                                            <img className="SearchIcon-1" src="../assets/images/image-71.png" alt="image-71"/>
                                            <button className="btn p-0 border-0 SearchRemove-1" type="button">
                                                <img className="inputIcon-2" src="../assets/images/image-72.png" alt="image-72"/>
                                            </button>
                                        </form>
                                     </div>

                                <div className="col-10 filters">
                                    <div className="row mx-0">
                                        <div className="col-12 px-0 todayDataHeader pb-2">
                                            <div className="row align-items-center">
                                                <div className="col mainTitle">Filters</div>
                                                <div className="col-auto"><button type="button" className="btn textBtn text-theme1 border-0 shadow-none p-0">Clear Filters</button></div>
                                            </div>
                                        </div>
                                        <div className="col-12 px-0">
                                            <ul className="p-0 m-0 list-unstyled d-flex gap-2 gap-xl-3 overflow-auto">
                                                <li className="d-inline-block mt-1 mt-sm-0">
                                                    <input type="checkbox" className="btn-check d-none" id="running" autoComplete="off"/>
                                                    <label className="btn btnBorderd btn-outline-theme1 rounded-pill" htmlFor="running">Running</label>
                                                </li>
                                                <li className="d-inline-block mt-1 mt-sm-0">
                                                    <input type="checkbox" className="btn-check d-none" id="walking" autoComplete="off"/>
                                                    <label className="btn btnBorderd btn-outline-theme1 rounded-pill" htmlFor="walking">Walking</label>
                                                </li>
                                                <li className="d-inline-block mt-1 mt-sm-0">
                                                    <input type="checkbox" className="btn-check d-none" id="cycling" autoComplete="off"/>
                                                    <label className="btn btnBorderd btn-outline-theme1 rounded-pill" htmlFor="cycling">Cycling</label>
                                                </li>
                                                <li className="d-inline-block mt-1 mt-sm-0">
                                                    <input type="checkbox" className="btn-check d-none" id="skipping" autoComplete="off"/>
                                                    <label className="btn btnBorderd btn-outline-theme1 rounded-pill" htmlFor="skipping">Skipping</label>
                                                </li>
                                                <li className="d-inline-block mt-1 mt-sm-0">
                                                    <input type="checkbox" className="btn-check d-none" id="jumping" autoComplete="off"/>
                                                    <label className="btn btnBorderd btn-outline-theme1 rounded-pill" htmlFor="jumping">Jumping</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Card Desigen Creted  Abishek --> */}
                                <div className="tab-content" id="pills-tabContent">
                                <div className="fit-invite-box tab-pane fade show active " id="pills-invite" role="tabpanel" aria-labelledby="pills-invite-tab">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr " aria-hidden="true"></i>
                                                    </span>
                                                    <span className=" fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="card-text-5 d-block ps-1">
                                                    <span className="fit-content text-dark">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        100 Participents
                                                    </span>
                                                    <span className="fit-content text-dark ps-3">
                                                        <i className="fa fa-trophy" aria-hidden="true"></i>
                                                        Earn 100 Points
                                                    </span>
                                                </span>

                                                <span className="btn-invites">
                                                    <NavLink to="#" className="card-btn-1 mt-3">Accept</NavLink>
                                                    <NavLink to="#" className="card-btn-1 card-btn-2 mt-3 ms-3">Reject</NavLink>
                                                </span>
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-2.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Group Event</h5>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                
                                                    <span className="card-text-4 card-succes d-block  fw-bold  card-txt-4">
                                                        Free
                                                    </span>
                                                <span className="card-text-5 d-block ps-1">
                                                    <span className="fit-content text-dark">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        100 Participents
                                                    </span>
                                                    <span className="fit-content text-dark ps-3">
                                                        <i className="fa fa-trophy" aria-hidden="true"></i>
                                                        Earn 100 Points
                                                    </span>
                                                </span>

                                               
                                                <span className="btn-invites">
                                                    <NavLink to="#" className="card-btn-1 mt-3">Accept</NavLink>
                                                    <NavLink to="#" className="card-btn-1 card-btn-2 mt-3 ms-3">Reject</NavLink>
                                                </span>
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-3.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Athlete Running Distance Challenge</h5>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr " aria-hidden="true"></i>
                                                    </span>
                                                    <span className=" fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="card-text-5 d-block ps-1">
                                                    <span className="fit-content text-dark">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        100 Participents
                                                    </span>
                                                    <span className="fit-content text-dark ps-3">
                                                        <i className="fa fa-trophy" aria-hidden="true"></i>
                                                        Earn 100 Points
                                                    </span>
                                                </span>

                                                
                                                <span className="btn-invites">
                                                    <NavLink to="#" className="card-btn-1 mt-3">Accept</NavLink>
                                                    <NavLink to="#" className="card-btn-1 card-btn-2 mt-3 ms-3">Reject</NavLink>
                                                </span>
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-4.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Running Distance Challenge</h5>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="card-text-5 d-block ps-1">
                                                    <span className="fit-content text-dark">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        100 Participents
                                                    </span>
                                                    <span className="fit-content text-dark ps-3">
                                                        <i className="fa fa-trophy" aria-hidden="true"></i>
                                                        Earn 100 Points
                                                    </span>
                                                </span>

                                               
                                                <span className="btn-invites">
                                                    <NavLink to="#" className="card-btn-1 mt-3">Accept</NavLink>
                                                    <NavLink to="#" className="card-btn-1 card-btn-2 mt-3 ms-3">Reject</NavLink>
                                                </span>
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-5.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Cycling Distance Challenge</h5>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="card-text-5 d-block ps-1">
                                                    <span className="fit-content text-dark">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        100 Participents
                                                    </span>
                                                    <span className="fit-content text-dark ps-3">
                                                        <i className="fa fa-trophy" aria-hidden="true"></i>
                                                        Earn 100 Points
                                                    </span>
                                                </span>

                                               
                                                <span className="btn-invites">
                                                    <NavLink to="#" className="card-btn-1 mt-3">Accept</NavLink>
                                                    <NavLink to="#" className="card-btn-1 card-btn-2 mt-3 ms-3">Reject</NavLink>
                                                </span>
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-3.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Athlete Running Distance</h5>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr " aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="card-text-5 d-block ps-1">
                                                    <span className="fit-content text-dark">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        100 Participents
                                                    </span>
                                                    <span className="fit-content text-dark ps-3">
                                                        <i className="fa fa-trophy" aria-hidden="true"></i>
                                                        Earn 100 Points
                                                    </span>
                                                </span>

                                                
                                                <span className="btn-invites">
                                                    <NavLink to="#" className="card-btn-1 mt-3">Accept</NavLink>
                                                    <NavLink to="#" className="card-btn-1 card-btn-2 mt-3 ms-3">Reject</NavLink>
                                                </span>
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="card-text-5 d-block ps-1">
                                                    <span className="fit-content text-dark">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        100 Participents
                                                    </span>
                                                    <span className="fit-content text-dark ps-3">
                                                        <i className="fa fa-trophy" aria-hidden="true"></i>
                                                        Earn 100 Points
                                                    </span>
                                                </span>

                                               
                                                <span className="btn-invites">
                                                    <NavLink to="#" className="card-btn-1 mt-3">Accept</NavLink>
                                                    <NavLink to="#" className="card-btn-1 card-btn-2 mt-3 ms-3">Reject</NavLink>
                                                </span>
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="card-text-5 d-block ps-1">
                                                    <span className="fit-content text-dark">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        100 Participents
                                                    </span>
                                                    <span className="fit-content text-dark ps-3">
                                                        <i className="fa fa-trophy" aria-hidden="true"></i>
                                                        Earn 100 Points
                                                    </span>
                                                </span>

                                               
                                                <span className="btn-invites">
                                                    <NavLink to="#" className="card-btn-1 mt-3">Accept</NavLink>
                                                    <NavLink to="#" className="card-btn-1 card-btn-2 mt-3 ms-3">Reject</NavLink>
                                                </span>
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="card-text-5 d-block ps-1">
                                                    <span className="fit-content text-dark">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        100 Participents
                                                    </span>
                                                    <span className="fit-content text-dark ps-3">
                                                        <i className="fa fa-trophy" aria-hidden="true"></i>
                                                        Earn 100 Points
                                                    </span>
                                                </span>

                                              
                                                <span className="btn-invites">
                                                    <NavLink to="#" className="card-btn-1 mt-3">Accept</NavLink>
                                                    <NavLink to="#" className="card-btn-1 card-btn-2 mt-3 ms-3">Reject</NavLink>
                                                </span>
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="card-text-5 d-block ps-1">
                                                    <span className="fit-content text-dark">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        100 Participents
                                                    </span>
                                                    <span className="fit-content text-dark ps-3">
                                                        <i className="fa fa-trophy" aria-hidden="true"></i>
                                                        Earn 100 Points
                                                    </span>
                                                </span>

                                              
                                                <span className="btn-invites">
                                                    <NavLink to="#" className="card-btn-1 mt-3">Accept</NavLink>
                                                    <NavLink to="#" className="card-btn-1 card-btn-2 mt-3 ms-3">Reject</NavLink>
                                                </span>
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="card-text-5 d-block ps-1">
                                                    <span className="fit-content text-dark">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        100 Participents
                                                    </span>
                                                    <span className="fit-content text-dark ps-3">
                                                        <i className="fa fa-trophy" aria-hidden="true"></i>
                                                        Earn 100 Points
                                                    </span>
                                                </span>

                                               
                                                <span className="btn-invites">
                                                    <NavLink to="#" className="card-btn-1 mt-3">Accept</NavLink>
                                                    <NavLink to="#" className="card-btn-1 card-btn-2 mt-3 ms-3">Reject</NavLink>
                                                </span>
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="card-text-5 d-block ps-1">
                                                    <span className="fit-content text-dark">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        100 Participents
                                                    </span>
                                                    <span className="fit-content text-dark ps-3">
                                                        <i className="fa fa-trophy" aria-hidden="true"></i>
                                                        Earn 100 Points
                                                    </span>
                                                </span>

                                                
                                                <span className="btn-invites">
                                                    <NavLink to="#" className="card-btn-1 mt-3">Accept</NavLink>
                                                    <NavLink to="#" className="card-btn-1 card-btn-2 mt-3 ms-3">Reject</NavLink>
                                                </span>
                                                 
                                                </div>
                                              </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- second tab --> */}
                                <div className="fit-myevents-box tab-pane fade" id="pills-myevent" role="tabpanel" aria-labelledby="pills-myevent-tab">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-4.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily
                                                   
                                                  </h5>
                                                  <div className="circle-img">
                                                    <img src="../assets/images/fit-1.jpg" alt="" className="up-heading-img"/>
                                                  </div>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                               
                                                    <span className="fit-content text-dark d-block ps-1">
                                                        <i className="fa fa-user" aria-hidden="true"></i>
                                                        100 Participents
                                                    </span>
                                                <NavLink to="#" className="event-btn event-btn-1">Upcoming</NavLink>
                                                

                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-2.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Group Event</h5>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="fit-content text-dark d-block ps-1">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                            <NavLink to="#" className="event-btn">Completed</NavLink>

                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                    <h5 className="card-title text-dark fw-bold">
                                                        Running Distance Challenge
                                                    </h5>
                                                    <div className="circle-img">
                                                        <img src="../assets/images/fit-1.jpg" alt="" className="up-heading-img"/>
                                                      </div>
                                                     
                                                    <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="fit-content text-dark d-block ps-1">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                            <NavLink to="#" className="event-btn event-btn-1">Upcoming</NavLink>

                                                
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-3.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Athlete Running Distance Challenge
                                                  </h5>
                                                  <div className="circle-img">
                                                    <img src="../assets/images/fit-1.jpg" alt="" className="up-heading-img"/>
                                                  </div>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="fit-content text-dark d-block ps-1">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <NavLink to="#" className="event-btn">Completed</NavLink>

                                                
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily
                                                  </h5>
                                                  <div className="circle-img">
                                                    <img src="../assets/images/fit-1.jpg" alt="" className="up-heading-img"/>
                                                  </div>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="fit-content text-dark d-block ps-1">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                            <NavLink to="#" className="event-btn event-btn-1">Upcoming</NavLink>

                                               
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="fit-content text-dark d-block ps-1">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <NavLink to="#" className="event-btn">Completed</NavLink>
   
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily
                                                  </h5>
                                                  <div className="circle-img">
                                                    <img src="../assets/images/fit-1.jpg" alt="" className="up-heading-img"/>
                                                  </div>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="fit-content text-dark d-block ps-1">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                            <NavLink to="#" className="event-btn event-btn-1">Upcoming</NavLink>

                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily
                                                  </h5>
                                                  <div className="circle-img">
                                                    <img src="../assets/images/fit-1.jpg" alt="" className="up-heading-img"/>
                                                  </div>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="fit-content text-dark d-block ps-1">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <NavLink to="#" className="event-btn">Completed</NavLink>
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily
                                                  </h5>
                                                  <div className="circle-img">
                                                    <img src="../assets/images/fit-1.jpg" alt="" className="up-heading-img"/>
                                                  </div>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="fit-content text-dark d-block ps-1">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                            <NavLink to="#" className="event-btn event-btn-1">Upcoming</NavLink>

                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily
                                                  </h5>
                                                  <div className="circle-img">
                                                    <img src="../assets/images/fit-1.jpg" alt="" className="up-heading-img"/>
                                                  </div>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="fit-content text-dark d-block ps-1">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <NavLink to="#" className="event-btn">Completed</NavLink>

                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily
                                                  </h5>
                                                  <div className="circle-img">
                                                    <img src="../assets/images/fit-1.jpg" alt="" className="up-heading-img"/>
                                                  </div>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="fit-content text-dark d-block ps-1">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                            <NavLink to="#" className="event-btn event-btn-1">Upcoming</NavLink>
                                                 
                                                </div>
                                              </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="card fit-cards">
                                                <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                                <span className="fit-img-txt">Public</span>
                                                <div className="card-body lh-lg">
                                                  <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily
                                                  </h5>
                                                  <div className="circle-img">
                                                    <img src="../assets/images/fit-1.jpg" alt="" className="up-heading-img"/>
                                                  </div>
                                                  <span className="card-text ">
                                                    <span>
                                                     <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                    </span>
                                                    <span className="text-dark  card-txt-2">
                                                        Run 100 kms in 7 days
                                                    </span>
                                                </span>
                                                <span className="card-text-2 d-block">
                                                    <span className="fit-icon-2">
                                                        <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="text-dark  card-txt-3">
                                                        Mar 1 to Mar 7,2021 : 4 days remaining
                                                    </span>
                                                </span>
                                                <span className="card-text-3 d-block">
                                                    <span className="fit-icon-3">
                                                        <i className="fa fa-inr" aria-hidden="true"></i>
                                                    </span>
                                                    <span className="fw-bold  card-txt-4">
                                                        900 / - Onwards 
                                                    </span>
                                                </span>
                                                <span className="fit-content text-dark d-block ps-1">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <NavLink to="#" className="event-btn">Completed</NavLink>

                                                 
                                                </div>
                                              </div>
                                        </div>
                                    </div>

                                </div>

                                {/* <!-- third tab --> */}
                                <div className="fit-explore-box tab-pane fade" id="pills-explore" role="tabpanel" aria-labelledby="pills-explore-tab">
                                  <div className="row">
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="card fit-cards">
                                            <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                            <span className="fit-img-txt">Public</span>
                                            <div className="card-body lh-lg">
                                              <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                              <span className="card-text ">
                                                <span>
                                                 <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                </span>
                                                <span className="text-dark  card-txt-2">
                                                    Run 100 kms in 7 days
                                                </span>
                                            </span>
                                            <span className="card-text-2 d-block">
                                                <span className="fit-icon-2">
                                                    <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                </span>
                                                <span className="text-dark  card-txt-3">
                                                    Mar 1 to Mar 7,2021 : 4 days remaining
                                                </span>
                                            </span>
                                            <span className="card-text-3 d-block">
                                                <span className="fit-icon-3">
                                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                                </span>
                                                <span className="fw-bold  card-txt-4">
                                                    900 / - Onwards 
                                                </span>
                                            </span>
                                            <span className="card-text-5 d-block ps-1">
                                                <span className="fit-content text-dark">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <span className="fit-content text-dark ps-3">
                                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                                    Earn 100 Points
                                                </span>
                                            </span>

                                            <NavLink to="#" className="card-btn mt-3">Join Event</NavLink>
                                             
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="card fit-cards">
                                            <img src="../assets/images/fit-2.jpg" className="card-img-top img-fluid" alt="..."/>
                                            <span className="fit-img-txt">Public</span>
                                            <div className="card-body lh-lg">
                                              <h5 className="card-title text-dark fw-bold">Group Event</h5>
                                              <span className="card-text ">
                                                <span>
                                                 <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                </span>
                                                <span className="text-dark  card-txt-2">
                                                    Run 100 kms in 7 days
                                                </span>
                                            </span>
                                            <span className="card-text-2 d-block">
                                                <span className="fit-icon-2">
                                                    <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                </span>
                                                <span className="text-dark  card-txt-3">
                                                    Mar 1 to Mar 7,2021 : 4 days remaining
                                                </span>
                                            </span>
                                            <span className="card-text-3 d-block">
                                                <span className="fit-icon-3">
                                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                                </span>
                                                <span className="fw-bold  card-txt-4">
                                                    900 / - Onwards 
                                                </span>
                                            </span>
                                            <span className="card-text-5 d-block ps-1">
                                                <span className="fit-content text-dark">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <span className="fit-content text-dark ps-3">
                                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                                    Earn 100 Points
                                                </span>
                                            </span>

                                            <NavLink to="#" className="card-btn mt-3">Join Event</NavLink>
                                             
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="card fit-cards">
                                            <img src="../assets/images/fit-5.jpg" className="card-img-top img-fluid" alt="..."/>
                                            <span className="fit-img-txt">Public</span>
                                            <div className="card-body lh-lg">
                                              <h5 className="card-title text-dark fw-bold">Cycling Distance Challenge</h5>
                                              <span className="card-text ">
                                                <span>
                                                 <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                </span>
                                                <span className="text-dark  card-txt-2">
                                                    Run 100 kms in 7 days
                                                </span>
                                            </span>
                                            <span className="card-text-2 d-block">
                                                <span className="fit-icon-2">
                                                    <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                </span>
                                                <span className="text-dark  card-txt-3">
                                                    Mar 1 to Mar 7,2021 : 4 days remaining
                                                </span>
                                            </span>
                                            <span className="card-text-3 d-block">
                                                <span className="fit-icon-3">
                                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                                </span>
                                                <span className="fw-bold card-txt-4">
                                                    900 / - Onwards 
                                                </span>
                                            </span>
                                            <span className="card-text-5 d-block ps-1">
                                                <span className="fit-content text-dark">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <span className="fit-content text-dark ps-3">
                                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                                    Earn 100 Points
                                                </span>
                                            </span>

                                            <NavLink to="#" className="card-btn mt-3">Join Event</NavLink>
                                             
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="card fit-cards">
                                            <img src="../assets/images/fit-4.jpg" className="card-img-top img-fluid" alt="..."/>
                                            <span className="fit-img-txt">Public</span>
                                            <div className="card-body lh-lg">
                                              <h5 className="card-title text-dark fw-bold">Running Distance Challenge</h5>
                                              <span className="card-text ">
                                                <span>
                                                 <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                </span>
                                                <span className="text-dark  card-txt-2">
                                                    Run 100 kms in 7 days
                                                </span>
                                            </span>
                                            <span className="card-text-2 d-block">
                                                <span className="fit-icon-2">
                                                    <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                </span>
                                                <span className="text-dark  card-txt-3">
                                                    Mar 1 to Mar 7,2021 : 4 days remaining
                                                </span>
                                            </span>
                                            <span className="card-text-3 d-block">
                                                <span className="fit-icon-3">
                                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                                </span>
                                                <span className=" fw-bold  card-txt-4">
                                                    900 / - Onwards 
                                                </span>
                                            </span>
                                            <span className="card-text-5 d-block ps-1">
                                                <span className="fit-content text-dark">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <span className="fit-content text-dark ps-3">
                                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                                    Earn 100 Points
                                                </span>
                                            </span>

                                            <NavLink to="#" className="card-btn mt-3">Join Event</NavLink>
                                             
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="card fit-cards">
                                            <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                            <span className="fit-img-txt">Public</span>
                                            <div className="card-body lh-lg">
                                              <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                              <span className="card-text ">
                                                <span>
                                                 <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                </span>
                                                <span className="text-dark  card-txt-2">
                                                    Run 100 kms in 7 days
                                                </span>
                                            </span>
                                            <span className="card-text-2 d-block">
                                                <span className="fit-icon-2">
                                                    <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                </span>
                                                <span className="text-dark  card-txt-3">
                                                    Mar 1 to Mar 7,2021 : 4 days remaining
                                                </span>
                                            </span>
                                            <span className="card-text-3 d-block">
                                                <span className="fit-icon-3">
                                                    <i className="fa fa-inr " aria-hidden="true"></i>
                                                </span>
                                                <span className="fw-bold  card-txt-4">
                                                    900 / - Onwards 
                                                </span>
                                            </span>
                                            <span className="card-text-5 d-block ps-1">
                                                <span className="fit-content text-dark">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <span className="fit-content text-dark ps-3">
                                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                                    Earn 100 Points
                                                </span>
                                            </span>

                                            <NavLink to="#" className="card-btn mt-3">Join Event</NavLink>
                                             
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="card fit-cards">
                                            <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                            <span className="fit-img-txt">Public</span>
                                            <div className="card-body lh-lg">
                                              <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                              <span className="card-text ">
                                                <span>
                                                 <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                </span>
                                                <span className="text-dark  card-txt-2">
                                                    Run 100 kms in 7 days
                                                </span>
                                            </span>
                                            <span className="card-text-2 d-block">
                                                <span className="fit-icon-2">
                                                    <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                </span>
                                                <span className="text-dark  card-txt-3">
                                                    Mar 1 to Mar 7,2021 : 4 days remaining
                                                </span>
                                            </span>
                                            <span className="card-text-3 d-block">
                                                <span className="fit-icon-3">
                                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                                </span>
                                                <span className=" fw-bold  card-txt-4">
                                                    900 / - Onwards 
                                                </span>
                                            </span>
                                            <span className="card-text-5 d-block ps-1">
                                                <span className="fit-content text-dark">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <span className="fit-content text-dark ps-3">
                                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                                    Earn 100 Points
                                                </span>
                                            </span>

                                            <NavLink to="#" className="card-btn mt-3">Join Event</NavLink>
                                             
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="card fit-cards">
                                            <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                            <span className="fit-img-txt">Public</span>
                                            <div className="card-body lh-lg">
                                              <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                              <span className="card-text ">
                                                <span>
                                                 <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                </span>
                                                <span className="text-dark  card-txt-2">
                                                    Run 100 kms in 7 days
                                                </span>
                                            </span>
                                            <span className="card-text-2 d-block">
                                                <span className="fit-icon-2">
                                                    <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                </span>
                                                <span className="text-dark  card-txt-3">
                                                    Mar 1 to Mar 7,2021 : 4 days remaining
                                                </span>
                                            </span>
                                            <span className="card-text-3 d-block">
                                                <span className="fit-icon-3">
                                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                                </span>
                                                <span className="fw-bold  card-txt-4">
                                                    900 / - Onwards 
                                                </span>
                                            </span>
                                            <span className="card-text-5 d-block ps-1">
                                                <span className="fit-content text-dark">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <span className="fit-content text-dark ps-3">
                                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                                    Earn 100 Points
                                                </span>
                                            </span>

                                            <NavLink to="#" className="card-btn mt-3">Join Event</NavLink>
                                             
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="card fit-cards">
                                            <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                            <span className="fit-img-txt">Public</span>
                                            <div className="card-body lh-lg">
                                              <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                              <span className="card-text ">
                                                <span>
                                                 <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                </span>
                                                <span className="text-dark  card-txt-2">
                                                    Run 100 kms in 7 days
                                                </span>
                                            </span>
                                            <span className="card-text-2 d-block">
                                                <span className="fit-icon-2">
                                                    <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                </span>
                                                <span className="text-dark  card-txt-3">
                                                    Mar 1 to Mar 7,2021 : 4 days remaining
                                                </span>
                                            </span>
                                            <span className="card-text-3 d-block">
                                                <span className="fit-icon-3">
                                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                                </span>
                                                <span className="fw-bold  card-txt-4">
                                                    900 / - Onwards 
                                                </span>
                                            </span>
                                            <span className="card-text-5 d-block ps-1">
                                                <span className="fit-content text-dark">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <span className="fit-content text-dark ps-3">
                                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                                    Earn 100 Points
                                                </span>
                                            </span>

                                            <NavLink to="#" className="card-btn mt-3">Join Event</NavLink>
                                             
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="card fit-cards">
                                            <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                            <span className="fit-img-txt">Public</span>
                                            <div className="card-body lh-lg">
                                              <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                              <span className="card-text ">
                                                <span>
                                                 <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                </span>
                                                <span className="text-dark  card-txt-2">
                                                    Run 100 kms in 7 days
                                                </span>
                                            </span>
                                            <span className="card-text-2 d-block">
                                                <span className="fit-icon-2">
                                                    <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                </span>
                                                <span className="text-dark  card-txt-3">
                                                    Mar 1 to Mar 7,2021 : 4 days remaining
                                                </span>
                                            </span>
                                            <span className="card-text-3 d-block">
                                                <span className="fit-icon-3">
                                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                                </span>
                                                <span className="fw-bold  card-txt-4">
                                                    900 / - Onwards 
                                                </span>
                                            </span>
                                            <span className="card-text-5 d-block ps-1">
                                                <span className="fit-content text-dark">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <span className="fit-content text-dark ps-3">
                                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                                    Earn 100 Points
                                                </span>
                                            </span>

                                            <NavLink to="#" className="card-btn mt-3">Join Event</NavLink>
                                             
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="card fit-cards">
                                            <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                            <span className="fit-img-txt">Public</span>
                                            <div className="card-body lh-lg">
                                              <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                              <span className="card-text ">
                                                <span>
                                                 <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                </span>
                                                <span className="text-dark  card-txt-2">
                                                    Run 100 kms in 7 days
                                                </span>
                                            </span>
                                            <span className="card-text-2 d-block">
                                                <span className="fit-icon-2">
                                                    <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                </span>
                                                <span className="text-dark  card-txt-3">
                                                    Mar 1 to Mar 7,2021 : 4 days remaining
                                                </span>
                                            </span>
                                            <span className="card-text-3 d-block">
                                                <span className="fit-icon-3">
                                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                                </span>
                                                <span className="fw-bold  card-txt-4">
                                                    900 / - Onwards 
                                                </span>
                                            </span>
                                            <span className="card-text-5 d-block ps-1">
                                                <span className="fit-content text-dark">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <span className="fit-content text-dark ps-3">
                                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                                    Earn 100 Points
                                                </span>
                                            </span>

                                            <NavLink to="#" className="card-btn mt-3">Join Event</NavLink>
                                             
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="card fit-cards">
                                            <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                            <span className="fit-img-txt">Public</span>
                                            <div className="card-body lh-lg">
                                              <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                              <span className="card-text ">
                                                <span>
                                                 <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                </span>
                                                <span className="text-dark  card-txt-2">
                                                    Run 100 kms in 7 days
                                                </span>
                                            </span>
                                            <span className="card-text-2 d-block">
                                                <span className="fit-icon-2">
                                                    <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                </span>
                                                <span className="text-dark  card-txt-3">
                                                    Mar 1 to Mar 7,2021 : 4 days remaining
                                                </span>
                                            </span>
                                            <span className="card-text-3 d-block">
                                                <span className="fit-icon-3">
                                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                                </span>
                                                <span className="fw-bold  card-txt-4">
                                                    900 / - Onwards 
                                                </span>
                                            </span>
                                            <span className="card-text-5 d-block ps-1">
                                                <span className="fit-content text-dark">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <span className="fit-content text-dark ps-3">
                                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                                    Earn 100 Points
                                                </span>
                                            </span>

                                            <NavLink to="#" className="card-btn mt-3">Join Event</NavLink>
                                             
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="card fit-cards">
                                            <img src="../assets/images/fit-1.jpg" className="card-img-top img-fluid" alt="..."/>
                                            <span className="fit-img-txt">Public</span>
                                            <div className="card-body lh-lg">
                                              <h5 className="card-title text-dark fw-bold">Burn 200 Calories Daily</h5>
                                              <span className="card-text ">
                                                <span>
                                                 <img src="../assets/images/shu-fit.png" alt="" className="fit-icons img-fluid"/> 
                                                </span>
                                                <span className="text-dark  card-txt-2">
                                                    Run 100 kms in 7 days
                                                </span>
                                            </span>
                                            <span className="card-text-2 d-block">
                                                <span className="fit-icon-2">
                                                    <i className="fa fa-calculator text-dark" aria-hidden="true"></i>
                                                </span>
                                                <span className="text-dark  card-txt-3">
                                                    Mar 1 to Mar 7,2021 : 4 days remaining
                                                </span>
                                            </span>
                                            <span className="card-text-3 d-block">
                                                <span className="fit-icon-3">
                                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                                </span>
                                                <span className="fw-bold card-txt-4">
                                                    900 / - Onwards 
                                                </span>
                                            </span>
                                            <span className="card-text-5 d-block ps-1">
                                                <span className="fit-content text-dark">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    100 Participents
                                                </span>
                                                <span className="fit-content text-dark ps-3">
                                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                                    Earn 100 Points
                                                </span>
                                            </span>

                                            <NavLink to="#" className="card-btn mt-3">Join Event</NavLink>
                                             
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
     

  )
}

export default Events