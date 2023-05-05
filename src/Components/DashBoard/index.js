import React from "react";

import "./index.css"
import DropDown from "../../Common/DropDown";

const DashBoard = () => {
  // const handleLogOut = () => {
  //   localStorage.clear();
  //   navigate("/login");
  // };

  return (
    <div className="container-fluid pt-3">
      <DropDown className="d-flex justify-content-end" dropDownHeader={"Select Page"} dropDownList={["Page1","Page2","Page3"]}/>
      <h1>Home Page Comes Here</h1>
    </div>
  );
};

export default DashBoard;
