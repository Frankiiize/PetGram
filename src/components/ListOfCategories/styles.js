import styled, { css } from "styled-components";
import { fadeIn , fadeMenu } from "../../styles/animation";
const List = styled.ul `
display: flex;
overFlow: scroll;
width: 100%;
align-items: center;
max-width:600px;
margin:0 auto;
justify-content: flex-start;
  &::-webkit-scrollbar {
      display: none;
    }
    ${props => props.fixed && css`
      {
      ${fadeMenu({time:'0.7s'})}
      
      display:inline-flex;
      justify-content:flex-start;
      background: #fff;
      border-radius: 50px;
      box-shadow: 0 0 20px rgba(0,0,0,0.3);
      left: 0;
      right: 0;
      top: -20px;
      margin: 0 auto;
      padding: 5px;
      position: fixed;
      transform: scale(0.5);
      z-index: 1;
      max-width:500px;
    }
    `}
 

`

const Item = styled.li `
  padding: 0 8px;
`
const StyledLoader = styled.img `
  display: flex;
  width: 100%;
  max-width: 72px;
`

export { List, Item, StyledLoader };

/* 
   ${props => props.fadeIn && css`
      {
        ${fadeIn({time: '0.5s', type: 'ease'})}
      }
    `}
*/