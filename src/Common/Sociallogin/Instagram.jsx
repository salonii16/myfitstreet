import React from 'react'
import InstagramLogin from 'react-instagram-login';
function Instagram() {

     
const responseInstagram = (response) => {
    console.log(response);
  }
   
  return (
    <div>
         <InstagramLogin
    clientId="2561162357358027"
    buttonText="Login"
    onSuccess={responseInstagram}
    onFailure={responseInstagram}
  />
        
    </div>
  )
}

export default Instagram
