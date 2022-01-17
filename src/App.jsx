import React, {Suspense} from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Logo } from "./components/Logo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./components/Layaout/PrivateRoutes";
import { ProviderAuth } from "./components/Context/AuthContext";
const Home = React.lazy(() => import('./pages/Home.js'))
const Favs = React.lazy(() => import('./pages/Favs.js'));
const Profile = React.lazy(() => import('./pages/Profile.js'));
const Login = React.lazy(() => import('./pages/Login.js'));
const Details = React.lazy(() => import('./pages/Details.js'));
const NavBar = React.lazy(() => import('./components/Navbar'))


const App = ({client}) => {
  return (
    <ProviderAuth client={client}>
      <BrowserRouter>
        <GlobalStyle/>
        <Logo />
        <Suspense fallback={<div>Loadin...</div>}>
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
        </Suspense>
      </BrowserRouter>
    </ProviderAuth>
  )
}
export { App };