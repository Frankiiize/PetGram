import React, { useContext, useState } from "react";
import { Navigate, Route, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoutes = ({children}) => {
  const { isAuth } = useContext(AuthContext)
  let location = useLocation()
  if(!isAuth) {
    return <Navigate to="/login" state={{from:location}} replace />
  }

  return children
}
export { PrivateRoutes };