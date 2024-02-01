import React, { useContext } from "react";
import DashboardSidebar from "../Components/DashboardSidebar/DashboardSidebar";
import MyProfileComp from "../Components/MyProfile/MyProfile";

function MyProfile() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <DashboardSidebar />
        <MyProfileComp />
      </div>
    </>
  );
}

export default MyProfile;
