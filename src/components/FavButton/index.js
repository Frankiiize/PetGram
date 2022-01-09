import React from "react";
import { Button } from "./styles";
import { useLocalStorage  } from "../../hooks/useLocalStorage";

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const FavButton = ({id, likes}) => {
  const key = `like-${id}`

  const [ liked, setLiked]  = useLocalStorage(key,false);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  return(
    <Button onClick={() => setLiked(!liked)}>
      <Icon size="32px" />
      {likes} likes
    </Button>
  )
}

export { FavButton };