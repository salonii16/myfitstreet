import React from "react";
import axios from 'axios'
import { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";

function Subscription() {
    const[data,setdata]=useState([])
  function subscription() {
   
    var config = {
      method: "get",
      url: "http://159.89.164.11:3000/api/subscription-plans",
      headers: {
        Authorization:
          localStorage.getItem("token")
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        const subscription=[]
        response.data.data.map((item)=>{
            subscription.push({
                id:item._id,
                name:item.name,
                price:item.price,
                monthDuration:item.monthDuration,
                eventFree:item.eventsFree,
                description:item.description
            })
        })
        setdata(subscription)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(()=>{
    subscription()
  },[])
 
  return (
    <section>
      <div className="container-fluid subscription-page">
        <div className="container pt-5 mt-5">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center pageHeading">
                Choose your subscription plan
              </h1>
              <div className="text-center headingDes">
                Choose the right plan with best pricing and start tracking your
                data
              </div>
            </div>
          </div>
       {data.map((item)=>(

          <div className="row g-3 mt-5">
            <div className="col-12 col-md-4">
              <div className="card border-0 h-100">
                <div className="card-header bg-transparent border-0">
                  <div className="cardHeading">{item.name}</div>
                  <div className="planPrice">{item.price}</div>
                  <div className="monthFree">
                    {item.eventFree} events will be free for {item.monthDuration} months
                  </div>
                </div>
                <div className="card-body">
                  <p className="description">
                   {item.description}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <NavLink to="javascript:;" role="button" className="btn">
                    Get Started
                  </NavLink>
                </div>
              </div>
            </div>
            {/* <div className="col-12 col-md-4">
              <div className="card border-0 h-100 active">
                <div className="card-header bg-transparent border-0">
                  <div className="cardHeading">Gold Fitness Plan</div>
                  <div className="planPrice">Rs. 799</div>
                  <div className="monthFree">
                    5 events will be free for 6 months
                  </div>
                </div>
                <div className="card-body">
                  <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. Lorem Ipsum is simply dummy text of the
                    printing and typesetting
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <NavLink to="javascript:;" role="button" className="btn">
                    Get Started
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 h-100">
                <div className="card-header bg-transparent border-0">
                  <div className="cardHeading">Platinum Fitness Plan</div>
                  <div className="planPrice">Rs. 499</div>
                  <div className="monthFree">
                    8 events will be free for 12 months
                  </div>
                </div>
                <div className="card-body">
                  <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <NavLink to="javascript:;" role="button" className="btn">
                    Get Started
                  </NavLink>
                </div>
              </div>
            </div> */}
            <div className="col-12 py-5 text-center">
              <NavLink
                to="javascript:;"
                type="button"
                className="btn p-1 border-0 text-center bottomThanks"
              >
                No Thanks
              </NavLink>
            </div>
          </div>))}
        </div>
      </div>
    </section>
  );
}

export default Subscription;
