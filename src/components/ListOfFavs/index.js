import React from "react";
import { Link } from "react-router-dom";
import { FavoritesWrapper, Imagen } from './styles.js'
import PropTypes from 'prop-types';

const ListOfFavs = ({favs}) => {
  return (
    <>
        <FavoritesWrapper>
          {
            favs.map((fav) => (
              <Link key={fav.id} to={`/details/${fav.id} `} >
                <Imagen src={fav.src} /> 
              </Link>
          ))
          }
        </FavoritesWrapper>
    </>
  )
}
ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string
    })
  )
}

export { ListOfFavs };