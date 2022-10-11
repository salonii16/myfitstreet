import React from "react";
import axios from "axios";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
function Facebook() {
  const responseFacebook = (response) => {
    console.log(response, "resfacebook");
    var data = {
      email: `${response.email}`,
      socialId: `${response.id}`,
    };

    var config = {
      method: "post",
      url: "http://159.89.164.11:3000/api/social-login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const componentClicked = () => {
    console.log("clicked");
  };
  return (
    <>
      <FacebookLogin
        appId="623562315935677"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
        render={renderProps => (
            <img
            onClick={renderProps.onClick}
            className="icon_group_list"
            src="assets/images/image-37.png"
            alt="facebook"
            style={{cursor:'pointer'}}
            />
          )}
      />
    </>
  );
}

export default Facebook;
