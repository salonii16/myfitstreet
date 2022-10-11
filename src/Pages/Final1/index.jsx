import React from 'react'
import { NavLink}  from "react-router-dom";


function Final1() {
  return (
    <div>
       
       
    <section className="finalHeroSection py-5 mt-5 position-relative">
        <div className="container px0">
            <div className="row mx0">
                <div className="col-12 col-lg-7 order-2 order-lg-1">
                    <div className="leftSide">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="fianlHeroHeading mb-4">For The Athlete In You</h1>
                                <p>Manage and track your fitness data and join challenges. everyone can access easily and manage data. Share your best time with followers. </p>
                            </div>
                            <div className="col-12 mt-3">
                                <NavLink to="#" className=" btn appDownloadBtn me-2 me-sm-4 p-0">
                                    <img className="w-100" src="assets/images/image-129.png" alt=""/>
                                </NavLink>
                                <NavLink to="#" className=" btn appDownloadBtn p-0">
                                    <img className="w-100" src="assets/images/image-130.png" alt=""/>
                                </NavLink>
                            </div>
                            <div className="col-12 mt-5">
                                <div className="row position-relative">
                                    <div className="col-12 col-sm-6 col-lg-4 d-flex d-md-block align-items-center">
                                        <div className="imgIcon me-3 mb-3">
                                            <img className="w-100" src="assets/images/image-2.png" alt=""/>
                                        </div>
                                        <div className="serviceType">
                                            <h4 className="title">Track & Analyza</h4>
                                            <span>Track activity easily with feetstreet</span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4 d-flex d-md-block align-items-center">
                                        <div className="imgIcon me-3 mb-3">
                                            <img className="w-100" src="assets/images/image-3.png" alt=""/>
                                        </div>
                                        <div className="serviceType">
                                            <h4 className="title">Share & Connect</h4>
                                            <span>Connect your device & share activity</span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4 d-flex d-md-block align-items-center">
                                        <div className="imgIcon me-3 mb-3">
                                            <img className="w-100" src="assets/images/image-4.png" alt=""/>
                                        </div>
                                        <div className="serviceType">
                                            <h4 className="title">Join Challenges</h4>
                                            <span>Join different activity challenges.</span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4 d-flex d-md-block align-items-center mt-4">
                                        <div className="imgIcon me-3 mb-3">
                                            <img className="w-100" src="assets/images/image-5.png" alt=""/>
                                        </div>
                                        <div className="serviceType">
                                            <h4 className="title">Explore & Compete</h4>
                                            <span>Track activity easily with feetstreet</span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4 d-flex d-md-block align-items-center mt-4">
                                        <div className="imgIcon me-3 mb-3">
                                            <img className="w-100" src="assets/images/image-6.png" alt=""/>
                                        </div>
                                        <div className="serviceType">
                                            <h4 className="title">Join Activity Clubs</h4>
                                            <span>Connect your device & share activity</span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4 d-flex d-md-block align-items-center mt-4">
                                        <div className="imgIcon me-3 mb-3">
                                            <img className="w-100" src="assets/images/image-7.png" alt=""/>
                                        </div>
                                        <div className="serviceType">
                                            <h4 className="title">Find Routs</h4>
                                            <span>Join different activity challenges.</span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="button" className="btn viewAll d-none d-md-block position-absolute">View All</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-5 pe-0 order-1 order-lg-2">
                    <div className="heroImgOuter mx-auto position-absolute end-0 bottom-0 d-none d-md-block">
                        <img className="w-100" src="assets/images/image-31.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    </div>
  )
}

export default Final1