import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { Details } from "./pages/Details";
import { NavBar } from "./components/Navbar";
import { Favs } from "./pages/Favs";
import { Profile } from "./pages/Profile";
import { PrivateRoutes } from "./components/Layaout/PrivateRoutes";
import { Login } from "./pages/Login";
import { ProviderAuth } from "./components/Context/AuthContext";


const App = () => {
 

  return (
    <ProviderAuth>
      <BrowserRouter>
        <GlobalStyle/>
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="pet/:id" element={<Home />}/>
          </Route>
          <Route path="details/:detailsId" element={<Details/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="favs" element={
            <PrivateRoutes>
              <Favs/>
            </PrivateRoutes>
          } />
          <Route path="profile" element={
            <PrivateRoutes>
              <Profile/>
            </PrivateRoutes>
          }/>
        
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </ProviderAuth>
  )
}

export { App };