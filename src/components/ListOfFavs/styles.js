import styled from "styled-components";
import { colorPallete } from '../../styles/GlobalStyle'
export const FavoritesWrapper = styled.div`
  margin: 0 auto;
  width:95%;
  height: calc(100vh - 200px);
  display:grid;
  justify-content: space-around;
  grid-template:repeat(3,minmax(auto,1fr))/repeat(auto-fit, 250px);
  overflow: scroll;
  align-self:stretch;
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
  font-size: 16px;
  color: ${colorPallete.tertiary}
`

/* 
grid-template-columns:repeat(3,minmax(auto,1fr)) ;
  grid-template-rows:repeat(auto-fit, 250px); 
  */