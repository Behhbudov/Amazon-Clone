import React, { Fragment } from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
