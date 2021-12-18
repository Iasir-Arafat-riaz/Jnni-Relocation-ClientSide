import React from "react";
import { Link, Outlet } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import "./DashBoardMain.css"
const DashboardMain = () => {
  const {logOut}=useFirebase()
  return (
    <div>
        <div style={{positon:"relative"}} className="row ">
            <div className="col-md-2 dashboardItems">
            <div  id="wrapper">
        {/* Sidebar */}
        <div class="bg-white" id="sidebar-wrapper">
          {/* <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <i class="fas fa-user-secret  "></i>Dashboard
          </div> */}
          <div class="list-group list-group-flush my-3">
        
            <Link to="/Dashboard/MyBooking"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-project-diagram me-2"></i>My Booking
            </Link>
            <Link
              to="/Dashboard/ServiceReview"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-chart-line me-2"></i>Review
            </Link>
            <Link
             to="/dashboard/Payment"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-paperclip me-2"></i>Payment
            </Link>
            <Link
              to="/dash"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-shopping-cart me-2"></i>Store Mng
            </Link>
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-gift me-2"></i>Products
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-comment-dots me-2"></i>Chat
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-map-marker-alt me-2"></i>Outlet
            </a>
           
            <Link
            onClick={logOut}
             to="/Home"
              class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
            >
              <i class="fas fa-power-off me-2"></i>Logout
            </Link>
          </div>
        </div>
        {/* sidebar-wrapper */}

        {/* Page Content */}
        
      </div>
            </div>
            <div className="col-md-10 dashboardOrigin">
            <Outlet />
            </div>

        </div>
   
      
    </div>
   
  );
};

export default DashboardMain;
