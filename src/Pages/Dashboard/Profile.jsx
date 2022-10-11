import React from 'react'
import { NavLink } from 'react-router-dom'
import LeftSection from '../../Common/ProfileCommon/LeftSection'
import UserDetails from '../../Common/ProfileCommon/LeftSection'
import Rightsection from '../../Common/ProfileCommon/Rightsection'
import UserProfile from '../../Common/ProfileCommon/UserProfile'

function Profile() {
  return (
    <>
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
                                <NavLink className="navbar-brand p-1 d-none d-sm-inline-block" to="/dashboard">Dashboard</NavLink>
                                <div className="d-flex align-items-center ms-auto" id="navbarSupportedContent">
                                    <div className="position-relative ms-auto me-4 d-none d-lg-inline-block headerSearch">
                                        <img className="SearchIcon" src="../assets/images/image-71.png" alt="image-71"/>
                                        <button className="btn p-0 border-0 SearchRemove" type="button">
                                            <img className="inputIcon" src="../assets/images/image-72.png" alt="image-72"/>
                                        </button>
                                        <input className="form-control shadow-none bg-light border-0 searchInput"
                                            type="text" placeholder="Search" aria-label="Search"/>
                                        <div className="position-absolute w-100 bg-white d-none dropdownTabs">
                                            <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab"
                                                role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className="nav-link rounded-0 border-0 px-1 pt-0 bg-transparent active"
                                                        id="users-tab" data-bs-toggle="pill" data-bs-target="#users"
                                                        type="button" role="tab" aria-controls="users"
                                                        aria-selected="true">Users</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link rounded-0 border-0 px-1 pt-0 bg-transparent"
                                                        id="events-tab" data-bs-toggle="pill" data-bs-target="#events"
                                                        type="button" role="tab" aria-controls="events"
                                                        aria-selected="false">Events</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link rounded-0 border-0 px-1 pt-0 bg-transparent"
                                                        id="clubs-tab" data-bs-toggle="pill" data-bs-target="#clubs"
                                                        type="button" role="tab" aria-controls="clubs"
                                                        aria-selected="false">Clubs</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link rounded-0 border-0 px-1 pt-0 bg-transparent"
                                                        id="health-articles-tab" data-bs-toggle="pill"
                                                        data-bs-target="#health-articles" type="button" role="tab"
                                                        aria-controls="health-articles" aria-selected="false">Health
                                                        Articles</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id="users" role="tabpanel"
                                                    aria-labelledby="users-tab" tabindex="0">
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-148.png" alt="image-148"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Lana Smith</div>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-160new.png"
                                                                alt="image-160new"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Yusuf Maruf</div>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-150.png" alt="image-150"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Joe Evans</div>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-75new.png"
                                                                alt="image-75new"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Sameer Patel</div>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-151.png" alt="image-151"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Miana Sojajane</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="events" role="tabpanel"
                                                    aria-labelledby="events-tab" tabindex="0">
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-258.png" alt="image-258"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Burn 200 Calories Daily</div>
                                                            <div className="updatetime">Mar 1 to Mar 7, 2021 : 21 days
                                                                untill start</div>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-259.png" alt="image-259"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Running Distance Challenge</div>
                                                            <div className="updatetime">Mar 1 to Mar 7, 2021 : 21 days
                                                                untill start</div>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-260.png" alt="image-260"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Walking Challenge</div>
                                                            <div className="updatetime">Mar 1 to Mar 7, 2021 : 21 days
                                                                untill start</div>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-261.png" alt="image-261"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Cycling Distance Challenge</div>
                                                            <div className="updatetime">Mar 1 to Mar 7, 2021 : 21 days
                                                                untill start</div>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-262.png" alt="image-262"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Skipping 20 Mins Daily</div>
                                                            <div className="updatetime">Mar 1 to Mar 7, 2021 : 21 days
                                                                untill start</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="clubs" role="tabpanel"
                                                    aria-labelledby="clubs-tab" tabindex="0">
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-154.png" alt="image-154"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Runner’s Club</div>
                                                            <div className="updatetime">Created on : 12 March 2020</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button type="button"
                                                                className="btn border-0 shadow-none followBtn">Private</button>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-155.png" alt="image-155"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Knight Runner’s Club</div>
                                                            <div className="updatetime">Created on : 12 March 2020</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button type="button"
                                                                className="btn border-0 shadow-none followBtn">Public</button>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-156.png" alt="image-156"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Run Cycling Club</div>
                                                            <div className="updatetime">Created on : 20 March 2020</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button type="button"
                                                                className="btn border-0 shadow-none followBtn">Public</button>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-154.png" alt="image-154"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Runner’s Club</div>
                                                            <div className="updatetime">Created on : 12 March 2020</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button type="button"
                                                                className="btn border-0 shadow-none followBtn">Private</button>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-155.png" alt="image-155"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Knight Runner’s Club</div>
                                                            <div className="updatetime">Created on : 12 March 2020</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button type="button"
                                                                className="btn border-0 shadow-none followBtn">Public</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="health-articles" role="tabpanel"
                                                    aria-labelledby="health-articles-tab" tabindex="0">
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-180.png" alt="image-180"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Hello Healthy - My FitnessPalBlog</div>
                                                            <div className="updatetime">10 Apr 2020, 9:30 PM</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button type="button"
                                                                className="btn border-0 shadow-none followBtn">Running</button>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-181.png" alt="image-181"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Fitness Run blog - My FitnessPal</div>
                                                            <div className="updatetime">10 Apr 2020, 9:30 PM</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button type="button"
                                                                className="btn border-0 shadow-none followBtn">Walking</button>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-182.png" alt="image-182"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Cycling moves Tips - My FitnessPal
                                                            </div>
                                                            <div className="updatetime">10 Apr 2020, 9:30 PM</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button type="button"
                                                                className="btn border-0 shadow-none followBtn">Cycling</button>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center mb-3">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-180.png" alt="image-180"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Hello Healthy - My FitnessPalBlog</div>
                                                            <div className="updatetime">10 Apr 2020, 9:30 PM</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button type="button"
                                                                className="btn border-0 shadow-none followBtn">Running</button>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 align-items-center">
                                                        <div className="col-auto">
                                                            <img className="followerImg"
                                                                src="../assets/images/image-181.png" alt="image-181"/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="fw-bold">Fitness Run blog - My FitnessPal</div>
                                                            <div className="updatetime">10 Apr 2020, 9:30 PM</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button type="button"
                                                                className="btn border-0 shadow-none followBtn">Running</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                        <li className="nav-item dropdown notificationDrop">
                                            <NavLink className="nav-link py-0" to="#" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false" data-bs-auto-close="outside">
                                                <img className="messageIcon" src="../assets/images/image-74.png"
                                                    alt="image-74"/>
                                            </NavLink>
                                            <div
                                                className="dropdown-menu dropdown-menu-end position-absolute border-0 notifiDrop">
                                                <div className="dropdown-header p-3">
                                                    <h5 className="dropdown-title fw-bold m-0 text-dark">Notification</h5>
                                                </div>
                                                <div className="dropdown-body py-2 px-3">
                                                    <ul className="nav nav-pills bg-light mb-3" id="pills-tab"
                                                        role="tablist">
                                                        <li className="nav-item w-50" role="presentation">
                                                            <button className="nav-link px-1 w-100 active"
                                                                id="followRequests-tab" data-bs-toggle="pill"
                                                                data-bs-target="#followRequests" type="button"
                                                                role="tab" aria-controls="followRequests"
                                                                aria-selected="true">Follow Requests</button>
                                                        </li>
                                                        <li className="nav-item w-50" role="presentation">
                                                            <button className="nav-link px-1 w-100" id="notifications-tab"
                                                                data-bs-toggle="pill" data-bs-target="#notifications"
                                                                type="button" role="tab" aria-controls="notifications"
                                                                aria-selected="false">Notifications</button>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content" id="pills-tabContent">
                                                        <div className="tab-pane fade show active" id="followRequests"
                                                            role="tabpanel" aria-labelledby="followRequests-tab"
                                                            tabindex="0">
                                                            <div className="row g-2 align-items-center mb-3">
                                                                <div className="col-auto">
                                                                    <img className="followerImg"
                                                                        src="../assets/images/image-148.png"
                                                                        alt="image-148"/>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="notificationText"><span
                                                                            className="fw-bold">Lana Smith</span> started
                                                                        following you</div>
                                                                </div>
                                                                <div className="col-auto">
                                                                    <button type="button"
                                                                        className="btn btn-theme2 btn-sm shadow-none followBtn">Follow</button>
                                                                </div>
                                                            </div>
                                                            <div className="row g-2 align-items-center mb-3">
                                                                <div className="col-auto">
                                                                    <img className="followerImg"
                                                                        src="../assets/images/image-160new.png"
                                                                        alt="image-160new"/>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="notificationText"><span
                                                                            className="fw-bold">Yusuf Maruf</span> started
                                                                        following you</div>
                                                                </div>
                                                                <div className="col-auto">
                                                                    <button type="button"
                                                                        className="btn btn-theme2 btn-sm shadow-none followBtn">Follow</button>
                                                                </div>
                                                            </div>
                                                            <div className="row g-2 align-items-center mb-3">
                                                                <div className="col-auto">
                                                                    <img className="followerImg"
                                                                        src="../assets/images/image-150.png"
                                                                        alt="image-150"/>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="notificationText"><span
                                                                            className="fw-bold">Joe Evans</span> started
                                                                        following you</div>
                                                                </div>
                                                                <div className="col-auto">
                                                                    <button type="button"
                                                                        className="btn btn-theme2 btn-sm shadow-none followBtn">Follow</button>
                                                                </div>
                                                            </div>
                                                            <div className="row g-2 align-items-center mb-3">
                                                                <div className="col-auto">
                                                                    <img className="followerImg"
                                                                        src="../assets/images/image-75new.png"
                                                                        alt="image-75new"/>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="notificationText"><span
                                                                            className="fw-bold">Sameer Patel</span> started
                                                                        following you</div>
                                                                </div>
                                                                <div className="col-auto">
                                                                    <button type="button"
                                                                        className="btn btn-theme2 btn-sm shadow-none followBtn">Follow</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="notifications" role="tabpanel"
                                                            aria-labelledby="notifications-tab" tabindex="0">
                                                            <div className="row g-2 align-items-center mb-3">
                                                                <div className="col-auto">
                                                                    <img className="followerImg"
                                                                        src="../assets/images/image-148.png"
                                                                        alt="image-148"/>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="notificationText">Lana Smith Sent you an
                                                                        image</div>
                                                                    <div className="text-dark updatetime">Just now</div>
                                                                </div>
                                                            </div>
                                                            <div className="row g-2 align-items-center mb-3">
                                                                <div className="col-auto">
                                                                    <img className="followerImg"
                                                                        src="../assets/images/image-160new.png"
                                                                        alt="image-160new"/>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="notificationText">Your post uploaded
                                                                        successfully on FitStreet</div>
                                                                    <div className="updatetime">10 Mar 20, 10:30 PM</div>
                                                                </div>
                                                            </div>
                                                            <div className="row g-2 align-items-center mb-3">
                                                                <div className="col-auto">
                                                                    <img className="followerImg"
                                                                        src="../assets/images/image-150.png"
                                                                        alt="image-150"/>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="notificationText">Joe Evans created a
                                                                        running club</div>
                                                                    <div className="updatetime">10 Mar 20, 10:30 PM</div>
                                                                </div>
                                                            </div>
                                                            <div className="row g-2 align-items-center mb-3">
                                                                <div className="col-auto">
                                                                    <img className="followerImg"
                                                                        src="../assets/images/image-75new.png"
                                                                        alt="image-75new"/>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="notificationText">Your order delivered
                                                                        successfully</div>
                                                                    <div className="updatetime">15 Apr 20, 10:30 PM</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="dropdown-footer pb-2 px-3">
                                                    <div className="d-flex justify-content-center pt-3 borderFooter">
                                                        <NavLink to="#"
                                                            className="text-decoration-none d-flex align-items-center allnotification">See
                                                            all notifications <img className="ms-2 rightArrow"
                                                                src="../assets/images/image-239.png"
                                                                alt="image-239"/></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink className="nav-link py-0 d-flex align-items-center dashBoardToggle" to="#"
                                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img className="me-0 me-md-1 userImage"
                                                    src="../assets/images/image-75new.png" alt="image"/>
                                                <img className="dropdownArrow d-none d-md-inline-block"
                                                    src="../assets/images/image-43.png" alt="image"/>
                                            </NavLink>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end position-absolute border-0 userDrop">
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
                        <div className="row mainBodyInner h-100 profileMyLeaderBoard">
                           <UserProfile/>
                           <LeftSection/>
                           <Rightsection/>
                        </div>
                    </div>
               
            </div>  
    </div>
    
    {/* <!--===================== Offcanvas sidebar ======================--> */}
    <div className="offcanvas offcanvas-start sidebarOffcanvas bg-theme2" tabindex="-1" id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header p-4 pb-0 align-items-start">
            <NavLink to="/dashboard" className="offcanvas-title" id="offcanvasExampleLabel"><img className="offcanvasLogo"
                    src="../assets/images/image-8.png" alt=""/></NavLink>
            <button type="button" className="btn p-1 pt-0 border-0" data-bs-dismiss="offcanvas" aria-label="Close">
                <img className="offcanvasClose" src="../assets/images/image-72.png" alt="image-72"/>
            </button>
        </div>
        <div className="offcanvas-body p-4">
            <div className="sidebarItemBox mt-0">
                <NavLink className="text-decoration-none text-white itemHover active" to="/dashboard">
                    <div className="me-3 sidebarItem">
                        <img src="../assets/images/image-77.png" alt="nav item image" className="sidebarItemImage"/>
                    </div>
                    <div className="dashboardText text-center" data-bs-toggle="tooltip" data-bs-placement="right"
                        data-bs-title="Dashboard">Dashboard</div>
                    <span className="ms-auto"><img className="rightArrow" src="../assets/images/image-165.png"
                            alt="image-165"/></span>
                </NavLink>
            </div>
            <div className="sidebarItemBox">
                <NavLink className="text-decoration-none text-white itemHover" to="/dashboard">
                    <div className="me-3 sidebarItem">
                        <img src="../assets/images/image-78.png" alt="nav item image" className="sidebarItemImage"/>
                    </div>
                    <div className="dashboardText text-center">Events</div>
                    <span className="ms-auto"><img className="rightArrow" src="../assets/images/image-165.png"
                            alt="image-165"/></span>
                </NavLink>
            </div>
            <div className="sidebarItemBox">
                <NavLink className="text-decoration-none text-white itemHover" to="/dashboard">
                    <div className="me-3 sidebarItem">
                        <img src="../assets/images/image-79.png" alt="nav item image" className="sidebarItemImage"/>
                    </div>
                    <div className="dashboardText text-center">Clubs</div>
                    <span className="ms-auto"><img className="rightArrow" src="../assets/images/image-165.png"
                            alt="image-165"/></span>
                </NavLink>
            </div>
            <div className="sidebarItemBox">
                <NavLink className="text-decoration-none text-white itemHover" to="/dashboard">
                    <div className="me-3 sidebarItem">
                        <img src="../assets/images/image-80.png" alt="nav item image" className="sidebarItemImage"/>
                    </div>
                    <div className="dashboardText text-center">Health Articles</div>
                    <span className="ms-auto"><img className="rightArrow" src="../assets/images/image-165.png"
                            alt="image-165"/></span>
                </NavLink>
            </div>
        </div>
    </div>

    {/* <!--===================== top Offcanvas searchbar ======================--> */}
    <div className="offcanvas offcanvas-top border-0 vh-100 searchTopoffcanvas" tabindex="-1" id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header pb-0">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">What are you Looking for?</h5>
            <button type="button" className="btn p-1 border-0" data-bs-dismiss="offcanvas" aria-label="Close">
                <img className="offcanvasClose" src="../assets/images/image-72.png" alt=""/>
            </button>
        </div>
        <div className="offcanvas-body">
            <form className="position-relative w-100 headerSearch">
                <input className="form-control shadow-none bg-light border-0 w-100 searchInput" type="search"
                    placeholder="Search here" aria-label="Search"/>
                <img className="SearchIcon" src="../assets/images/image-71.png" alt="image-71"/>
                <div className="position-absolute w-100 bg-white dropdownTabs">
                    <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link rounded-0 border-0 px-1 pt-0 bg-transparent active" id="users2-tab"
                                data-bs-toggle="pill" data-bs-target="#users2" type="button" role="tab"
                                aria-controls="users2" aria-selected="true">Users</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link rounded-0 border-0 px-1 pt-0 bg-transparent" id="events2-tab"
                                data-bs-toggle="pill" data-bs-target="#events2" type="button" role="tab"
                                aria-controls="events2" aria-selected="false">Events</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link rounded-0 border-0 px-1 pt-0 bg-transparent" id="clubs2-tab"
                                data-bs-toggle="pill" data-bs-target="#clubs2" type="button" role="tab"
                                aria-controls="clubs2" aria-selected="false">Clubs</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link rounded-0 border-0 px-1 pt-0 bg-transparent"
                                id="health-articles2-tab" data-bs-toggle="pill" data-bs-target="#health-articles2"
                                type="button" role="tab" aria-controls="health-articles2" aria-selected="false">Health
                                Articles</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="users2" role="tabpanel" aria-labelledby="users2-tab"
                            tabindex="0">
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-148.png" alt="image-148"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Lana Smith</div>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-160new.png" alt="image-160new"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Yusuf Maruf</div>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-150.png" alt="image-150"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Joe Evans</div>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-75new.png" alt="image-75new"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Sameer Patel</div>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-151.png" alt="image-151"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Miana Sojajane</div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="events2" role="tabpanel" aria-labelledby="events2-tab"
                            tabindex="0">
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-258.png" alt="image-258"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Burn 200 Calories Daily</div>
                                    <div className="updatetime">Mar 1 to Mar 7, 2021 : 21 days
                                        untill start</div>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-259.png" alt="image-259"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Running Distance Challenge</div>
                                    <div className="updatetime">Mar 1 to Mar 7, 2021 : 21 days
                                        untill start</div>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-260.png" alt="image-260"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Walking Challenge</div>
                                    <div className="updatetime">Mar 1 to Mar 7, 2021 : 21 days
                                        untill start</div>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-261.png" alt="image-261"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Cycling Distance Challenge</div>
                                    <div className="updatetime">Mar 1 to Mar 7, 2021 : 21 days
                                        untill start</div>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-262.png" alt="image-262"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Skipping 20 Mins Daily</div>
                                    <div className="updatetime">Mar 1 to Mar 7, 2021 : 21 days
                                        untill start</div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="clubs2" role="tabpanel" aria-labelledby="clubs2-tab"
                            tabindex="0">
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-154.png" alt="image-154"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Runner’s Club</div>
                                    <div className="updatetime">Created on : 12 March 2020</div>
                                </div>
                                <div className="col-auto">
                                    <button type="button" className="btn border-0 shadow-none followBtn">Private</button>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-155.png" alt="image-155"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Knight Runner’s Club</div>
                                    <div className="updatetime">Created on : 12 March 2020</div>
                                </div>
                                <div className="col-auto">
                                    <button type="button" className="btn border-0 shadow-none followBtn">Public</button>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-156.png" alt="image-156"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Run Cycling Club</div>
                                    <div className="updatetime">Created on : 20 March 2020</div>
                                </div>
                                <div className="col-auto">
                                    <button type="button" className="btn border-0 shadow-none followBtn">Public</button>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-154.png" alt="image-154"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Runner’s Club</div>
                                    <div className="updatetime">Created on : 12 March 2020</div>
                                </div>
                                <div className="col-auto">
                                    <button type="button" className="btn border-0 shadow-none followBtn">Private</button>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-155.png" alt="image-155"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Knight Runner’s Club</div>
                                    <div className="updatetime">Created on : 12 March 2020</div>
                                </div>
                                <div className="col-auto">
                                    <button type="button" className="btn border-0 shadow-none followBtn">Public</button>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="health-articles2" role="tabpanel"
                            aria-labelledby="health-articles2-tab" tabindex="0">
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-180.png" alt="image-180"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Hello Healthy - My FitnessPalBlog</div>
                                    <div className="updatetime">10 Apr 2020, 9:30 PM</div>
                                </div>
                                <div className="col-auto">
                                    <button type="button" className="btn border-0 shadow-none followBtn">Running</button>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-181.png" alt="image-181"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Fitness Run blog - My FitnessPal</div>
                                    <div className="updatetime">10 Apr 2020, 9:30 PM</div>
                                </div>
                                <div className="col-auto">
                                    <button type="button" className="btn border-0 shadow-none followBtn">Walking</button>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-182.png" alt="image-182"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Cycling moves Tips - My FitnessPal</div>
                                    <div className="updatetime">10 Apr 2020, 9:30 PM</div>
                                </div>
                                <div className="col-auto">
                                    <button type="button" className="btn border-0 shadow-none followBtn">Cycling</button>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center mb-3">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-180.png" alt="image-180"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Hello Healthy - My FitnessPalBlog</div>
                                    <div className="updatetime">10 Apr 2020, 9:30 PM</div>
                                </div>
                                <div className="col-auto">
                                    <button type="button" className="btn border-0 shadow-none followBtn">Running</button>
                                </div>
                            </div>
                            <div className="row g-2 align-items-center">
                                <div className="col-auto">
                                    <img className="followerImg" src="../assets/images/image-181.png" alt="image-181"/>
                                </div>
                                <div className="col">
                                    <div className="fw-bold">Fitness Run blog - My FitnessPal</div>
                                    <div className="updatetime">10 Apr 2020, 9:30 PM</div>
                                </div>
                                <div className="col-auto">
                                    <button type="button" className="btn border-0 shadow-none followBtn">Running</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
 

    {/* <!-- Followers - Following Modal Modal --> */}
    <div className="modal fade FollowersFollowingModal" id="FollowersModal" tabindex="-1"
        aria-labelledby="FollowersModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
                <div className="modal-header position-relative border-0 px-0 pb-0 modalHeader">
                    <ul className="nav nav-pills w-100" id="pills-tab" role="tablist">
                        <li className="nav-item w-50" role="presentation">
                            <button className="nav-link w-100 rounded-0 bg-transparent active" id="Followers-tab"
                                data-bs-toggle="pill" data-bs-target="#Followers" type="button" role="tab"
                                aria-controls="Followers" aria-selected="true">Followers</button>
                        </li>
                        <li className="nav-item w-50" role="presentation">
                            <button className="nav-link w-100 rounded-0 bg-transparent" id="Followings-tab"
                                data-bs-toggle="pill" data-bs-target="#Followings" type="button" role="tab"
                                aria-controls="Followings" aria-selected="false">Followings</button>
                        </li>
                    </ul>
                    <button type="button" className="border-0 bg-transparent modalClosebtn" data-bs-dismiss="modal"
                        aria-label="Close">
                        <img className="closeImg" src="../assets/images/image-62.png" alt="image-62.png"/>
                    </button>
                </div>
                <div className="modal-body modalBodyContent">
                    <div className="container-fluid mb-2">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="Followers" role="tabpanel"
                                aria-labelledby="Followers-tab" tabindex="0">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-148.png"
                                                    alt="image-148"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Lana
                                                    Smith</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <NavLink to="#" className="text-decoration-none me-1 sendBuzz">Send Buzz</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-outline-theme1 btn-sm shadow-none RemoveBtn">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-160new.png"
                                                    alt="image-160new"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Yusuf
                                                    Topivala</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <NavLink to="#" className="text-decoration-none me-1 sendBuzz">Send Buzz</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-outline-theme1 btn-sm shadow-none RemoveBtn">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-150.png"
                                                    alt="image-150"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Joe
                                                    Evans</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <NavLink to="#" className="text-decoration-none me-1 follow">Follow</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-outline-theme1 btn-sm shadow-none RemoveBtn">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-75.png"
                                                    alt="image-75"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Sameer
                                                    Patel</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <NavLink to="#" className="text-decoration-none me-1 sendBuzz">Send Buzz</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-outline-theme1 btn-sm shadow-none RemoveBtn">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-152.png"
                                                    alt="image-152"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Anesthesia
                                                    Siara</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <NavLink to="#" className="text-decoration-none me-1 sendBuzz">Send Buzz</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-outline-theme1 btn-sm shadow-none RemoveBtn">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-153.png"
                                                    alt="image-153"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Joe
                                                    Evans</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <NavLink to="#" className="text-decoration-none me-1 follow">Follow</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-outline-theme1 btn-sm shadow-none RemoveBtn">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-162.png"
                                                    alt="image-162"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Miana
                                                    Sojajane</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <NavLink to="#" className="text-decoration-none me-1 sendBuzz">Send Buzz</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-outline-theme1 btn-sm shadow-none RemoveBtn">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-152.png"
                                                    alt="image-152"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Anesthesia
                                                    Siara</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <NavLink to="#" className="text-decoration-none me-1 sendBuzz">Send Buzz</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-outline-theme1 btn-sm shadow-none RemoveBtn">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="Followings" role="tabpanel" aria-labelledby="Followings-tab"
                                tabindex="0">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-148.png"
                                                    alt="image-148"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Lana
                                                    Smith</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <NavLink to="#" className="text-decoration-none me-1 sendBuzz">Send Buzz</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-outline-theme1 btn-sm shadow-none RemoveBtn">Unfollow</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-160new.png"
                                                    alt="image-160new"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Yusuf
                                                    Topivala</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-theme1 border-0 text-white btn-sm shadow-none RemoveBtn">follow</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-150.png"
                                                    alt="image-150"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Joe
                                                    Evans</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-theme1 border-0 text-white btn-sm shadow-none RemoveBtn">follow</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-75.png"
                                                    alt="image-75"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Sameer
                                                    Patel</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <NavLink to="#" className="text-decoration-none me-1 sendBuzz">Send Buzz</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-outline-theme1 btn-sm shadow-none RemoveBtn">Unfollow</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-152.png"
                                                    alt="image-152"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Anesthesia
                                                    Siara</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <NavLink to="#" className="text-decoration-none me-1 sendBuzz">Send Buzz</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-outline-theme1 btn-sm shadow-none RemoveBtn">Unfollow</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-153.png"
                                                    alt="image-153"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Joe
                                                    Evans</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-theme1 border-0 text-white btn-sm shadow-none RemoveBtn">follow</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-162.png"
                                                    alt="image-162"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Miana
                                                    Sojajane</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <NavLink to="#" className="text-decoration-none me-1 sendBuzz">Send Buzz</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-outline-theme1 btn-sm shadow-none RemoveBtn">Unfollow</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-2 align-items-center">
                                            <div className="col-auto">
                                                <img className="followerImg" src="../assets/images/image-152.png"
                                                    alt="image-152"/>
                                            </div>
                                            <div className="col">
                                                <NavLink to="#"
                                                    className="text-decoration-none text-dark fw-bold FollowerName">Anesthesia
                                                    Siara</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <NavLink to="#" className="text-decoration-none me-1 sendBuzz">Send Buzz</NavLink>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button"
                                                    className="btn btn-outline-theme1 btn-sm shadow-none RemoveBtn">Unfollow</button>
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
    </>
  )
}

export default Profile