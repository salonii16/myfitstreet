import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useState } from "react";
import RegisterLoginWrapper from "../../Common/RegisterLoginWrapper.js";
import * as Yup from "yup";

function Register() {
const location = useLocation()
console.log(location?.state?.details)
  const navigate = useNavigate();
  const [error, seterror] = useState("");
  const [defaultValues, setdefaultvalues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    gender: "",
    dob: "",
    code: "",
    password: "",
    confirmpassword: "",
  });
  const [type, setType] = useState("text");
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    email: Yup.string().required("Email is required"),
    mobile: Yup.string().required("Mobile is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.string().required("Dob is required"),
    password: Yup.string().required("Password is required"),
    confirmpassword: Yup.string().required("Confirm Password is required"),
  });
  function register(value) {
    console.log("first");

    var data = {
      firstName: `${value.firstname}`,
      lastName: `${value.lastname}`,
      mobile: `${value.mobile}`,
      email: `${value.email}`,
      password: `${value.password}`,
      gender: `${value.gender}`,
      dob: `${value.dob}`,
      referredBy: `${value.code}`,
      socialId:`${location?.state?.details}`
    };
    if (value.password !== value.confirmpassword) {
      seterror("Passwords don't match");
    } else {
      // make API call
      var config = {
        method: "post",
        url: "http://159.89.164.11:3000/api/register",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response.data.status == true) {
            localStorage.setItem("token", response.data.data.auth);
            navigate("/subscription");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  return (
    <RegisterLoginWrapper page="register" Text="register_side_Text ">
      <div className="col-md-6 d-flex align-items-center justify-content-lg-end justify-content-xl-center justify-content-center ">
        <div className="forms_web">
          <div className=" row align-items-center justify-content-center">
            <div className="col-12">
              <div className="form_Top_Heading mb-3">Register</div>
              <div className="form_Top_Text mb-3">
                {" "}
                Create an account and manage your activity
              </div>
            </div>

            <Formik
              initialValues={defaultValues}
              validationSchema={validationSchema}
              onSubmit={register}
            >
              <Form>
                <div className="row reg_form">
                  <div
                    className="row justify-content-between mb-3"
                  >
                    <div className="col-md-6 mt-3">
                      <div className="row">
                        <div className="col" style={{paddingRight:"0px"}}>
                          <Field
                            type="text"
                            name="firstname"
                            className="form-control shadow-none bg-white border-muted form_text "
                            id="firstname"
                            placeholder="First name"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col text-danger" style={{fontSize:10}}>
                          <ErrorMessage
                            name="firstname"
                            className="text-danger"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-3">
                      <div className="row">
                        <div className="col"  style={{paddingRight:"0px"}}>
                          <Field
                            type="text"
                            name="lastname"
                            className="form-control shadow-none bg-white border-muted form_text "
                            id="lastname"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col text-danger" style={{fontSize:10}}>
                          <ErrorMessage
                            name="lastname"
                            className="text-danger"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <Field
                      type="email"
                      name="email"
                      className="form-control shadow-none bg-white border-muted form_text"
                      id="email"
                      placeholder="Enter email"
                    />
                  </div>
                  <span
                    className="text-danger mb-3"
                    style={{ fontSize: "10px" }}
                  >
                    <ErrorMessage name="email" className="text-danger" />
                  </span>
                  <div className="col-12 input-group">
                    <span
                      className="input-group-text bg-white shadow-none image_fleg_form"
                      id="basic-addon1"
                    >
                      <img src="assets/images/image-36.png" alt="" />
                    </span>
                    <Field
                      type="number"
                      name="mobile"
                      className="form-control shadow-none border-border-muted form_text"
                      placeholder="Mobile number"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <span
                    className="text-danger mb-3"
                    style={{ fontSize: "10px" }}
                  >
                    <ErrorMessage name="mobile" className="text-danger" />
                  </span>

                  <div className="col-12 select_2">
                    <Field
                      className="form-select shadow-none select_list"
                      component="select"
                      name="gender"
                      aria-label="Default select example"
                    >
                      <option value="">Select the gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Field>
                  </div>
                  <span
                    className="text-danger mb-3"
                    style={{ fontSize: "10px" }}
                  >
                    <ErrorMessage name="gender" className="text-danger" />
                  </span>

                  {/* <div className="col-sm-6 col-md-6 col-12">
                    <Field
                      name="dob"
                      className="form-control  shadow-none bg-white border-muted form_text"
                      type={type}
                      onFocus={() => setType("date")}
                      id="date"
                      placeholder="DOB(dd-mm-yyyy)"
                    />
                  </div>
                  <span
                    className="text-danger mb-3"
                    style={{ fontSize: "14px" }}
                  >
                    <ErrorMessage name="dob" className="text-danger" />
                  </span>

                  <div className="col-sm-6 col-md-6 col-12 mb-3 mb-3 ">
                    <Field
                      type="text"
                      name="code"
                      className="form-control shadow-none bg-white border-muted form_text"
                      id="referralcode"
                      placeholder="Referral code"
                    />

                  </div> */}
                   <div
                    className="row justify-content-between mb-3"
                    style={{ width: "100%" }}
                  >
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col" style={{paddingRight:"0px"}}>
                          <Field
                             name="dob"
                             className="form-control  shadow-none bg-white border-muted form_text"
                             type={type}
                             onFocus={() => setType("date")}
                             id="date"
                             placeholder="DOB(dd-mm-yyyy)"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col text-danger" style={{fontSize:10}}>
                          <ErrorMessage
                            name="dob"
                            className="text-danger"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col"  style={{paddingRight:"0px"}}>
                        <Field
                      type="text"
                      name="code"
                      className="form-control shadow-none bg-white border-muted form_text"
                      id="referralcode"
                      placeholder="Referral code"
                    />

                        </div>
                      </div>
                     
                    </div>
                  </div>

                  <div className="col-12 d-flex align-items-center position-relative">
                    <Field
                      type="password"
                      name="password"
                      className="form-control shadow-none bg-white border-muted form_text"
                      id="loginpassword"
                      placeholder="Enter Password"
                    />
                    <span className="position-absolute end-0 me-4">
                      <img src="assets/images/image-42.png" alt="eye_icon" />
                    </span>
                  </div>
                  <span
                    className="text-danger mb-3"
                    style={{ fontSize: "10px" }}
                  >
                    <ErrorMessage name="password" className="text-danger" />
                  </span>

                  <div className="col-12 d-flex align-items-center position-relative">
                    <Field
                      type="password"
                      name="confirmpassword"
                      className="form-control shadow-none bg-white border-muted form_text"
                      id="confirmpassword"
                      placeholder="Enter Confirm Password"
                    />
                    <span className="position-absolute end-0 me-4">
                      <img src="assets/images/image-42.png" alt="eye_icon" />
                    </span>
                  </div>
                  <span
                    className="text-danger mb-3"
                    style={{ fontSize: "10px" }}
                  >
                    <ErrorMessage name="confirmpassword" className="text-danger" />
                  </span>
                 
                  {/* <p className="text-danger text-start">
                        <ErrorMessage name="confirmpassword" />
                      </p> */}
                  <p className="text-danger text-start">{error}</p>
                  <div className="col-lg-11 col-12 mb-3 mx-auto">
                    <div className="text-center footer_bottam_text">
                      By creating FitStreet account, you agree to the
                      <span className="text-black">Terms of Service</span>. View
                      our <span className="text-black">Privacy Policy</span>.
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <button
                      className="btn bg-theme1 text-white w-100 reg_Button"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>

                  <div className="col-12 mb-3 text-center">
                    <div className="reg_bt_txt">
                      Already have an Account?{" "}
                      <span className="text_reg_col">
                        <NavLink to="/login">Login now</NavLink>
                      </span>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </RegisterLoginWrapper>
  );
}

export default Register;
