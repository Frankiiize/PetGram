import React, { createContext, useState } from "react";

const AuthContext = createContext();

const ProviderAuth = ({children, client}) => {
  const [ isAuth, setIsAuth ] = useState(() =>{
    return window.sessionStorage.getItem('token');
  });
  const value = {
    isAuth,
    client,
    activeAuth : ({data}) => {
      const {signup} = data ?? null
      const {login} = data ?? null
      if(!!signup){
        window.sessionStorage.setItem('token', signup )
        setIsAuth(true);
        client.resetStore();
      } else {
        window.sessionStorage.setItem('token', login )
        setIsAuth(true);
        client.resetStore();
      }
    },
    removeAuth : async () => {
      window.sessionStorage.removeItem('token')
      setIsAuth(false);
    }
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, ProviderAuth } ;