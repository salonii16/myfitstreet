import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
   <footer className="footer_2">
            <div className="container-fluid bg-black py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-auto">
                            <div className="footer_2_text text-lg-start text-center">
                                FITSTREET
                            </div>
                        </div>
                        <div className="col-12 col-lg">
                            <div className="footer_list">
                                <ul className="d-md-flex align-items-center justify-content-center list-unstyled gap-3 text-lg-start text-center pt-lg-0 pt-4">
                                    <li className="mb-2 mb-md-0">
                                        <NavLink to="/feature" className="text-decoration-none text-white">Features</NavLink>
                                    </li>
                                    <li className="mb-2 mb-md-0">
                                        <NavLink to="/contact" className="text-decoration-none
                                            text-white">Contact Us</NavLink>
                                    </li>
                                    <li className="mb-2 mb-md-0">
                                        <NavLink to="/about" className="text-decoration-none
                                            text-white">About Us</NavLink>
                                    </li>
                                    <li className="mb-2 mb-md-0">
                                        <NavLink to="/terms" className="text-decoration-none
                                            text-white">Terms &amp; Conditions</NavLink>
                                    </li>
                                    <li className="mb-2 mb-md-0">
                                        <NavLink to="/privacy" className="text-decoration-none
                                            text-white">Privacy Policy</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-auto d-md-flex justify-content-lg-start justify-content-xl-end  justify-content-center pt-lg-0 pt-4">
                            <div className="d-flex justify-content-lg-end justify-content-center align-items-center footer2_Icon gap-3">
                                <div className="icon_social">
                                    <img src="assets/images/image-66.png" alt="facebook"/>
                                </div>
                                <div className="icon_social">
                                    <img src="assets/images/image-67.png" alt="twitter"/>
                                </div>
                                <div className="icon_social">
                                    <img src="assets/images/image-68.png" alt="linkedin"/>
                                </div>

                            </div>
                        </div>
                        <div className="border_btm mt-3"></div>
                        <div className="col-12 py-3">
                            <div className="text-center text-white">Copyrights @ All
                                Rights Reserved</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer