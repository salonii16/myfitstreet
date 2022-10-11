import React from 'react'
import { NavLink } from 'react-router-dom'

import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useLocation,useNavigate } from "react-router-dom";
import RegisterLoginWrapper from '../../Common/RegisterLoginWrapper.js';
function Verify() {
const location = useLocation()
const navigate = useNavigate()
console.log(location.state.details)
    function verify(value){
        console.log("value")
        var data = ({
            mobile: `${location.state.details}`,
            otp: `${value.otp}`
          });
          
          var config = {
            method: 'post',
            url: 'http://159.89.164.11:3000/api/otp-login',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
         
            if(response.data.status == true)
            {
              localStorage.setItem("token",response.data.data.auth)
              navigate('/dashboard')
              
            }else{
              alert(response.data.status)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
    <>
  
                  <RegisterLoginWrapper page="verfiy_password" Text="verfiy_side_Text">
                    <div className="col-md-6 d-flex align-items-center justify-content-lg-end justify-content-xl-center justify-content-center ">
                        <div  className="forms_web">
                            <div className=" row align-items-center justify-content-center">
                                <div className="col-12">
                                    <div className="form_Top_Heading mb-3">Verify Your Mobile Number </div>
                                    <div className="form_Top_Text mb-3"> Enter your OTP which is send on your Mobile Number.</div>
                                </div>
                                <div className="row reg_form">
                                    <div className="d-flex align-items-center justify-contrnt-between mb-3 px-0">
                                        <div className="col-10 ">
                                            <div className="otp_number_text">
                                                We sent you an OTP on this number 
                                                <div className="number text-black">
                                                    +91 8958658745
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <div className="col-2 text-end">
                                           <NavLink to="/login"> <img src="assets/images/image-41.png" alt="pancial"/></NavLink>
                                        </div> 
                                    </div>
                                    <Formik initialValues={{otp:""}} onSubmit={(value)=>verify(value)}>
                                        <Form>
                                        <div className="col-12 mb-3 px-0">
                                        <Field type="text" name="otp" class="form-control shadow-none bg-white border-muted form_text "id="firstname"placeholder="Enter OTP"/>
                                    </div>
                                    <div className="col-12 mb-3 px-0">
                                        <div className="text-end footer_bottam_text">
                                            Not received yet?<span className="text-theme1"/><NavLink to="" className="text-theme1">Resend OTP</NavLink>
                                        </div>
                                         
                                    </div>
                                    <div className="col-12 mb-3 px-0">
                                        <button className="btn bg-theme1 text-white w-100 reg_Button" type="submit" >Verify</button>
                                    </div>
                                        </Form>
                                    </Formik>
                                   
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </RegisterLoginWrapper>
       
    </>
  )
}

export default Verify