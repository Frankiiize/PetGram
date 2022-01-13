import React, { createContext, useState } from "react";

const AuthContext = createContext();

const ProviderAuth = ({children}) => {
  const [ isAuth, setIsAuth ] = useState(() =>{
    return window.sessionStorage.getItem('token');
  });
  const value = {
    isAuth,
    activeAuth : (token) => {
      console.log(token.data.login)
      setIsAuth(true);
      window.sessionStorage.setItem('token', JSON.stringify(token.data.login) )
    }
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, ProviderAuth } ;