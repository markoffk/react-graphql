import React from "react";
import { Outlet } from "react-router-dom";

export const MainPageTemplate = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
