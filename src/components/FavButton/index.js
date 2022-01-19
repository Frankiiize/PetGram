import React from "react";
import { Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import PropTypes from 'prop-types';

const FavButton = ({ likes, handleLiked ,liked, size=32 , text = true }) => {
  return(
    <Button liked={liked} onClick={handleLiked}>
      {
        liked 
          ? <MdFavorite size={size} />
          : <MdFavoriteBorder size={size}/>
      }
      {likes} { text && `likes` }
    </Button>
  )
}

FavButton.propTypes = {
  likes: PropTypes.number.isRequired,
  handleLiked: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
  size : PropTypes.number,
  text : PropTypes.bool,
}

export { FavButton };