import React from 'react'
import { NavLink } from 'react-router-dom'

function FooterHome() {
  return (
    <>
      <footer className="footer pt-5">
            <div className="container pt-3">
                <div className="row">
                    <div className="col-12">
                        <div className="footerLogo text-md-start text-center pb-md-0 pb-4">
                            <img src="assets/images/image-8.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row pb-4 pb-sm-5 justify-content-lg-between">
                    <div className="col-lg-auto col-6 mt-4 pb-lg-0 pb-4">
                        <div className="footerMenu">
                            <div className="menuHeading">
                                <span>ABOUT US</span>
                            </div>
                            <ul className="p-0 m-0 list-unstyled">
                                <li className="mb-3">
                                    <NavLink className="text-decoration-none " to="">About Co-Founder</NavLink>
                                </li>
                                <li className="mb-3">
                                    <NavLink className="text-decoration-none " to="">Team Members</NavLink>
                                </li>
                                <li className="mb-3">
                                    <NavLink className="text-decoration-none " to="">Board of Advisors</NavLink>
                                </li>
                                <li className="">
                                    <NavLink className="text-decoration-none " to="">Features</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-auto col-6 mt-4 pb-lg-0 pb-4">
                        <div className="footerMenu">
                            <div className="menuHeading">
                                <span>BEHIND THE TIMES</span>
                            </div>
                            <ul className="p-0 m-0 list-unstyled">
                                <li className="mb-3">
                                    <NavLink className="text-decoration-none " to="">How FitStreet was
                                        established</NavLink>
                                </li>
                                <li className="mb-3">
                                    <NavLink className="text-decoration-none "to="">Our Journey</NavLink>
                                </li>
                                <li className="mb-3">
                                    <NavLink className="text-decoration-none " to="">How we are different?</NavLink>
                                </li>
                                <li className="">
                                    <NavLink className="text-decoration-none " to="">Our Values</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-auto col-6 mt-4 pb-lg-0 pb-4">
                        <div className="footerMenu">
                            <div className="menuHeading">
                                <span>Merchandise</span>
                            </div>
                            <ul className="p-0 m-0 list-unstyled">
                                <li className="mb-3">
                                    <NavLink className="text-decoration-none " to="">Explore Our Merchandise</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-auto col-6 mt-4 pb-lg-0 pb-4">
                        <div className="footerMenu">
                            <div className="menuHeading">
                                <span>Our clientelle</span>
                            </div>
                            <ul className="p-0 m-0 list-unstyled">
                                <li className="mb-3">
                                    <NavLink className="text-decoration-none " to="">Clientelle</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-auto col-6 mt-4 pb-lg-0 pb-4">
                        <div className="footerMenu">
                            <div className="menuHeading">
                                <span>MORE</span>
                            </div>
                            <ul className="p-0 m-0 list-unstyled">
                                <li className="mb-3">
                                    <NavLink className="text-decoration-none " to="/career">Careers</NavLink>
                                </li>
                                <li className="mb-3">
                                    <NavLink className="text-decoration-none " to="/contact">Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="socialLink">
                <div className="container">
                    <div className="row justify-content-sm-between justify-content-center align-items-center">
                        <div className="col-sm-auto">
                            <div className="footerMenu d-sm-flex d-grid align-items-center gap-2 gap-sm-0 justify-content-center">
                                <div className="menuHeading m-0">
                                    <span>FITSTREET SOCIAL</span>
                                </div>
                                <hr/>
                                <ul className="p-0 m-0 list-unstyled d-flex gap-2 gap-sm-4 justify-content-center">
                                    <li className="">
                                        <NavLink className="text-decoration-none
                                            " to="">
                                            <img src="assets/images/image-66.png" alt=""/>
                                        </NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink className="text-decoration-none
                                            " to="">
                                            <img src="assets/images/image-67.png" alt=""/>
                                        </NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink className="text-decoration-none
                                            " to="">
                                            <img src="assets/images/image-68.png" alt=""/>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto mt-3 mt-lg-0">
                            <ul className="p-0 m-0 list-unstyled d-flex gap-sm-4 gap-2 tremCondition">
                                <li className="">
                                    <NavLink className="text-decoration-none " to="/terms">Terms &amp; Conditions</NavLink>
                                </li>
                                <li>
                                    <span className="">|</span>
                                </li>
                                <li className="">
                                    <NavLink className="text-decoration-none " to="">Privacy Policy</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyRight py-4 text-center">
                <span className="">Copyrights @ All Rights Reserves to
                    FitStreet</span>
            </div>
        </footer>
    </>
  )
}

export default FooterHome