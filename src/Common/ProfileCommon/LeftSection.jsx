import React from 'react'

function LeftSection() {
  return (
   
        <div
                                className="col-12 col-md-5 col-lg-4 flex-fill mt-3 mt-lg-4 ps-md-3 pe-md-0 ps-lg-4 h-100 leftSection">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="bg-white pb-2 userProfileSection">
                                            <div className="row g-0 p-4 mb-2 bottomBorder">
                                                <div className="col-4 text-center borderRight">
                                                    <div className="fw-bold countingNo">100</div>
                                                    <div className="sectionText">Posts</div>
                                                </div>
                                                <div className="col-4 text-center borderRight">
                                                    <button type="button" className="btn border-0" data-bs-toggle="modal"
                                                        data-bs-target="#FollowersModal">
                                                        <div className="fw-bold countingNo">90</div>
                                                        <div className="sectionText">Followers</div>
                                                    </button>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <button type="button" className="btn border-0" data-bs-toggle="modal"
                                                        data-bs-target="#FollowersModal">
                                                        <div className="fw-bold countingNo">35</div>
                                                        <div className="sectionText">Following</div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="nav flex-column nav-pills NavPillBtn" id="v-pills-tab"
                                                role="tablist" aria-orientation="vertical">
                                                <button className="nav-link border-0 rounded-0 px-5"
                                                    id="fitnessStatistics-tab" data-bs-toggle="pill"
                                                    data-bs-target="#fitnessStatistics" type="button" role="tab"
                                                    aria-controls="fitnessStatistics" aria-selected="true"
                                                    disabled>Fitness
                                                    Statistics</button>
                                                <button className="nav-link border-0 rounded-0 px-5 active"
                                                    id="myLeaderboard-tab" data-bs-toggle="pill"
                                                    data-bs-target="#myLeaderboard" type="button" role="tab"
                                                    aria-controls="myLeaderboard" aria-selected="false">My
                                                    Leaderboard</button>
                                                <button className="nav-link border-0 rounded-0 px-5" id="myActvityLog-tab"
                                                    data-bs-toggle="pill" data-bs-target="#myActvityLog" type="button"
                                                    role="tab" aria-controls="myActvityLog" aria-selected="false">My
                                                    Actvity
                                                    Log</button>
                                                <button className="nav-link border-0 rounded-0 px-5" id="setPreferences-tab"
                                                    data-bs-toggle="pill" data-bs-target="#setPreferences" type="button"
                                                    role="tab" aria-controls="setPreferences" aria-selected="false">Set
                                                    Preferences</button>
                                                <button className="nav-link border-0 rounded-0 px-5" id="referralCode-tab"
                                                    data-bs-toggle="pill" data-bs-target="#referralCode" type="button"
                                                    role="tab" aria-controls="referralCode"
                                                    aria-selected="false">Referral
                                                    Code</button>
                                                <button className="nav-link border-0 rounded-0 px-5"
                                                    id="manageAddresses-tab" data-bs-toggle="pill"
                                                    data-bs-target="#manageAddresses" type="button" role="tab"
                                                    aria-controls="manageAddresses" aria-selected="false">Manage
                                                    Addresses</button>
                                                <button className="nav-link border-0 rounded-0 px-5" id="changePassword-tab"
                                                    data-bs-toggle="pill" data-bs-target="#changePassword" type="button"
                                                    role="tab" aria-controls="changePassword"
                                                    aria-selected="false">Change
                                                    Password</button>
                                                <button className="nav-link border-0 rounded-0 px-5"
                                                    id="manageSubscriptionPlans-tab" data-bs-toggle="pill"
                                                    data-bs-target="#manageSubscriptionPlans" type="button" role="tab"
                                                    aria-controls="manageSubscriptionPlans" aria-selected="false">Manage
                                                    Subscription Plans</button>
                                                <button className="nav-link border-0 rounded-0 px-5" id="raiseQuery-tab"
                                                    data-bs-toggle="pill" data-bs-target="#raiseQuery" type="button"
                                                    role="tab" aria-controls="raiseQuery" aria-selected="false">Raise
                                                    Query</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
    
  )
}

export default LeftSection