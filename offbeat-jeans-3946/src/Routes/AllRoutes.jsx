import React from "react";
import { Routes, Route } from "react-router-dom";
import{ Home} from "../Pages/Home";
// import Cart from "../Pages/Cart";

import PrivateRoute from "./PrivateRoutes";
import  Product  from "../Pages/Product";
import Cart from "../Components/Cart";
// all the routing using the routing library should be done from here;

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
        //   <PrivateRoute>
            <Home />
        //   </PrivateRoute>
        }
      />
      {/* <Route path="/login
      " element={<Login />} /> */}
      <Route path="/product" element={<Product/>} />
      <Route
        path="/cart"
        element={
          // <PrivateRoute>
            <Cart />
          //  </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
