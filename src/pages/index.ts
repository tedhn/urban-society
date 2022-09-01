import React from "react";


import Home from "./home";
const ProductDetails = React.lazy(() => import("./productDetails"));
const ProductList = React.lazy(() => import("./productList"));
const Search = React.lazy(() => import("./search"));
const Wishlist = React.lazy(() => import("./wishlist"));
const Category = React.lazy(() => import("./category"));
const Cart = React.lazy(() => import("./cart"));


export { Cart, Home, ProductDetails, ProductList, Search, Wishlist, Category };
