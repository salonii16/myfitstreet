import React from 'react'
import { NavLink } from 'react-router-dom'
function Sidebar() {
  return (
    <>
        <div className="col-auto mainLeftbar h-100 bg-theme2">
                <div className="leftBarLogo d-flex align-items-center justify-content-center sticky-top">
                    <NavLink className="navbar-brand" to="/dashboard">
                        <img src="../assets/images/image-8.png" alt="logo" className="toplogo" />
                    </NavLink>
                </div>
                <div className="sidebarItemBox">
                    <NavLink className="text-decoration-none text-white itemHover " to="/dashboard">
                        <div className="mx-auto sidebarItem">
                            <img src="../assets/images/image-77.png" alt="nav item image" className="sidebarItemImage" />
                            <span className="tooltipHover custom-tooltip" data-bs-toggle="tooltip" data-bs-placement="right"
                                data-bs-title="Dashboard" data-bs-custom-className="custom-tooltip"></span>
                        </div>
                        <div className="dashboardText text-center mt-2">Dashboard</div>
                    </NavLink>
                </div>
                <div className="sidebarItemBox">
                    <NavLink className="text-decoration-none text-white itemHover" to="/events">
                        <div className="mx-auto sidebarItem">
                            <img src="../assets/images/image-78.png" alt="nav item image" className="sidebarItemImage"/>
                            <span className="tooltipHover custom-tooltip" data-bs-toggle="tooltip" data-bs-placement="right"
                                data-bs-title="Events" data-bs-custom-className="custom-tooltip"></span>
                        </div>
                        <div className="dashboardText text-center mt-2">Events</div>
                    </NavLink>
                </div>
                <div className="sidebarItemBox">
                    <NavLink className="text-decoration-none text-white itemHover" to="/clubs">
                        <div className="mx-auto sidebarItem">
                            <img src="../assets/images/image-79.png" alt="nav item image" className="sidebarItemImage"/>
                            <span className="tooltipHover custom-tooltip" data-bs-toggle="tooltip" data-bs-placement="right"
                                data-bs-title="Clubs" data-bs-custom-className="custom-tooltip"></span>
                        </div>
                        <div className="dashboardText text-center mt-2">Clubs</div>
                    </NavLink>
                </div>
                <div className="sidebarItemBox">
                    <NavLink className="text-decoration-none text-white itemHover" to="/healtharticle">
                        <div className="mx-auto sidebarItem">
                            <img src="../assets/images/image-80.png" alt="nav item image" className="sidebarItemImage"/>
                            <span className="tooltipHover custom-tooltip" data-bs-toggle="tooltip" data-bs-placement="right"
                                data-bs-title="Health Articles" data-bs-custom-className="custom-tooltip"></span>
                        </div>
                        <div className="dashboardText text-center mt-2">Health Articles</div>
                    </NavLink>
                </div>
            </div>  
    </>
  )
}

export default Sidebar