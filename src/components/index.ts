import React from "react";

import Nav from "./nav";
import Footer from "./footer";
import Card from "./productCard";
const DropDown = React.lazy(() => import("./dropDown"));

export { Nav, Footer, Card, DropDown };
