import styled, { keyframes, css }  from "styled-components";


const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`
export const fadeIn = ({time = '1s', type = 'ease'} = {}) => {
  return css`animation: ${time} ${fadeInKeyframes} ${type};`
}


const fadeInMenu = keyframes`
  from{
    transform:translate(0);
    filter: opacity(0)
  }
  to{
    transform:translate(0,20px);
    transform: scale(0.5);
    filter: opacity(1)
      
  }
`
export const fadeMenu = ({time = '1s', type = 'ease'} = {}) => {
  return css`animation: ${time} ${fadeInMenu} ${type};`
}

const ClickMenu = keyframes`
  from {
    width: 0
  }
  to {
    width: 100%
  }
`
export const onShowMenu = () => {
  return css`animation: 100ms ${ClickMenu} linear;`
}

const HiddeMenu = keyframes`
  from {
    width: 100%
  }
  to {
    display: none;
    width: 0;
    height: 0;
    top: 0px;
  }
`
export const onHiddeMenu = () => {
  return css`animation: 100ms ${HiddeMenu} linear;`
}

const UpPlaceholder = keyframes`
  from {
   top: 0
  }
  to {
    top:-11px;
  }
`
export const onUpPlaceholder = () => {
  return css`animation: 100ms ${UpPlaceholder} ease;`
}

