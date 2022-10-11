import React from 'react'

import { NavLink } from 'react-router-dom'


function About() {
  return (
    <div>

        
    <section className="aboutUs py-5 mt-5 position-relative">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row justify-content-between align-items-center align-items-sm-end">
                        <div className=" col col-md-6">
                            <div className="aboutHeading">
                                Believe You Can and You Will For Your Dedicated Goals
                            </div>
                        </div>
                        <div className="col-auto">
                            <NavLink className="goToBottom" to="#moreabout"><img className="w-100" src="assets/images/image-47.png" alt=""/></NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <div className="imgOuter">
                        <img className="w-100" src="assets/images/image-208.png" alt=""/>
                    </div>
                </div>
                <div className="col-12" id="moreabout">
                    <div className="row">
                        <div className=" col-12 col-md-6 mt-4 my-md-4">
                            <div className="aboutHeading">
                                To Make Great Efforts To Achieve Or Obtain
                            </div>
                            <p>This is an opportunity to push yourself. whether you start challenge at the beginning of
                                the month or join in the last week, set a goal and make it happen or join in the last
                                week, set a goal and make it happen you will get progress and updates to keep you along
                                the way beginning of the month or join in the last week</p>
                        </div>
                        <div className=" col-12 col-md-6 col-lg-5">
                            <div className="stories">
                                <div className="p-3">
                                    <div className="aboutSubHeading mb-2"> Fitstreet Stories </div>
                                <p>Manage and track your fitness data and join challenges. everyone can access easily and manage dataManage and track your fitness data and join challenges.  and manage dataManage and track your fitness data and join challenges. </p>
                                <button type="button" className="btn learnMoreBtn border-0 btn-theme2 px-4  mt-3"> Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-5 px-md-5">
                    <div className="imgOuter">
                        <img className="w-100" src="assets/images/image-46.png" alt=""/>
                    </div>
                    <p className="demoTxt mt-4 text-center">Lorem ipsum is simply dummy text of the printing and type setting.dummy text of the printing. Lorem ipsum is simply dummy text of the.</p>
                </div>
            </div>
        </div>
    </section>

       
    </div>
  )
}

export default About













