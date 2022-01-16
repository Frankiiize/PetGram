import React from "react";
import { Button } from "./styles";

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const FavButton = ({id, likes, handleLiked ,liked, size=32 , text = true }) => {
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

export { FavButton };