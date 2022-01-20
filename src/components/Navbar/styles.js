import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { colorPallete } from "../../styles/GlobalStyle";
import { fadeIn } from "../../styles/animation";
import { onShowMenu, onHiddeMenu } from "../../styles/animation";
export const NavContainer = styled.nav`
  max-width:600px;
  margin:0 auto;
  position:relative;
  display:flex;
  justify-content: flex-end;
`
export const  Ul = styled.ul`
  ${onShowMenu()}
  display:flex;
  width:100%;
  height:50px;
  background-color: ${colorPallete.primary};
  position: fixed;
  bottom: 0;
  justify-content:space-around;
  align-items:flex-start;
  max-width:600px;
  margin:0 auto
  ${ props => !props.showNav &&
     css`
      ${onHiddeMenu};
     `
  }
`
export const Li = styled.li`
  display: inline-flex;
  align-items:center;
  justify-content:center;
  height:100%;
  width:100%;
  color: ${colorPallete.tertiary};
  
`
export const Boton = styled(NavLink)`
  display: inline-flex;
  align-items:center;
  justify-content:center;
  color: ${colorPallete.tertiary};
  &.active {
    color: ${colorPallete.secondary};
  &:before {
  ${fadeIn({time: '500ms'})}
  content: '.';
  position:absolute;
  font-size: 42px;
  margin-top:5px;
  display:flex;
  width: 100%;
  height:100%;
  justify-content:center;
  margin-left: 1px;
  z-index: -1;
  color: #6ddb53;
  }
  &:hover {
    color: ${colorPallete.secondary};
  
  }
  
}
`

export const HamburderContainer = styled.div`
  position: fixed;
  display:flex;
  align-items:center;
  bottom:0; 
  color: ${colorPallete.tertiary};
  background-color:${colorPallete.primary};
  border-radius: 5px;
  
`