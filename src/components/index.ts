import React from "react";

import Nav from "./nav";
import Footer from "./footer";
import Card from "./productCard";
import ListItem from "./listItem";
const DropDown = React.lazy(() => import("./dropDown"));

export { Nav, Footer, Card, DropDown, ListItem };
