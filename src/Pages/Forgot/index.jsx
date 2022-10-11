import { Formik,Field,Form } from 'formik';
import React from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import RegisterLoginWrapper from '../../Common/RegisterLoginWrapper.js';
function Forgot() {
    const navigate =  useNavigate()
    function generateotp(value){
        var body = {
            email: `${value.email}`,
          };
      
          var config = {
            method: "post",
            url: "http://159.89.164.11:3000/api/generate-otp",
            headers: {
              "Content-Type": "application/json",
            },
            data: body,
          };
      
          axios(config)
            .then(function (response) {
              console.log(response.data.status);
              if (response.data.status == true) {
                navigate("/reset", { state: { details: value.email } });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }

    
  
  return (
    <div>
                     <RegisterLoginWrapper page="forgot_password" Text="verfiy_side_Text">
                    <div className="col-md-6 d-flex align-items-center justify-content-lg-end justify-content-xl-center justify-content-center ">
                        <div className="forms_web">
                            <div className=" row align-items-center justify-content-center">
                                <div className="col-12">
                                    <div className="form_Top_Heading mb-3">Forgot Password</div>
                                    <div className="form_Top_Text mb-3">Enter registered email address to get an OTP to reset password</div>
                                </div>
                                <Formik initialValues={{email:""}} onSubmit={(value)=>generateotp(value)}>
                                    <Form>
                                    <div className="row reg_form">
                                    <div className="col-12 my-3 px-0">
                                        <Field type="text" name="email" className="form-control shadow-none bg-white border-muted form_text "id="firstname"placeholder="Enter email"/>
                                    </div>
                                    <div className="col-12 my-3 px-0">
                                        <button to="/reset" className="btn bg-theme1 text-white w-100 reg_Button" type="submit">Send</button>
                                    </div>
                                    
                                </div>
                                    </Form>
                                </Formik>
                               
                            </div>
                        </div>
                    </div>
                    </RegisterLoginWrapper>
         
       
    </div>
  )
}

export default Forgot