import React from 'react'

function UserProfile() {
  return (
    <div>
        <div className="col-12 pt-3 pt-lg-4 px-3 px-lg-4">
                                <div className="bannerMainBox bg-white">
                                    <div className="position-relative bannerBox">
                                        <img className="w-100" src="../assets/images/image-159.png" alt="image-159"/>
                                        <div className="profileImage">
                                            <img className="w-100" src="../assets/images/image-75.png" alt="image-75"/>
                                        </div>
                                    </div>
                                    <div className="userProfileTxt">
                                        <div className="row g-3">
                                            <div className="col">
                                                <div className="fw-bold userName">Joseph Martin</div>
                                                <div className="userGender">38, Male</div>
                                            </div>
                                            <div className="col-auto">
                                                {/* <!-- Button Profile edit modal --> */}
                                                <button type="button" className="btn border-0 editProfileBtn"
                                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <img className="w-100" src="../assets/images/image-131.png"
                                                        alt="image-131"/>
                                                </button>
                                            </div>
                                            <div className="col-auto">
                                                <div className="editProfileBtn">
                                                    <img className="w-100" src="../assets/images/image-267.png"
                                                        alt="image-267"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
   
       
{/* 
    <!-- Profile edit Modal --> */}
    <div className="modal fade profileEditModal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down">
            <div className="modal-content">
                <div className="modal-header border-0 p-4 modalHeader">
                    <h5 className="modal-title fw-bold modalTitle" id="exampleModalLabel">Edit Profile</h5>
                    <button type="button" className="border-0 bg-transparent" data-bs-dismiss="modal" aria-label="Close">
                        <img className="closeModal" src="../assets/images/image-62.png" alt="image-62.png"/>
                    </button>
                </div>
                <div className="modal-body modalBodyContent">
                    <div className="container-fluid">
                        <form action="">
                            <div className="row g-3">
                                <div className="col-12 d-flex justify-content-center">
                                    <div className="position-relative d-inline-block mb-3">
                                        <div className="userImageBox">
                                            <img className="w-100" src="../assets/images/image-75.png" alt="image-75"/>
                                        </div>
                                        <label className="form-label bg-theme1 m-0 updateImgBtn" for="userImgUpdate">
                                            <div className="updateImage">
                                                <img className="updateIconImage" src="../assets/images/image-230.png"
                                                    alt="image-230"/>
                                            </div>
                                        </label>
                                        <input className="form-control d-none" type="file" id="userImgUpdate"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <input type="text" className="form-control shadow-none px-3 profileEditForm"
                                        value="Joseph" placeholder="First name" aria-label="First name"/>
                                </div>
                                <div className="col-12 col-md-6">
                                    <input type="text" className="form-control shadow-none px-3 profileEditForm"
                                        value="Martin" placeholder="Last name" aria-label="Last name"/>
                                </div>
                                <div className="col-12">
                                    <input type="email" className="form-control shadow-none px-3 profileEditForm"
                                        value="Johndemart08@gmail.com" placeholder="Enter email"
                                        aria-label="Enter email"/>
                                </div>
                                <div className="col-12">
                                    <div className="position-relative">
                                        <input type="text"
                                            className="form-control shadow-none pe-3 profileEditForm inputContactNo"
                                            value="8955689890" placeholder="Phone"/>
                                        <div className="inputCountryCode">
                                            <img className="countryMapImg" src="../assets/images/image-36.png"
                                                alt="image-36"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <select className="form-select shadow-none px-3 profileEditForm">
                                        <option selected>Male</option>
                                        <option value="1">Female</option>
                                        <option value="2">Other</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="position-relative">
                                        <input type="date" className="form-control shadow-none px-3 profileEditForm"
                                            placeholder="Select date"/>
                                        <img className="calendarImage" src="../assets/images/image-44.png" alt="image-44"/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="position-relative">
                                        <input type="text" className="form-control shadow-none px-3 profileEditForm"
                                            value="152" placeholder=""/>
                                        <select className="form-select shadow-none border-0 sizeInputSelect" id="">
                                            <option selected>cm</option>
                                            <option value="1">mm</option>
                                            <option value="2">inch</option>
                                            <option value="3">feet</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="position-relative">
                                        <input type="text" className="form-control shadow-none px-3 profileEditForm"
                                            value="68" placeholder=""/>
                                        <select className="form-select shadow-none border-0 sizeInputSelect" id="">
                                            <option selected>kgs</option>
                                            <option value="1">gm</option>
                                            <option value="2">mg</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer border-0 justify-content-start modalFooter">
                    <button type="button" className="btn btn-theme2 shadow-none border-0 mx-2 InfoUpdateBtn">Update</button>
                    <button type="button" className="btn shadow-none border-0 p-0 bg-transparent ms-2"
                        data-bs-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default UserProfile