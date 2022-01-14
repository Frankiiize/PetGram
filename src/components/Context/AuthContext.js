import React, { createContext, useState } from "react";

const AuthContext = createContext();

const ProviderAuth = ({children}) => {
  const [ isAuth, setIsAuth ] = useState(() =>{
    return window.sessionStorage.getItem('token');
  });
  const value = {
    isAuth,
    activeAuth : ({data}) => {
      const {signup} = data ?? null
      const {login} = data ?? null
      console.log(signup)
      if(!!signup){
        window.sessionStorage.setItem('token', signup )
        setIsAuth(true);
      } else {
        window.sessionStorage.setItem('token', login )
        setIsAuth(true);
      }
    }
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, ProviderAuth } ;