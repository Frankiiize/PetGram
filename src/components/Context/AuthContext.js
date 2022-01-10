import React, { createContext, useState } from "react";

const AuthContext = createContext();

const ProviderAuth = ({children}) => {
  const [ isAuth, setIsAuth ] = useState(false);
  const value = {
    isAuth,
    activeAuth : () => {
      setIsAuth(true);
    }
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, ProviderAuth } ;