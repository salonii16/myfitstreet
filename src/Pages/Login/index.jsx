import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Sociallogin from "../../Common/Sociallogin/Google";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import login from "./api";
import RegisterLoginWrapper from "../../Common/RegisterLoginWrapper.js";
import { useEffect } from "react";
import Google from "../../Common/Sociallogin/Google";
import Facebook from "../../Common/Sociallogin/Facebook";
import Instagram from "../../Common/Sociallogin/Instagram";
import { InstagramLogin } from "react-instagram-login";
function Login() {
  const navigate = useNavigate();

  function sendotp(value) {
    console.log(value);

    var body = {
      mobile: `${value.mobile}`,
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
          navigate("/verify", { state: { details: value.mobile } });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const validationschema = yup.object().shape({
    mobile: yup.string().required("Enter your mobile number"),
  });
  const handler = async (value) => {
    const res = await login(value);
    console.log(res.status, "status");
    if (res.status == true) {
      localStorage.setItem("token", res.data.auth);
      navigate("/dashboard");
    } else {
      alert(res.data.status);
    }
  };

  return (
    <RegisterLoginWrapper page="login_Page" Text="login_side_Text ">
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <div className="forms_web">
          <div className="row">
            <div className="col-12">
              <div className="form_Top_Heading mb-3">Login</div>
              <div className="form_Top_Text mb-3">
                Get started by logging in or Create an account.
              </div>
            </div>
            <div className="col-12">
              <ul
                className="nav nav-pills mb-3 d-flex align-items-center justify-content-center list_tabs"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item w-50 tabs_list" role="presentation">
                  <button
                    className="nav-link w-100 active nav_tabs_button"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    OTP
                  </button>
                </li>
                <li className="nav-item w-50 tabs_list" role="presentation">
                  <button
                    className="nav-link w-100 nav_tabs_button"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Password
                  </button>
                </li>
              </ul>
              <div className="tab-content tab_content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row px-0">
                    <Formik
                      initialValues={{ mobile: "" }}
                      validationSchema={validationschema}
                      onSubmit={(value) => sendotp(value)}
                    >
                      <Form>
                        <div className="col-12 input-group  my-4">
                          <span
                            className="input-group-text bg-white shadow-none image_fleg_form"
                            id="basic-addon1"
                          >
                            <img src="assets/images/image-36.png" alt="" />
                          </span>
                          <Field
                            type="number"
                            name="mobile"
                            className="form-control shadow-none border-border-muted"
                            placeholder="Mobile number"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <p className="text-danger text-start">
                          <ErrorMessage name="mobile" />
                        </p>

                        <div className="col-12 my-2 ">
                          <button type="submit" className="btn  w-100 send_Otp">
                            Send OTP
                          </button>
                        </div>
                      </Form>
                    </Formik>
                    <div className="col-12 py-4">
                      <div className="border_2_Side text-center">
                        <span className="px-1">Or</span>
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <div className="d-flex align-items-center justify-content-center gap-4 icon_group">
                        <img
                          className="icon_group_list"
                          src="assets/images/image-37.png"
                          alt="facebook"
                        />
                        <Google />
                        <img
                          className="icon_group_list"
                          src="assets/images/image-39.png"
                          alt="instagram"
                        />
                        <img
                          className="icon_group_list"
                          src="assets/images/image-40.png"
                          alt="apple"
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-3">
                      <div className="text-center text_color_change">
                        Dont’t have an Account?{" "}
                        <span className="span_text">
                          <NavLink to="/register">Create one</NavLink>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-11 col-12 mb-3 mx-auto">
                      <div className="text-center footer_bottam_text">
                        By signing up for FitStreet, you agree to the{" "}
                        <span className="text-black">Terms of Service</span>.
                        View our{" "}
                        <span className="text-black">Privacy Policy</span>.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(value) => handler(value)}
                  >
                    <Form>
                      <div className="col-12 mb-3">
                        <Field
                          type="text"
                          name="email"
                          class="form-control  shadow-none bg-white border-muted "
                          id="emaillogin"
                          placeholder="Email address/Phone number"
                        />
                      </div>
                      <div className="col-12 mb-3 d-flex align-items-center position-relative">
                        <Field
                          type="password"
                          name="password"
                          className="form-control shadow-none bg-white border-muted"
                          id="loginpassword"
                          placeholder="Password"
                        />
                        <span className="position-absolute end-0 me-2">
                          <img
                            src="assets/images/image-42.png"
                            alt="eye_icon"
                          />
                        </span>
                      </div>
                      <div className="col-12 mb-3">
                        <NavLink to="/forgot" className="text-decoration-none">
                          <div className="forget_password text-end text-theme1">
                            Forgot Password?
                          </div>
                        </NavLink>
                      </div>
                      <div className="col-12 mb-3">
                        <button
                          className="btn bg-theme1 text-white w-100 send_Otp"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>
                    </Form>
                  </Formik>

                  <div className="col-12 py-4">
                    <div className="border_2_Side text-center">
                      <span className="px-1">Or</span>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="d-flex align-items-center justify-content-center gap-4 icon_group">
                      <img
                        className="icon_group_list"
                        src="assets/images/image-37.png"
                        alt="facebook"
                        style={{ cursor: "pointer" }}
                      />

                      <Google />
                      <Instagram/>

                      <img
                        className="icon_group_list"
                        src="assets/images/image-39.png"
                        alt="instagram"
                      />

                      <img
                        className="icon_group_list"
                        src="assets/images/image-40.png"
                        alt="apple"
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="text-center text_color_change">
                      Dont’t have an Account?{" "}
                      <span className="span_text">
                        <NavLink to="/register">Create one</NavLink>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-11 col-12 mb-3 mx-auto">
                    <div className="text-center footer_bottam_text">
                      By signing up for FitStreet, you agree to the{" "}
                      <span className="text-black">Terms of Service</span>. View
                      our <span class="text-black">Privacy Policy</span>.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RegisterLoginWrapper>
  );
}

export default Login;
