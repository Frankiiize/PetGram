import styled, { css } from "styled-components";
import { fadeIn  } from "../../styles/animation";
const List = styled.ul `
 display: flex;
 overFlow: scroll;
 width: 100%;
 justify-content: space-around;
 align-items: center;
  &::-webkit-scrollbar {
      display: none;
    }
    ${props => props.fixed && css`
      {
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0,0,0,0.3);
      left: 0;
      right: 0;
      top: -20px;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      transform: scale(0.5);
      z-index: 1;
    }
    `}
    ${props => props.fadeIn && css`
      {
        ${fadeIn({time: '0.5s', type: 'ease'})}
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