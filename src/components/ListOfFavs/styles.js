import styled from "styled-components";
import { colorPallete, fonts } from '../../styles/GlobalStyle'
export const FavoritesWrapper = styled.div`
  margin: 0 auto;
  width:100%;
  height: calc(100vh - 200px);
  display:grid;
  grid-template-rows:repeat(3,minmax(auto,1fr));
  grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
  overflow: scroll;
  align-self:stretch;
  row-gap: 5px;
`

export const Imagen = styled.img`
  width:100%;
  height:100%;
  min-height:250px;
  overflow: hidden;
  border: 1px solid ${colorPallete.secondary};
  border-radius: 5px;
  object-fit: cover;
`
export const Title = styled.h2`
  font-size: 20px;
  color: ${colorPallete.tertiary};
  font-family: ${fonts.primary};
  margin:0 5px;
`
export const  FavsContainer = styled.div`
  width:95%;
  margin: 0 auto;

`
export const TitleContainer = styled.div`
  display: inline-flex;
  align-items: center;

`
/* 
grid-template-columns:repeat(3,minmax(auto,1fr)) ;
  grid-template-rows:repeat(auto-fit, 250px); 
  */