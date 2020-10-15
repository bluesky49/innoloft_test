import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import Home from "../Pages/Home";
import MobileMenu from "./MobileMenu";

const Router = () => {
  return (
    <BrowserRouter>
      <MobileMenu />
    </BrowserRouter>
  );
};

export default Router;
