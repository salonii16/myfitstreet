"use strict";(self.webpackChunkfitstreet=self.webpackChunkfitstreet||[]).push([[452,632],{7519:function(e,s,a){a(2791);var t=a(184);s.Z=function(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("section",{className:"container-fluid ".concat(e.page),children:(0,t.jsx)("div",{className:"container h-100",children:(0,t.jsxs)("div",{className:"row h-100",children:[(0,t.jsx)("div",{className:"col-md-6 d-flex align-items-lg-end  align-items-md-center align-items-sm-center\r justify-content-md-center justify-content-center justify-content-lg-end ",children:(0,t.jsx)("div",{className:"".concat(e.Text),children:"Believe you can and you will."})}),e.children?e.children:null]})})})})}},5452:function(e,s,a){a.r(s),a.d(s,{default:function(){return v}});var t=a(4165),n=a(5861),l=a(2791),i=a(1087),r=a(4569),c=a.n(r),o=a(929),d=a(2827),m=a(7689),x=(a(6632),a(184));var g=function(){var e=(0,m.s0)(),s="950796484738-7tftft6562gonohkvpo66n5ekkjc80nh.apps.googleusercontent.com";(0,l.useEffect)((function(){d.MN.load("client:auth2",(function(){d.MN.client.init({clientId:s,scope:""})}))}));var a=function(s){console.log(s,"resgoogle");var a=s.googleId,t={method:"post",url:"http://159.89.164.11:3000/api/social-login",headers:{"Content-Type":"application/json"},data:{email:"".concat(s.profileObj.email),socialId:"".concat(s.googleId)}};c()(t).then((function(s){console.log(s.data.message),"User can register"==s.data.message?e("/register",{state:{details:a}}):(localStorage.setItem("token",s.data.data.auth),e("/dashboard"))})).catch((function(e){console.log(e)}))};return(0,x.jsx)("div",{children:(0,x.jsx)(o.GoogleLogin,{clientId:s,onSuccess:a,onFailure:a,render:function(e){return(0,x.jsx)("img",{className:"icon_group_list",src:"assets/images/image-38.png",alt:"google",style:{cursor:"pointer"},onClick:e.onClick})},buttonText:""})})},h=a(5705),p=a(7103);function u(){return(u=(0,n.Z)((0,t.Z)().mark((function e(s){var a,n,l,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(s,"l"),a={email:"".concat(s.email),password:"".concat(s.password)},n={method:"post",url:"http://159.89.164.11:3000/api/password-login",headers:{"Content-Type":"application/json"},data:a},e.prev=3,e.next=6,c()(n);case 6:return l=e.sent,e.next=9,l.data;case 9:return i=e.sent,e.abrupt("return",i);case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))).apply(this,arguments)}var j=function(e){return u.apply(this,arguments)},b=a(7519);a(6132);var f=a(9221);var N=function(){var e=function(e){console.log(e)};return(0,x.jsx)("div",{children:(0,x.jsx)(f.InstagramLogin,{clientId:"2561162357358027",buttonText:"Login",onSuccess:e,onFailure:e})})};var v=function(){var e=(0,m.s0)(),s=p.Ry().shape({mobile:p.Z_().required("Enter your mobile number")}),a=function(){var s=(0,n.Z)((0,t.Z)().mark((function s(a){var n;return(0,t.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,j(a);case 2:n=s.sent,console.log(n.status,"status"),1==n.status?(localStorage.setItem("token",n.data.auth),e("/dashboard")):alert(n.data.status);case 5:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}();return(0,x.jsx)(b.Z,{page:"login_Page",Text:"login_side_Text ",children:(0,x.jsx)("div",{class:"col-md-6 d-flex align-items-center justify-content-center",children:(0,x.jsx)("div",{className:"forms_web",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-12",children:[(0,x.jsx)("div",{className:"form_Top_Heading mb-3",children:"Login"}),(0,x.jsx)("div",{className:"form_Top_Text mb-3",children:"Get started by logging in or Create an account."})]}),(0,x.jsxs)("div",{className:"col-12",children:[(0,x.jsxs)("ul",{className:"nav nav-pills mb-3 d-flex align-items-center justify-content-center list_tabs",id:"pills-tab",role:"tablist",children:[(0,x.jsx)("li",{className:"nav-item w-50 tabs_list",role:"presentation",children:(0,x.jsx)("button",{className:"nav-link w-100 active nav_tabs_button",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"OTP"})}),(0,x.jsx)("li",{className:"nav-item w-50 tabs_list",role:"presentation",children:(0,x.jsx)("button",{className:"nav-link w-100 nav_tabs_button",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false",children:"Password"})})]}),(0,x.jsxs)("div",{className:"tab-content tab_content",id:"pills-tabContent",children:[(0,x.jsx)("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab",children:(0,x.jsxs)("div",{className:"row px-0",children:[(0,x.jsx)(h.J9,{initialValues:{mobile:""},validationSchema:s,onSubmit:function(s){return function(s){console.log(s);var a={method:"post",url:"http://159.89.164.11:3000/api/generate-otp",headers:{"Content-Type":"application/json"},data:{mobile:"".concat(s.mobile)}};c()(a).then((function(a){console.log(a.data.status),1==a.data.status&&e("/verify",{state:{details:s.mobile}})})).catch((function(e){console.log(e)}))}(s)},children:(0,x.jsxs)(h.l0,{children:[(0,x.jsxs)("div",{className:"col-12 input-group  my-4",children:[(0,x.jsx)("span",{className:"input-group-text bg-white shadow-none image_fleg_form",id:"basic-addon1",children:(0,x.jsx)("img",{src:"assets/images/image-36.png",alt:""})}),(0,x.jsx)(h.gN,{type:"number",name:"mobile",className:"form-control shadow-none border-border-muted",placeholder:"Mobile number","aria-label":"Username","aria-describedby":"basic-addon1"})]}),(0,x.jsx)("p",{className:"text-danger text-start",children:(0,x.jsx)(h.Bc,{name:"mobile"})}),(0,x.jsx)("div",{className:"col-12 my-2 ",children:(0,x.jsx)("button",{type:"submit",className:"btn  w-100 send_Otp",children:"Send OTP"})})]})}),(0,x.jsx)("div",{className:"col-12 py-4",children:(0,x.jsx)("div",{className:"border_2_Side text-center",children:(0,x.jsx)("span",{className:"px-1",children:"Or"})})}),(0,x.jsx)("div",{className:"col-12 mb-3",children:(0,x.jsxs)("div",{className:"d-flex align-items-center justify-content-center gap-4 icon_group",children:[(0,x.jsx)("img",{className:"icon_group_list",src:"assets/images/image-37.png",alt:"facebook"}),(0,x.jsx)(g,{}),(0,x.jsx)("img",{className:"icon_group_list",src:"assets/images/image-39.png",alt:"instagram"}),(0,x.jsx)("img",{className:"icon_group_list",src:"assets/images/image-40.png",alt:"apple"})]})}),(0,x.jsx)("div",{className:"col-12 mb-3",children:(0,x.jsxs)("div",{className:"text-center text_color_change",children:["Dont\u2019t have an Account?"," ",(0,x.jsx)("span",{className:"span_text",children:(0,x.jsx)(i.OL,{to:"/register",children:"Create one"})})]})}),(0,x.jsx)("div",{className:"col-lg-11 col-12 mb-3 mx-auto",children:(0,x.jsxs)("div",{className:"text-center footer_bottam_text",children:["By signing up for FitStreet, you agree to the"," ",(0,x.jsx)("span",{className:"text-black",children:"Terms of Service"}),". View our"," ",(0,x.jsx)("span",{className:"text-black",children:"Privacy Policy"}),"."]})})]})}),(0,x.jsxs)("div",{className:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab",children:[(0,x.jsx)(h.J9,{initialValues:{email:"",password:""},onSubmit:function(e){return a(e)},children:(0,x.jsxs)(h.l0,{children:[(0,x.jsx)("div",{className:"col-12 mb-3",children:(0,x.jsx)(h.gN,{type:"text",name:"email",class:"form-control  shadow-none bg-white border-muted ",id:"emaillogin",placeholder:"Email address/Phone number"})}),(0,x.jsxs)("div",{className:"col-12 mb-3 d-flex align-items-center position-relative",children:[(0,x.jsx)(h.gN,{type:"password",name:"password",className:"form-control shadow-none bg-white border-muted",id:"loginpassword",placeholder:"Password"}),(0,x.jsx)("span",{className:"position-absolute end-0 me-2",children:(0,x.jsx)("img",{src:"assets/images/image-42.png",alt:"eye_icon"})})]}),(0,x.jsx)("div",{className:"col-12 mb-3",children:(0,x.jsx)(i.OL,{to:"/forgot",className:"text-decoration-none",children:(0,x.jsx)("div",{className:"forget_password text-end text-theme1",children:"Forgot Password?"})})}),(0,x.jsx)("div",{className:"col-12 mb-3",children:(0,x.jsx)("button",{className:"btn bg-theme1 text-white w-100 send_Otp",type:"submit",children:"Log In"})})]})}),(0,x.jsx)("div",{className:"col-12 py-4",children:(0,x.jsx)("div",{className:"border_2_Side text-center",children:(0,x.jsx)("span",{className:"px-1",children:"Or"})})}),(0,x.jsx)("div",{className:"col-12 mb-3",children:(0,x.jsxs)("div",{className:"d-flex align-items-center justify-content-center gap-4 icon_group",children:[(0,x.jsx)("img",{className:"icon_group_list",src:"assets/images/image-37.png",alt:"facebook",style:{cursor:"pointer"}}),(0,x.jsx)(g,{}),(0,x.jsx)(N,{}),(0,x.jsx)("img",{className:"icon_group_list",src:"assets/images/image-39.png",alt:"instagram"}),(0,x.jsx)("img",{className:"icon_group_list",src:"assets/images/image-40.png",alt:"apple"})]})}),(0,x.jsx)("div",{className:"col-12 mb-3",children:(0,x.jsxs)("div",{className:"text-center text_color_change",children:["Dont\u2019t have an Account?"," ",(0,x.jsx)("span",{className:"span_text",children:(0,x.jsx)(i.OL,{to:"/register",children:"Create one"})})]})}),(0,x.jsx)("div",{className:"col-lg-11 col-12 mb-3 mx-auto",children:(0,x.jsxs)("div",{className:"text-center footer_bottam_text",children:["By signing up for FitStreet, you agree to the"," ",(0,x.jsx)("span",{className:"text-black",children:"Terms of Service"}),". View our ",(0,x.jsx)("span",{class:"text-black",children:"Privacy Policy"}),"."]})})]})]})]})]})})})})}},6632:function(e,s,a){a.r(s);var t=a(885),n=a(2791),l=a(7689),i=a(1087),r=a(5705),c=a(4569),o=a.n(c),d=a(7519),m=a(7103),x=a(184);s.default=function(){var e,s=(0,l.TH)();console.log(null===s||void 0===s||null===(e=s.state)||void 0===e?void 0:e.details);var a=(0,l.s0)(),c=(0,n.useState)(""),g=(0,t.Z)(c,2),h=g[0],p=g[1],u=(0,n.useState)({firstname:"",lastname:"",email:"",mobile:"",gender:"",dob:"",code:"",password:"",confirmpassword:""}),j=(0,t.Z)(u,2),b=j[0],f=(j[1],(0,n.useState)("text")),N=(0,t.Z)(f,2),v=N[0],w=N[1],_=m.Ry().shape({firstname:m.Z_().required("Firstname is required"),lastname:m.Z_().required("Lastname is required"),email:m.Z_().required("Email is required"),mobile:m.Z_().required("Mobile is required"),gender:m.Z_().required("Gender is required"),dob:m.Z_().required("Dob is required"),password:m.Z_().required("Password is required"),confirmpassword:m.Z_().required("Confirm Password is required")});return(0,x.jsx)(d.Z,{page:"register",Text:"register_side_Text ",children:(0,x.jsx)("div",{className:"col-md-6 d-flex align-items-center justify-content-lg-end justify-content-xl-center justify-content-center ",children:(0,x.jsx)("div",{className:"forms_web",children:(0,x.jsxs)("div",{className:" row align-items-center justify-content-center",children:[(0,x.jsxs)("div",{className:"col-12",children:[(0,x.jsx)("div",{className:"form_Top_Heading mb-3",children:"Register"}),(0,x.jsxs)("div",{className:"form_Top_Text mb-3",children:[" ","Create an account and manage your activity"]})]}),(0,x.jsx)(r.J9,{initialValues:b,validationSchema:_,onSubmit:function(e){var t;console.log("first");var n={firstName:"".concat(e.firstname),lastName:"".concat(e.lastname),mobile:"".concat(e.mobile),email:"".concat(e.email),password:"".concat(e.password),gender:"".concat(e.gender),dob:"".concat(e.dob),referredBy:"".concat(e.code),socialId:"".concat(null===s||void 0===s||null===(t=s.state)||void 0===t?void 0:t.details)};if(e.password!==e.confirmpassword)p("Passwords don't match");else{var l={method:"post",url:"http://159.89.164.11:3000/api/register",headers:{"Content-Type":"application/json"},data:n};o()(l).then((function(e){1==e.data.status&&(localStorage.setItem("token",e.data.data.auth),a("/subscription"))})).catch((function(e){console.log(e)}))}},children:(0,x.jsx)(r.l0,{children:(0,x.jsxs)("div",{className:"row reg_form",children:[(0,x.jsxs)("div",{className:"row justify-content-between mb-3",children:[(0,x.jsxs)("div",{className:"col-md-6 mt-3",children:[(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col",style:{paddingRight:"0px"},children:(0,x.jsx)(r.gN,{type:"text",name:"firstname",className:"form-control shadow-none bg-white border-muted form_text ",id:"firstname",placeholder:"First name"})})}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col text-danger",style:{fontSize:10},children:(0,x.jsx)(r.Bc,{name:"firstname",className:"text-danger"})})})]}),(0,x.jsxs)("div",{className:"col-md-6 mt-3",children:[(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col",style:{paddingRight:"0px"},children:(0,x.jsx)(r.gN,{type:"text",name:"lastname",className:"form-control shadow-none bg-white border-muted form_text ",id:"lastname",placeholder:"Last name"})})}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col text-danger",style:{fontSize:10},children:(0,x.jsx)(r.Bc,{name:"lastname",className:"text-danger"})})})]})]}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)(r.gN,{type:"email",name:"email",className:"form-control shadow-none bg-white border-muted form_text",id:"email",placeholder:"Enter email"})}),(0,x.jsx)("span",{className:"text-danger mb-3",style:{fontSize:"10px"},children:(0,x.jsx)(r.Bc,{name:"email",className:"text-danger"})}),(0,x.jsxs)("div",{className:"col-12 input-group",children:[(0,x.jsx)("span",{className:"input-group-text bg-white shadow-none image_fleg_form",id:"basic-addon1",children:(0,x.jsx)("img",{src:"assets/images/image-36.png",alt:""})}),(0,x.jsx)(r.gN,{type:"number",name:"mobile",className:"form-control shadow-none border-border-muted form_text",placeholder:"Mobile number","aria-label":"Username","aria-describedby":"basic-addon1"})]}),(0,x.jsx)("span",{className:"text-danger mb-3",style:{fontSize:"10px"},children:(0,x.jsx)(r.Bc,{name:"mobile",className:"text-danger"})}),(0,x.jsx)("div",{className:"col-12 select_2",children:(0,x.jsxs)(r.gN,{className:"form-select shadow-none select_list",component:"select",name:"gender","aria-label":"Default select example",children:[(0,x.jsx)("option",{value:"",children:"Select the gender"}),(0,x.jsx)("option",{value:"male",children:"Male"}),(0,x.jsx)("option",{value:"female",children:"Female"})]})}),(0,x.jsx)("span",{className:"text-danger mb-3",style:{fontSize:"10px"},children:(0,x.jsx)(r.Bc,{name:"gender",className:"text-danger"})}),(0,x.jsxs)("div",{className:"row justify-content-between mb-3",style:{width:"100%"},children:[(0,x.jsxs)("div",{className:"col-md-6",children:[(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col",style:{paddingRight:"0px"},children:(0,x.jsx)(r.gN,{name:"dob",className:"form-control  shadow-none bg-white border-muted form_text",type:v,onFocus:function(){return w("date")},id:"date",placeholder:"DOB(dd-mm-yyyy)"})})}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col text-danger",style:{fontSize:10},children:(0,x.jsx)(r.Bc,{name:"dob",className:"text-danger"})})})]}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col",style:{paddingRight:"0px"},children:(0,x.jsx)(r.gN,{type:"text",name:"code",className:"form-control shadow-none bg-white border-muted form_text",id:"referralcode",placeholder:"Referral code"})})})})]}),(0,x.jsxs)("div",{className:"col-12 d-flex align-items-center position-relative",children:[(0,x.jsx)(r.gN,{type:"password",name:"password",className:"form-control shadow-none bg-white border-muted form_text",id:"loginpassword",placeholder:"Enter Password"}),(0,x.jsx)("span",{className:"position-absolute end-0 me-4",children:(0,x.jsx)("img",{src:"assets/images/image-42.png",alt:"eye_icon"})})]}),(0,x.jsx)("span",{className:"text-danger mb-3",style:{fontSize:"10px"},children:(0,x.jsx)(r.Bc,{name:"password",className:"text-danger"})}),(0,x.jsxs)("div",{className:"col-12 d-flex align-items-center position-relative",children:[(0,x.jsx)(r.gN,{type:"password",name:"confirmpassword",className:"form-control shadow-none bg-white border-muted form_text",id:"confirmpassword",placeholder:"Enter Confirm Password"}),(0,x.jsx)("span",{className:"position-absolute end-0 me-4",children:(0,x.jsx)("img",{src:"assets/images/image-42.png",alt:"eye_icon"})})]}),(0,x.jsx)("span",{className:"text-danger mb-3",style:{fontSize:"10px"},children:(0,x.jsx)(r.Bc,{name:"confirmpassword",className:"text-danger"})}),(0,x.jsx)("p",{className:"text-danger text-start",children:h}),(0,x.jsx)("div",{className:"col-lg-11 col-12 mb-3 mx-auto",children:(0,x.jsxs)("div",{className:"text-center footer_bottam_text",children:["By creating FitStreet account, you agree to the",(0,x.jsx)("span",{className:"text-black",children:"Terms of Service"}),". View our ",(0,x.jsx)("span",{className:"text-black",children:"Privacy Policy"}),"."]})}),(0,x.jsx)("div",{className:"col-12 mb-3",children:(0,x.jsx)("button",{className:"btn bg-theme1 text-white w-100 reg_Button",type:"submit",children:"Register"})}),(0,x.jsx)("div",{className:"col-12 mb-3 text-center",children:(0,x.jsxs)("div",{className:"reg_bt_txt",children:["Already have an Account?"," ",(0,x.jsx)("span",{className:"text_reg_col",children:(0,x.jsx)(i.OL,{to:"/login",children:"Login now"})})]})})]})})})]})})})})}}}]);
//# sourceMappingURL=452.fc87d8f7.chunk.js.map