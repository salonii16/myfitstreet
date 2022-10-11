import axios from 'axios'

async function login(value){
    console.log(value,"l")
 var data={
    email:`${value.email}`,
    password:`${value.password}`
 }
 
    var config = {
      method: 'post',
      url:`http://159.89.164.11:3000/api/password-login`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    }

    try {
      const response = await axios(config);
      const data = await response.data
      return data
  } catch (e) {
      console.error(e);
  }
    
    // axios(config)
    // .then(function (response) {
    //   // console.log(response.data.status,"status")
    //  return response.data
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
}
export default login