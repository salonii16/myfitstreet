import React from 'react'
import InstagramLogin from 'react-instagram-login';
function Instagram() {

     
const responseInstagram = (response) => {
    console.log(response);
  }
   
  return (
    <div>
         <InstagramLogin
    clientId="816051839441704"
    buttonText="Login"
    onSuccess={responseInstagram}
    onFailure={responseInstagram}
  />
        
    </div>
  )
}

export default Instagram
