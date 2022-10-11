import React from 'react'
import { NavLink } from 'react-router-dom'
function Rightsection() {
  return (
    <div
    className="col-12 col-md-7 col-lg-8 mt-3 mt-lg-4 px-md-3 px-lg-4 flex-fill h-100 rightSection">
    <div className="tab-content MainTabContent" id="v-pills-tabContent">
        <div className="tab-pane fade" id="fitnessStatistics" role="tabpanel"
            aria-labelledby="fitnessStatistics-tab" tabindex="0">disabled</div>
        <div className="tab-pane fade show active" id="myLeaderboard" role="tabpanel"
            aria-labelledby="myLeaderboard-tab" tabindex="0">
            <div className="row">
                <div className="col-12">
                    <div className="bg-white p-3 p-lg-4 tabContentSection1">
                        <div className="row pb-3 px-2 rightPartHeader">
                            <div className="col">
                                <div className="fw-bold maintitle">View Leaderboard</div>
                            </div>
                            <div className="col-auto">
                                <div className="form-check checkRadioBtn">
                                    <input className="form-check-input shadow-none checkBoxForm"
                                        type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1" checked/>
                                    <label className="form-check-label"
                                        for="flexRadioDefault1">Friends</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="form-check checkRadioBtn">
                                    <input className="form-check-input shadow-none checkBoxForm"
                                        type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault2"/>
                                    <label className="form-check-label"
                                        for="flexRadioDefault2">Near By</label>
                                </div>
                            </div>
                        </div>
                        <div className="row py-4 mx-0">
                            <div className="col-12 px-0">
                                <ul
                                    className="p-0 m-0 list-unstyled d-flex gap-2 overflow-auto">
                                    <li className="d-inline-block mt-1 mt-sm-0">
                                        <input type="checkbox" className="btn-check d-none"
                                            id="running" autocomplete="off"/>
                                        <label
                                            className="btn btnBorderd btn-outline-theme1 rounded-pill"
                                            for="running">Running</label>
                                    </li>
                                    <li className="d-inline-block mt-1 mt-sm-0">
                                        <input type="checkbox" className="btn-check d-none"
                                            id="walking" autocomplete="off"/>
                                        <label
                                            className="btn btnBorderd btn-outline-theme1 rounded-pill"
                                            for="walking">Walking</label>
                                    </li>
                                    <li className="d-inline-block mt-1 mt-sm-0">
                                        <input type="checkbox" className="btn-check d-none"
                                            id="cycling" autocomplete="off"/>
                                        <label
                                            className="btn btnBorderd btn-outline-theme1 rounded-pill"
                                            for="cycling">Cycling</label>
                                    </li>
                                    <li className="d-inline-block mt-1 mt-sm-0">
                                        <input type="checkbox" className="btn-check d-none"
                                            id="skipping" autocomplete="off"/>
                                        <label
                                            className="btn btnBorderd btn-outline-theme1 rounded-pill"
                                            for="skipping">Skipping</label>
                                    </li>
                                    <li className="d-inline-block mt-1 mt-sm-0">
                                        <input type="checkbox" className="btn-check d-none"
                                            id="jumping" autocomplete="off"/>
                                        <label
                                            className="btn btnBorderd btn-outline-theme1 rounded-pill"
                                            for="jumping">Jumping</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <div className="card mainCard">
                                    <div className="card-header py-3 bg-transparent cardHeader">
                                        <div className="fw-bold cardTitle">Own History</div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col">
                                                <div>Rank</div>
                                            </div>
                                            <div className="col-auto">
                                                <div>#34</div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <div>Best Timing of Run</div>
                                            </div>
                                            <div className="col-auto">
                                                <div>1 hr 40 mins</div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <div>Longest Run</div>
                                            </div>
                                            <div className="col-auto">
                                                <div>20 kms</div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <div>Total Run (kms)</div>
                                            </div>
                                            <div className="col-auto">
                                                <div>1000</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div>Calories</div>
                                            </div>
                                            <div className="col-auto">
                                                <div>2000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="card mainCard">
                                    <div className="card-header py-3 bg-transparent cardHeader">
                                        <div className="fw-bold cardTitle">Friends</div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col">
                                                <div>Rank</div>
                                            </div>
                                            <div className="col-auto">
                                                <div>#24</div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <div>Best Timing of Run</div>
                                            </div>
                                            <div className="col-auto">
                                                <div>2 hr 40 mins</div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <div>Longest Run</div>
                                            </div>
                                            <div className="col-auto">
                                                <div>50 kms</div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <div>Total Run (kms)</div>
                                            </div>
                                            <div className="col-auto">
                                                <div>3000</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div>Calories</div>
                                            </div>
                                            <div className="col-auto">
                                                <div>3000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 friendsListSec">
                            <div className="col-12">
                                <div className="fw-bold mb-3 tabletitle">Friends List</div>
                            </div>
                            <div className="col-12">
                                <table className="friendsListtable">
                                    <thead className="tableHeader">
                                        <tr className="headerRow">
                                            <th scope="col" className="tableCol1">Rank</th>
                                            <th scope="col" className="tableCol2">Athlete</th>
                                            <th scope="col" className="tableCol3">Distance
                                                <i className="fw-light">(km)</i>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="tableBody">
                                        <tr>
                                            <td>1</td>
                                            <td className="d-flex align-items-center"><img
                                                    className="friendImage"
                                                    src="../assets/images/image-148.png"
                                                    alt="image-148"/> Samantha Martin</td>
                                            <td>11,900</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className="d-flex align-items-center"><img
                                                    className="friendImage"
                                                    src="../assets/images/image-160new.png"
                                                    alt="image-160new"/> John Joseph</td>
                                            <td>20,990</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td className="d-flex align-items-center"><img
                                                    className="friendImage"
                                                    src="../assets/images/image-150.png"
                                                    alt="image-150"/> Yusuf Topivala</td>
                                            <td>89002</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td className="d-flex align-items-center"><img
                                                    className="friendImage"
                                                    src="../assets/images/image-75.png"
                                                    alt="image-75"/> Martin Anaes</td>
                                            <td>67829</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td className="d-flex align-items-center"><img
                                                    className="friendImage"
                                                    src="../assets/images/image-150.png"
                                                    alt="image-150"/> Sameera patel</td>
                                            <td>15100</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td className="d-flex align-items-center"><img
                                                    className="friendImage"
                                                    src="../assets/images/image-153.png"
                                                    alt="image-153"/> Martian Samantha</td>
                                            <td>15050</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td className="d-flex align-items-center"><img
                                                    className="friendImage"
                                                    src="../assets/images/image-162.png"
                                                    alt="image-162"/> meera patel</td>
                                            <td>7000</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td className="d-flex align-items-center"><img
                                                    className="friendImage"
                                                    src="../assets/images/image-123.png"
                                                    alt="image-123"/> Jeson janne</td>
                                            <td>5200</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td className="d-flex align-items-center"><img
                                                    className="friendImage"
                                                    src="../assets/images/image-150.png"
                                                    alt="image-150"/> Sameera patel</td>
                                            <td>15100</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td className="d-flex align-items-center"><img
                                                    className="friendImage"
                                                    src="../assets/images/image-153.png"
                                                    alt="image-153"/> Martian Samantha</td>
                                            <td>15050</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="tableFooter p-3 pb-0">
                                    <div
                                        className="d-flex align-itens-center justify-content-center">
                                        <div className="px-3 nextPrevBtn"><img
                                                className="nextPrevImg"
                                                src="../assets/images/image-164.png"
                                                alt="image-164"/></div>
                                        <div>01 - 10 out of 2103</div>
                                        <div className="px-3 nextPrevBtn"><img
                                                className="nextPrevImg"
                                                src="../assets/images/image-165.png"
                                                alt="image-164"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tab-pane fade" id="myActvityLog" role="tabpanel"
            aria-labelledby="myActvityLog-tab" tabindex="0">
            <div className="row myActvityLogTab px-3 px-lg-4 h-100 gap-4 position-relative">
                <div className="col-auto px-0 filters">
                    <div className="row mx-0">
                        <div className="col-6 px-0 todayDataHeader pb-2">
                            <div className="row align-items-center">
                                <div className="col mainTitle">Filters</div>
                                <div className="col-auto"><button type="button"
                                        className="btn textBtn text-theme1 border-0 shadow-none p-0">Clear
                                        Filters</button></div>
                            </div>
                        </div>
                        <div className="col-12 px-0">
                            <ul className="p-0 m-0 list-unstyled d-flex gap-2 overflow-auto">
                                <li className="d-inline-block mt-1 mt-sm-0">
                                    <input type="checkbox" className="btn-check d-none"
                                        id="running1" autocomplete="off"/>
                                    <label
                                        className="btn btnBorderd btn-outline-theme1 rounded-pill"
                                        for="running1">Running</label>
                                </li>
                                <li className="d-inline-block mt-1 mt-sm-0">
                                    <input type="checkbox" className="btn-check d-none"
                                        id="walking1" autocomplete="off"/>
                                    <label
                                        className="btn btnBorderd btn-outline-theme1 rounded-pill"
                                        for="walking1">Walking</label>
                                </li>
                                <li className="d-inline-block mt-1 mt-sm-0">
                                    <input type="checkbox" className="btn-check d-none"
                                        id="cycling1" autocomplete="off"/>
                                    <label
                                        className="btn btnBorderd btn-outline-theme1 rounded-pill"
                                        for="cycling1">Cycling</label>
                                </li>
                                <li className="d-inline-block mt-1 mt-sm-0">
                                    <input type="checkbox" className="btn-check d-none"
                                        id="skipping1" autocomplete="off"/>
                                    <label
                                        className="btn btnBorderd btn-outline-theme1 rounded-pill"
                                        for="skipping1">Skipping</label>
                                </li>
                                <li className="d-inline-block mt-1 mt-sm-0">
                                    <input type="checkbox" className="btn-check d-none"
                                        id="jumping1" autocomplete="off"/>
                                    <label
                                        className="btn btnBorderd btn-outline-theme1 rounded-pill"
                                        for="jumping1">Jumping</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 px-0">
                    <div className="calendar">
                        <img className="w-100" src="../assets/images/image-240.png"
                            alt="image-240"/>
                    </div>
                </div>
                <div className="col-12 px-0">
                    <NavLink to="clubs-activity-post-details.html"
                        className="text-decoration-none text-black">
                        <div className="bg-white p-md-4 p-3 card_box_sh cusser">
                            <div className="row mx-0 card_box_profile">
                                <div className="col-12">
                                    <div
                                        className="row align-items-center justify-content-between">
                                        <div className="col-auto px-0">
                                            <div
                                                className="d-flex align-items-center user_name_image">
                                                <img src="../assets/images/image-119.png"
                                                    className="user_image" alt="Profile_pic"/>
                                                <div className="profile_user_text mb-2">
                                                    <div className="user_name mb-2 ms-2">Joseph
                                                        Martin</div>
                                                    <div className="time_and_Date ms-2">10 Mar
                                                        2021,
                                                        10:30 PM </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col icon_dropy px-0">
                                            <div className="dropdown box_drop text-end">
                                                <span className="dropdown-toggle toggle_Drop"
                                                    id="dropdownMenuButton1"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false" type="button">
                                                    <img src="../assets/images/image-210.png"
                                                        alt="icon_image"/>
                                                </span>
                                                <ul className="dropdown-menu border-0 mt-2"
                                                    aria-labelledby="dropdownMenuButton1">
                                                    <li className=""><NavLink
                                                            className="dropdown-item dorop_item"
                                                            to="#"><span className="me-2"><img
                                                                    src="../assets/images/image-115.png"
                                                                    alt=""/></span>Report
                                                            Post</NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 text_Message mb-2 px-0">
                                            <div className="morning_walk_time">
                                                Morning Walk
                                            </div>
                                            <div className="summery_text">
                                                Lorem ipsum is simply dummy text of the
                                                printing
                                                and typesetting industry and ly dummy text
                                                of
                                                the printing and type setting industry... <NavLink
                                                    to="#"
                                                    className="text-decoration-none">more</NavLink>
                                            </div>
                                        </div>
                                        <div className="col-12 clc_time_km mb-3 px-0">
                                            <div className="d-flex align-items-center gap-md-4">
                                                <div
                                                    className="d-flex gap-md-2 gap-1 align-items-center">
                                                    <img className="image_ic1"
                                                        src="../assets/images/image-124.png"
                                                        alt="clock_icon"/>
                                                    <span className="icon_text">1 hr</span>
                                                </div>
                                                <div
                                                    className="d-flex gap-md-2 gap-1 align-items-center">
                                                    <img className="image_ic2"
                                                        src="../assets/images/image-125.png"
                                                        alt="clock_icon"/>
                                                    <span className="icon_text">160 km</span>
                                                </div>
                                                <div
                                                    className="d-flex gap-md-2 gap-1 align-items-center">
                                                    <img className="image_ic3"
                                                        src="../assets/images/image-126.png"
                                                        alt="clock_icon"/>
                                                    <span className="icon_text">200 cal</span>
                                                </div>
                                                <div
                                                    className="d-flex gap-md-2 gap-1 align-items-center">
                                                    <img className="image_ic4"
                                                        src="../assets/images/image-127.png"
                                                        alt="clock_icon"/>
                                                    <span className="icon_text">400m : 2hr 50
                                                        min</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 map mb-2 px-0">
                                            <div className="maps_card">
                                                {/* <!-- demo like last time remove image --> */}
                                                <NavLink to=""> <img className="w-100"
                                                        src="../assets/images/image-116.png"
                                                        alt="map"/> </NavLink>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-md-2 like_com_shr px-0">
                                            <div
                                                className="d-flex align-items-center justify-content-between">
                                                <div
                                                    className="d-flex align-items-center gap-md-2 gap-1">
                                                    <NavLink className="wid active" to="#">
                                                        <img src="../assets/images/image-120.png"
                                                            alt="like_icon"/></NavLink>
                                                    <NavLink className="wid" to="#"><img
                                                            src="../assets/images/image-121.png"
                                                            alt="Comment_icon"/></NavLink>
                                                    <NavLink className="wid" to="#"><img
                                                            src="../assets/images/image-122.png"
                                                            alt="Share_icon"/></NavLink>
                                                </div>
                                                <div className="view_Button ">
                                                    <NavLink className="text-decoration-none "
                                                        to=""><button
                                                            className="btn btn-white text-theme1 view_Button_a p-0 d-flex align-items-center">View
                                                            analysis <span><img className="ms-1"
                                                                    src="../assets/images/image-226.png"
                                                                    alt=""/></span></button></NavLink>
                                                </div>
                                            </div>
                                            <div className="liketext mt-lg-1">
                                                215 likes
                                            </div>
                                        </div>
                                        <div
                                            className="col-12 comment_all border-bottom pb-3 px-0">
                                            <div className="view_all_comments">
                                                <NavLink to=""
                                                    className="text-decoration-none "><button
                                                        className="view_com px-0 border-0 bg-white">View
                                                        all 50 comments</button></NavLink>
                                            </div>
                                            <div
                                                className="show_comment d-flex align-items-center">
                                                <div className="comment_user_nam">Joseph m.
                                                </div>
                                                <span className="comment_text">Thanks for
                                                    appreciation, Having gracefull for
                                                    you..</span>
                                            </div>
                                            <div
                                                className="show_comment d-flex align-items-center">
                                                <div className="comment_user_nam">Joseph m.
                                                </div>
                                                <span className="comment_text">Nice for
                                                    appreciation, Having gracefull for
                                                    you..</span>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3 bottam_user_image px-0">
                                            <div className="row mx-0">
                                                <div
                                                    className="col-auto px-0 me-md-2 d-flex align-items-center">
                                                    <div className="comment_image_user me-1">
                                                        <img src="../assets/images/image-123.png"
                                                            alt="usr_image" className="w-100"/>

                                                    </div>
                                                </div>
                                                <div className="col px-0 position-relative">
                                                    <input type="text"
                                                        className="form-control shadow-none  border-muted form_text  form_com"
                                                        id="comment1"
                                                        placeholder="Write comment..."/>
                                                    <button
                                                        className="position-absolute border-0  p-0"><img
                                                            className="com_img w-100 "
                                                            src="../assets/images/image-117.png"
                                                            alt="share_icon"/></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="col-12 bg-white p-md-4 p-3 card_box_sh">
                    <div className="row mx-0 card_box_profile">
                        <div className="col-12">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto px-0">
                                    <div className="d-flex align-items-center user_name_image">
                                        <img src="../assets/images/image-119.png"
                                            className="user_image" alt="Profile_pic"/>
                                        <div className="profile_user_text mb-2">
                                            <div className="user_name mb-2 ms-2">Joseph Martin
                                            </div>
                                            <div className="time_and_Date ms-2">10 Mar 2021,
                                                10:30 PM </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col icon_dropy px-0">
                                    <div className="dropdown box_drop text-end">
                                        <span className="dropdown-toggle toggle_Drop"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false"
                                            type="button">
                                            <img src="../assets/images/image-210.png"
                                                alt="icon_image"/>
                                        </span>
                                        <ul className="dropdown-menu border-0 mt-2"
                                            aria-labelledby="dropdownMenuButton1">
                                            <li className=""><NavLink className="dropdown-item dorop_item"
                                                    to="#"><span className="me-2"><img
                                                            src="../assets/images/image-115.png"
                                                            alt=""/></span>Report Post</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 text_Message mb-2 px-0">
                                    <div className="morning_walk_time">
                                        Night Cycling
                                    </div>
                                    <div className="summery_text">
                                        Lorem ipsum is simply dummy text of the printing and
                                        typesetting industry and ly dummy text of the
                                        printing and type setting industry... <NavLink to="#"
                                            className="text-decoration-none">more</NavLink>
                                    </div>
                                </div>
                                <div className="col-12 clc_time_km mb-3 px-0">
                                    <div className="d-flex align-items-center gap-md-4">
                                        <div
                                            className="d-flex gap-md-2 gap-1 align-items-center">
                                            <img className="image_ic1"
                                                src="../assets/images/image-124.png"
                                                alt="clock_icon"/>
                                            <span className="icon_text">1 hr</span>
                                        </div>
                                        <div
                                            className="d-flex gap-md-2 gap-1 align-items-center">
                                            <img className="image_ic2"
                                                src="../assets/images/image-125.png"
                                                alt="clock_icon"/>
                                            <span className="icon_text">160 km</span>
                                        </div>
                                        <div
                                            className="d-flex gap-md-2 gap-1 align-items-center">
                                            <img className="image_ic3"
                                                src="../assets/images/image-126.png"
                                                alt="clock_icon"/>
                                            <span className="icon_text">200 cal</span>
                                        </div>
                                        <div
                                            className="d-flex gap-md-2 gap-1 align-items-center">
                                            <img className="image_ic4"
                                                src="../assets/images/image-127.png"
                                                alt="clock_icon"/>
                                            <span className="icon_text">400m : 2hr 50 min</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 map mb-2 px-0">
                                    <div className="maps_card">
                                        {/* <!-- demo like last time remove image --> */}
                                        <NavLink to=""> <img className="w-100"
                                                src="../assets/images/image-116.png"
                                                alt="map"/> </NavLink>
                                    </div>
                                </div>
                                <div className="col-12 mb-md-2 like_com_shr px-0">
                                    <div
                                        className="d-flex align-items-center justify-content-between">
                                        <div
                                            className="d-flex align-items-center gap-md-2 gap-1">
                                            <NavLink className="wid active" to="#" > <img
                                                    src="../assets/images/image-120.png"
                                                    alt="like_icon"/></NavLink>
                                            <NavLink className="wid" to="#"><img
                                                    src="../assets/images/image-121.png"
                                                    alt="Comment_icon"/></NavLink>
                                            <NavLink className="wid" to="#"><img
                                                    src="../assets/images/image-122.png"
                                                    alt="Share_icon"/></NavLink>
                                        </div>
                                        <div className="view_Button ">
                                            <NavLink className="text-decoration-none " to=""><button
                                                    className="btn btn-white text-theme1 view_Button_a p-0 d-flex align-items-center">View
                                                    analysis <span><img className="ms-1"
                                                            src="../assets/images/image-226.png"
                                                            alt=""/></span></button></NavLink>
                                        </div>
                                    </div>
                                    <div className="liketext mt-lg-1">
                                        215 likes
                                    </div>
                                </div>
                                <div className="col-12 comment_all border-bottom pb-3 px-0">
                                    <div className="view_all_comments">
                                        <NavLink to="" className="text-decoration-none "><button
                                                className="view_com px-0 border-0 bg-white">View
                                                all 50 comments</button></NavLink>
                                    </div>
                                    <div className="show_comment d-flex align-items-center">
                                        <div className="comment_user_nam">Joseph m.</div>
                                        <span className="comment_text">Thanks for appreciation,
                                            Having gracefull for you..</span>
                                    </div>
                                    <div className="show_comment d-flex align-items-center">
                                        <div className="comment_user_nam">Joseph m.</div>
                                        <span className="comment_text">Nice for appreciation,
                                            Having gracefull for you..</span>
                                    </div>
                                </div>
                                <div className="col-12 mt-3 bottam_user_image px-0">
                                    <div className="row mx-0">
                                        <div
                                            className="col-auto px-0 me-md-2 d-flex align-items-center">
                                            <div className="comment_image_user me-1">
                                                <img src="../assets/images/image-123.png"
                                                    alt="usr_image" className="w-100"/>

                                            </div>
                                        </div>
                                        <div className="col px-0 position-relative">
                                            <input type="text"
                                                className="form-control shadow-none border-muted form_text  form_com"
                                                id="comment1"
                                                placeholder="Write comment..."/>
                                            <button
                                                className="position-absolute border-0  p-0"><img
                                                    className="com_img w-100 "
                                                    src="../assets/images/image-117.png"
                                                    alt="share_icon"/></button>
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
                                        <img src="../assets/images/image-119.png"
                                            className="user_image" alt="Profile_pic"/>
                                        <div className="profile_user_text mb-2">
                                            <div className="user_name mb-2 ms-2">Joseph Martin
                                            </div>
                                            <div className="time_and_Date ms-2">10 Mar 2021,
                                                10:30 PM </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col icon_dropy px-0">
                                    <div className="dropdown box_drop text-end">
                                        <span className="dropdown-toggle toggle_Drop"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false"
                                            type="button">
                                            <img src="../assets/images/image-210.png"
                                                alt="icon_image"/>
                                        </span>
                                        <ul className="dropdown-menu border-0 mt-2"
                                            aria-labelledby="dropdownMenuButton1">
                                            <li className=""><NavLink className="dropdown-item dorop_item"
                                                    to="#"><span className="me-2"><img
                                                            src="../assets/images/image-115.png"
                                                            alt=""/></span>Report Post</NavLink>
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
                                        printing and type setting industry... <NavLink to="#"
                                            className="text-decoration-none">more</NavLink>
                                    </div>
                                </div>
                                <div className="col-12 clc_time_km mb-3 px-0">
                                    <div className="d-flex align-items-center gap-md-4">
                                        <div
                                            className="d-flex gap-md-2 gap-1 align-items-center">
                                            <img className="image_ic1"
                                                src="../assets/images/image-124.png"
                                                alt="clock_icon"/>
                                            <span className="icon_text">1 hr</span>
                                        </div>
                                        <div
                                            className="d-flex gap-md-2 gap-1 align-items-center">
                                            <img className="image_ic2"
                                                src="../assets/images/image-125.png"
                                                alt="clock_icon"/>
                                            <span className="icon_text">160 km</span>
                                        </div>
                                        <div
                                            className="d-flex gap-md-2 gap-1 align-items-center">
                                            <img className="image_ic3"
                                                src="../assets/images/image-126.png"
                                                alt="clock_icon"/>
                                            <span className="icon_text">200 cal</span>
                                        </div>
                                        <div
                                            className="d-flex gap-md-2 gap-1 align-items-center">
                                            <img className="image_ic4"
                                                src="../assets/images/image-127.png"
                                                alt="clock_icon"/>
                                            <span className="icon_text">400m : 2hr 50 min</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mb-md-2 like_com_shr px-0">
                                    <div
                                        className="d-flex align-items-center justify-content-between">
                                        <div
                                            className="d-flex align-items-center gap-md-2 gap-1">
                                            <NavLink className="wid active" to="#"> <img
                                                    src="../assets/images/image-120.png"
                                                    alt="like_icon"/></NavLink>
                                            <NavLink className="wid" to="#"><img
                                                    src="../assets/images/image-121.png"
                                                    alt="Comment_icon"/></NavLink>
                                            <NavLink className="wid" to="#"><img
                                                    src="../assets/images/image-122.png"
                                                    alt="Share_icon"/></NavLink>
                                        </div>
                                        <div className="view_Button ">
                                            <NavLink className="text-decoration-none " to=""><button
                                                    className="btn btn-white text-theme1 view_Button_a p-0 d-flex align-items-center">View
                                                    analysis <span><img className="ms-1"
                                                            src="../assets/images/image-226.png"
                                                            alt=""/></span></button></NavLink>
                                        </div>
                                    </div>
                                    <div className="liketext mt-lg-1">
                                        215 likes
                                    </div>
                                </div>
                                <div className="col-12 comment_all border-bottom pb-3 px-0">
                                    <div className="view_all_comments">
                                        <NavLink to="" className="text-decoration-none "><button
                                                className="view_com px-0 border-0 bg-white">View
                                                all 50 comments</button></NavLink>
                                    </div>
                                    <div className="show_comment d-flex align-items-center">
                                        <div className="comment_user_nam">Joseph m.</div>
                                        <span className="comment_text">Thanks for appreciation,
                                            Having gracefull for you..</span>
                                    </div>
                                    <div className="show_comment d-flex align-items-center">
                                        <div className="comment_user_nam">Joseph m.</div>
                                        <span className="comment_text">Nice for appreciation,
                                            Having gracefull for you..</span>
                                    </div>
                                </div>
                                <div className="col-12 mt-3 bottam_user_image px-0">
                                    <div className="row mx-0">
                                        <div
                                            className="col-auto px-0 me-md-2 d-flex align-items-center">
                                            <div className="comment_image_user me-1">
                                                <img src="../assets/images/image-123.png"
                                                    alt="usr_image" className="w-100"/>

                                            </div>
                                        </div>
                                        <div className="col px-0 position-relative">
                                            <input type="text"
                                                className="form-control shadow-none  border-muted form_text  form_com"
                                                id="comment1"
                                                placeholder="Write comment..."/>
                                            <button
                                                className="position-absolute border-0  p-0"><img
                                                    className="com_img w-100 "
                                                    src="../assets/images/image-117.png"
                                                    alt="share_icon"/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tab-pane fade" id="setPreferences" role="tabpanel"
            aria-labelledby="setPreferences-tab" tabindex="0">
            <div className="row">
                <div className="col-12">
                    <div className="bg-white p-3 p-lg-4 tabContentSection3">
                        <form action="">
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="mb-2">Set Units</div>
                                    <div className="row g-3">
                                        <div className="col-12 col-md-6 col-xl-4">
                                            <div className="position-relative">
                                                <label for="height"
                                                    className="form-label px-3 profileEditForm">Height
                                                </label>
                                                <select
                                                    className="form-select shadow-none border-0 sizeInputSelect"
                                                    id="height">
                                                    <option selected>cm</option>
                                                    <option value="1">mm</option>
                                                    <option value="2">inch</option>
                                                    <option value="3">feet</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-4">
                                            <div className="position-relative">
                                                <label for="weight"
                                                    className="form-label px-3 profileEditForm">Weight
                                                </label>
                                                <select
                                                    className="form-select shadow-none border-0 sizeInputSelect"
                                                    id="weight">
                                                    <option selected>kgs</option>
                                                    <option value="1">gm</option>
                                                    <option value="2">mg</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-4">
                                            <div className="position-relative">
                                                <label for="distance"
                                                    className="form-label px-3 profileEditForm">Distance
                                                </label>
                                                <select
                                                    className="form-select shadow-none border-0 sizeInputSelect"
                                                    id="distance">
                                                    <option selected>kms</option>
                                                    <option value="1">mtr</option>
                                                    <option value="2">mile</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row g-3">
                                        <div className="col-12 col-md-6">
                                            <div className="mb-2">Tracking Preference</div>
                                            <div className="position-relative">
                                                <label for="trackingPreference"
                                                    className="form-check-label px-3 profileEditForm">Tracking
                                                    Preference</label>
                                                <div
                                                    className="form-check form-switch switchBtn">
                                                    <input
                                                        className="form-check-input shadow-none formCheckSwitch"
                                                        type="checkbox" role="switch"
                                                        id="trackingPreference"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="mb-2">Sharing Options Available
                                            </div>
                                            <div className="position-relative">
                                                <label for="autoShare"
                                                    className="form-check-label px-3 profileEditForm">Auto-Share
                                                </label>
                                                <div
                                                    className="form-check form-switch switchBtn">
                                                    <input
                                                        className="form-check-input shadow-none formCheckSwitch"
                                                        type="checkbox" role="switch"
                                                        id="autoShare" checked/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-2">Share As Post</div>
                                    <div className="row g-3">
                                        <div className="col-12 col-md-6">
                                            <div className="position-relative">
                                                <label for="instagram"
                                                    className="form-check-label px-3 profileEditForm">Instagram
                                                </label>
                                                <div
                                                    className="form-check form-switch switchBtn">
                                                    <input
                                                        className="form-check-input shadow-none formCheckSwitch"
                                                        type="checkbox" role="switch"
                                                        id="instagram" checked/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="position-relative">
                                                <label for="facebook"
                                                    className="form-check-label px-3 profileEditForm">Facebook
                                                </label>
                                                <div
                                                    className="form-check form-switch switchBtn">
                                                    <input
                                                        className="form-check-input shadow-none formCheckSwitch"
                                                        type="checkbox" role="switch"
                                                        id="facebook" checked/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 pt-4">
                                    <button type="submit"
                                        className="btn btn-theme2 shadow-none border-0 saveBtn">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="tab-pane fade" id="referralCode" role="tabpanel"
            aria-labelledby="referralCode-tab" tabindex="0">Referral Code section</div>
        <div className="tab-pane fade" id="manageAddresses" role="tabpanel"
            aria-labelledby="manageAddresses-tab" tabindex="0">manage Addresses section
        </div>
        <div className="tab-pane fade" id="changePassword" role="tabpanel"
            aria-labelledby="changePassword-tab" tabindex="0">change Password section</div>
        <div className="tab-pane fade" id="manageSubscriptionPlans" role="tabpanel"
            aria-labelledby="manageSubscriptionPlans-tab" tabindex="0">manage Subscription
            Plans section</div>
        <div className="tab-pane fade" id="raiseQuery" role="tabpanel"
            aria-labelledby="raiseQuery-tab" tabindex="0">raise Query</div>
    </div>
</div>
  )
}

export default Rightsection