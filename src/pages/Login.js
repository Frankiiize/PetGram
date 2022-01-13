import React, { useContext, useState } from "react";
import { AuthContext } from "../components/Context/AuthContext";
import { LoginForm } from "../components/LoginForm";
import { useRegister } from "../hooks/useRegister";
import { useLogin } from "../hooks/useLogin";


const Login = () => {
  const { isAuth, activeAuth } = useContext(AuthContext);
  const { sendRegisterData, error, loading } = useRegister(activeAuth);
  const { sendLoginData, loadingLogin, errorLogin  } = useLogin(activeAuth)
  const [ showRegister , setShowRegister ]  = useState(false);
  const handleTypeOfForm = () => {
    setShowRegister(!showRegister)
    console.log(showRegister)
  }
  

  return (
    <>
      {!showRegister 
      ? (
          <LoginForm
            title={"Login"}
            error={errorLogin}
            isDisabled={loadingLogin}
            onSubmitData={sendLoginData}
            handleTypeOfForm={handleTypeOfForm}
            howRegister={showRegister}
          />
        ) 
      : (
          <LoginForm
            title={"Sign UP!"}
            error={error}
            isDisabled={loading}
            onSubmitData={sendRegisterData}
            handleTypeOfForm={handleTypeOfForm}
            showRegister={showRegister}
          />
        )}
    </>
  );
}
{/* <LoginForm activeAuth={activeAuth} title={"registrate"}/>
 */}
export { Login };