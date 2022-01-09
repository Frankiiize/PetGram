import React from "react";
import { Button } from "./styles";

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const FavButton = ({id, likes, handleLiked ,liked }) => {

  

  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  return(
    <Button onClick={handleLiked}>
      <Icon size="32px" />
      {likes} likes
    </Button>
  )
}

export { FavButton };