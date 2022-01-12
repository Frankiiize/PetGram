import React, { useContext, useState } from "react";
import { AuthContext } from "../components/Context/AuthContext";
import { LoginForm } from "../components/LoginForm";
const Login = () => {
  const { isAuth, activeAuth } = useContext(AuthContext);
  const [ showLogin , setShowLogin ]  = useState(false);
  const handleTypeOfForm = () => {
    setShowLogin(!showLogin)
    console.log(showLogin)
  }
  return(
    <>
    {
      !showLogin 
          ? <LoginForm 
              handleTypeOfForm={handleTypeOfForm}
              activeAuth={activeAuth} 
              title={"Login"}
            />
          : <LoginForm 
              activeAuth={activeAuth}
              title={"Sign UP!"}
              handleTypeOfForm={handleTypeOfForm}
              showLogin={showLogin}
              />
    }
      
    </>
  )
}
{/* <LoginForm activeAuth={activeAuth} title={"registrate"}/>
 */}
export { Login };