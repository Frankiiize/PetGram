import React, { useState } from "react";
import { Boton, Nav } from "./styles";
import { MdHome, MdPersonOutline, MdOutlineFavorite } from "react-icons/md";

const NavBar = () => {
  const activeClass = 'activado'
  return(
    <Nav>
      <Boton to={"/"} style={({isActive}) => (
        isActive ? 'activado' : undefined 
      )}>
        <MdHome size={32}/>
      </Boton>
      <Boton to={"favs"} style={({isActive}) => (
        isActive ? 'activado' : undefined 
      )}>
        <MdOutlineFavorite size={32} />
      </Boton>
      <Boton to={"profile"} style={({isActive}) => (
        isActive ? 'activado' : undefined 
      )}>
        <MdPersonOutline size={32}/>
      </Boton>
    </Nav>
  )
}

export { NavBar };