import React from "react";
import { Link } from "react-router-dom";
import {FavsContainer, FavoritesWrapper, Imagen, Title } from './styles.js'
const ListOfFavs = (props) => {
  console.log(props)
  return (
    <>
        <FavoritesWrapper>
          {
            props.favs.map((fav) => (
              <Link key={fav.id} to={`/details/${fav.id} `} >
                <Imagen src={fav.src} /> 
              </Link>
          ))
          }
        </FavoritesWrapper>
    </>
  )
}

export { ListOfFavs };