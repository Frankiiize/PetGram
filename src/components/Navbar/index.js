import React, { useState } from "react";
import { Boton, Nav } from "./styles";
import { MdHome, MdPersonOutline, MdOutlineFavorite } from "react-icons/md";

const NavBar = () => {
  const activeClass = 'activado'
  return(
    <Nav>
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
  )
}

export { NavBar };