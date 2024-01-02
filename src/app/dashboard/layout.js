import React from "react";
import SideBar from "./SideBar";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />

      {children}
    </div>
  );
};

export default DashBoardLayout;
