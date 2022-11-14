import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
// import Cart from "../Pages/Cart";

import PrivateRoute from "./PrivateRoutes";
import Product from "../Pages/Product";
import Cart from "../Components/Cart";
import { Admin } from "../Pages/Admin";
// all the routing using the routing library should be done from here;

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/product" element={<Product />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
       <Route
        path="/admin"
        element={
          // <PrivateRoute>
            <Admin/>
          // </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
