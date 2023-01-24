import React from "react";
import { Outlet } from "react-router-dom";
import JsSideMenu from "./JsSideMenu";

export default function Javascript() {
  return (
    <div className="Contact">
      <JsSideMenu />
      <Outlet />
    </div>
  );
}
