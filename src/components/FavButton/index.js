import React from "react";
import { Button } from "./styles";

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const FavButton = ({id, likes, handleLiked ,liked }) => {

  return(
    <Button liked={liked} onClick={handleLiked}>
      {
        liked 
          ? <MdFavorite size={32} />
          : <MdFavoriteBorder size={32}/>
      }
      {likes} likes
    </Button>
  )
}

export { FavButton };