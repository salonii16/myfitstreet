import React,{useEffect} from 'react'
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { gapi } from 'gapi-script'
import { useNavigate } from 'react-router-dom';
import Register from '../../Pages/Register';

function Google() {
  const navigate= useNavigate()
    let clientId = "950796484738-7tftft6562gonohkvpo66n5ekkjc80nh.apps.googleusercontent.com"
    useEffect(() => {
        const initClient = () => {
              gapi.client.init({
              clientId: clientId,
              scope: ''
            });
         };
         gapi.load('client:auth2', initClient);
     });
    
    const responseGoogle=(response)=>{
      console.log(response,"resgoogle")
      let socialId = response.googleId
        var data = ({
         
          email: `${response.profileObj.email}`,
    
         socialId: `${response.googleId}`
        });
        
        var config = {
          method: 'post',
          url: 'http://159.89.164.11:3000/api/social-login',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log((response.data.message));
          if(response.data.message == "User can register")
          {
                navigate("/register", {state: { details: socialId } })
          }
        else
         {
          localStorage.setItem("token",response.data.data.auth)
            navigate("/dashboard")
         }
        })
        .catch(function (error) {
          console.log(error);
        });
        
    }
  return (
    <div>
     
    
        <GoogleLogin
          clientId={clientId}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          render={
            renderProps =>   <img
            className="icon_group_list"
            src="assets/images/image-38.png"
            alt="google"
            style={{cursor:'pointer'}}
            onClick={renderProps.onClick}
          />
          }
          buttonText=''
          
        />
    </div>
  )
}

export default Google
