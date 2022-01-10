import React, { useContext, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/Context/AuthContext";

const Login = () => {
  const { isAuth, activeAuth } = useContext(AuthContext);
  console.log(isAuth)
  let location = useLocation();
  let navigate = useNavigate();
 
  
  const handleLogin = () => {
    activeAuth()
    console.log(isAuth)
    navigate(location.state.from.pathname, {replace:true});
  }
  return(
    <>
      <h1>Login Page</h1>
      <button onClick={() => handleLogin()}>login</button>
    </>
  )
}

export { Login };