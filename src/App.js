import logo from "./logo.svg";
// import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import useState from "react";
import React, { Suspense, lazy } from "react";
import Header from "./Common/Header/Header";
import Footer from "./Common/Footer/Footer";
import useNavigate from "react-router-dom";
import { useLocation } from "react-router-dom";
import FooterHome from "./Common/Footer/FooterHome";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Common/Sidebar";
import PrivateRoutes from "./Common/PrivateRoutes";

const Events = lazy(() => import("./Pages/Events"));
const Clubs = lazy(() => import("./Pages/Clubs"));
const HealthArticle = lazy(() => import("./Pages/HealthArticle"));

const About = lazy(() => import("./Pages/About"));
const Final1 = lazy(() => import("./Pages/Final1"));
const Final2 = lazy(() => import("./Pages/Final2"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const Verify = lazy(() => import("./Pages/Verify"));
const Forgot = lazy(() => import("./Pages/Forgot"));
const Reset = lazy(() => import("./Pages/Reset"));
const Privacy = lazy(() => import("./Pages/Privacy"));
const Features = lazy(() => import("./Pages/Features"));
const Contact = lazy(() => import("./Pages/Contact"));
const Career = lazy(() => import("./Pages/Career"));
const Careerdetails = lazy(() => import("./Pages/Careerdetails"));
const Subscription = lazy(() => import("./Pages/Subscription"));
const Termsandcondition = lazy(() => import("./Pages/Termsandcondition"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const YourActivity = lazy(() => import("./Pages/yourActivity"));
const Following = lazy(() => import("./Pages/Following"));
const Profile = lazy(()=>import("./Pages/Dashboard/Profile"))
function App(props) {
  // console.log(window.location.pathname,"path")

  return (
    <div>
      <BrowserRouter>
        <Inner />
      </BrowserRouter>
    </div>
  );
}

function Inner() {
  const location = useLocation();

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
     {location.pathname == "/following" ||
      location.pathname == "/dashboard" ||
      location.pathname == "/activity" ||
      location.pathname == "/events" ||
      location.pathname == "/clubs" ||
      location.pathname == "/healtharticle"||
      location.pathname == "/profile" ?
        " "
       : <Header />
      } 
       
      <Routes>
        <Route  element={<PrivateRoutes />}>
          <Route exact path="/following" element={<Following />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/activity" element={<YourActivity />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/clubs" element={<Clubs />} />
          <Route exact path="/healtharticle" element={<HealthArticle />} />
          <Route exact path="/profile" element={<Profile />} />
        </Route>
       
        <Route exact path="/" element={<Final1 />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/verify" element={<Verify />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/final2" element={<Final2 />} />
        <Route exact path="/feature" element={<Features />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/careerdetails" element={<Careerdetails />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/subscription" element={<Subscription />} />
        <Route exact path="/terms" element={<Termsandcondition />} />
      </Routes>
      {location.pathname == "/following" ||
      location.pathname == "/dashboard" ||
      location.pathname == "/activity" ||
      location.pathname == "/events" ||
      location.pathname == "/clubs" ||
      location.pathname == "/healtharticle" ||
      location.pathname == "/profile"? (
        ""
      ) : location.pathname == "/career" ? (
        ""
      ) : location.pathname == "/" || location.pathname == "/final2" ? (
        <FooterHome />
      ) : (
        <Footer />
      )}
    </Suspense>
  );
}

export default App;
