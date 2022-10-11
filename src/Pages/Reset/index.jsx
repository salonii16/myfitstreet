import { Formik,Form,Field } from 'formik'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import RegisterLoginWrapper from '../../Common/RegisterLoginWrapper.js'

function Reset() {
    const location = useLocation()
    const navigate = useNavigate()
    function reset(value){
     console.log("kk")
        var data = JSON.stringify({
          email: `${location.state.details}`,
          otp: `${value.otp}`,
          password: `${value.password}`
        });
        
        var config = {
          method: 'post',
          url: 'http://159.89.164.11:3000/api/reset-password',
          headers: { 
            'Authorization': 'Bearer null', 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(response.data)
          if(response.data.status == true){
            navigate('/login')
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        
    }
  return (
    <div>
      
                  <RegisterLoginWrapper page="reset_password" Text="verfiy_side_Text">
                    <div className="col-md-6 d-flex align-items-center justify-content-lg-end justify-content-xl-center justify-content-center ">
                        <div className="forms_web">
                            <Formik initialValues={{otp:"",password:'',confirmpassword:""}} onSubmit={(value)=>reset(value)}>
                                <Form>
                                <div className=" row align-items-center justify-content-center">
                                <div className="col-12">
                                    <div className="form_Top_Heading mb-3">Reset Password</div>
                                    <div className="form_Top_Text mb-3">Enter OTP  sent on email address and set new password.</div>
                                </div>
                                <div className="row reg_form">
                                    <div className="col-12 mb-3 px-0">
                                        <Field type="text" name="otp"className="form-control shadow-none bg-white border-muted form_text "id="firstname"placeholder="Enter OTP (4 or 6 digit)"/>
                                    </div>
                                    <div className="col-12 mb-3 d-flex align-items-center position-relative px-0">
                                        <Field type="password" name="password" className="form-control shadow-none bg-white border-muted form_text" id="password" placeholder="Enter password"/>
                                        <span className="position-absolute end-0 me-3"><img src="assets/images/image-42.png" alt="eye_icon"/></span>
                                    </div>
                                    <div className="col-12 mb-3 d-flex align-items-center position-relative px-0">
                                        <Field type="password" name="confirmpassword" className="form-control shadow-none bg-white border-muted form_text" id="loginpassword" placeholder="Enter confirm password"/>
                                        <span className="position-absolute end-0 me-3"><img src="assets/images/image-42.png" alt="eye_icon"/></span>
                                    </div>
                                    
                                    <div className="col-12 mb-3 px-0">
                                        <button className="btn bg-theme1 text-white w-100 reg_Button" type="submit">Send</button>
                                    </div>
                                    
                                </div>
                            </div>
                                </Form>
                            </Formik>
                           
                        </div>
                    </div>
                    </RegisterLoginWrapper>
     
    </div>
  )
}

export default Reset