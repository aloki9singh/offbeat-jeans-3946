import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";


const PrivateRoute = ({ children }) => {
  const { state } = useContext(AuthContext);

  if (!state.isAuth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
