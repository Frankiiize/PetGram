import React, { useEffect, useState } from "react";
import { NavContainer, Boton, Nav, HamburderContainer } from "./styles";
import { MdHome, MdPersonOutline, MdOutlineFavorite, MdMenuOpen } from "react-icons/md";
const NavBarComponent = () => {
  const [ showNav, setShowNav ] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY < 80;
      showNav !== newShowFixed && setShowNav(newShowFixed);
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  },[showNav]);

  return (
    <NavContainer>
      {
        showNav
        ?
        <Nav showNav={showNav}>
          <Boton to={"/"} title="home" style={({isActive})  => (
            isActive ? 'activado' : undefined 
          )}>
            <MdHome size={32}/>
          </Boton>
          <Boton to={"favs"} title="favorites" style={({isActive}) => (
            isActive ? 'activado' : undefined 
          )}>
            <MdOutlineFavorite size={32} />
          </Boton>
          <Boton to={"profile"} title="profile" style={({isActive}) => (
            isActive ? 'activado' : undefined 
          )}>
            <MdPersonOutline size={32}/>
          </Boton>
        </Nav>
         :
         <HamburderContainer onClick={() => setShowNav(true)}>
          <MdMenuOpen size={50} >menu</MdMenuOpen>
         </HamburderContainer>
      }
  
    </NavContainer>

  )
}

export default function(){
  return(
    <NavBarComponent />
  )
}

