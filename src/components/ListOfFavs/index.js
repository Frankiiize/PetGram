import React from "react";
import { FavoritesWrapper, Imagen, Title } from './styles.js'
const ListOfFavs = (props) => {
  return (
    <>
      <Title>Favorites</Title>
      <FavoritesWrapper>
        {
          props.favs.map((fav) => (
          <Imagen src={fav.src} key={fav.id} /> 
        ))
        }
      </FavoritesWrapper>
    </>
  )
}

export { ListOfFavs };