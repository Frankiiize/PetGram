import styled from "styled-components";
import { colorPallete } from '../../styles/GlobalStyle'
export const FavoritesWrapper = styled.div`
  margin: 0 auto;
  width:95%;
  height: calc(100vh - 200px);
  display:grid;
  grid-template-columns:repeat(3, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  overflow: scroll;
  column-gap:1px;
  align-self:stretch;
`

export const Imagen = styled.img`
  min-width:100%;
  max-width:200px;
  height:100%;
  max-height:200px;
  overflow: hidden;
  border: 1px solid ${colorPallete.secondary};
  border-radius: 5px;
  object-fit: cover;
`
export const Title = styled.h2`
  font-size: 16px;
  color: ${colorPallete.tertiary}
`