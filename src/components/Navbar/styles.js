import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { colorPallete } from "../../styles/GlobalStyle";
import { fadeIn } from "../../styles/animation";
import { onShowMenu, onHiddeMenu } from "../../styles/animation";
export const  Nav = styled.nav`
  ${onShowMenu()}
  display:flex;
  width:100%;
  height:50px;
  background-color: ${colorPallete.primary};
  position: fixed;
  bottom: 0;
  right: 0;
  justify-content:space-around;
  align-items:flex-start;
  ${ props => !props.showNav &&
     css`
      ${onHiddeMenu};
     `
  }
`

export const Boton = styled(NavLink)`
  display: inline-flex;
  align-items:center;
  justify-content:center;
  height:100%;
  width:100%;
  color: ${colorPallete.tertiary};
  &:hover {
    color: ${colorPallete.secondary};
  
  }
 
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
  
}
`

export const HamburderContainer = styled.div`
  position: fixed;
  display:flex;
  align-items:center;
  right: 5px;
  bottom:0; 
  color: ${colorPallete.tertiary};
  background-color:${colorPallete.primary};
  border-radius: 5px;
  
`