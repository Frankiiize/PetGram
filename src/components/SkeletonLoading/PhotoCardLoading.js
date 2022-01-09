import React from "react";
import { MdFavoriteBorder } from 'react-icons/md'
import styled from "styled-components";
import loadingRing from '../../assets/Dual Ring-1s-200px.svg'
const WrapperLoading = styled.div`
  width: 100%;
  height: 250px;
  background-color: #eee;
  display:flex;
  justify-content: center;
  align-items: center;

`
const StylesLoader = styled.img`
  display:flex;
  width:32px;
  background-color: transparent;
`
const PhotoCardLoading = () => {
  return (
    <>
      <WrapperLoading>
        <p>Loading...</p>
        <StylesLoader src={loadingRing} alt="loader" />
      </WrapperLoading>
      <MdFavoriteBorder size={32} color="#eee"/>
    </>
    
  )
}

export { PhotoCardLoading}